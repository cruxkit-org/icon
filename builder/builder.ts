import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { basename, dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

type IconInfo = {
    name: string;
    viewBox: string;
    svg: string;
};

type CategoryInfo = {
    name: string;
    constName: string;
    icons: IconInfo[];
};

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);
const projectRoot = dirname(dirPath);
const svgRoot = join(dirPath, 'svg');
const categoriesRoot = join(projectRoot, 'src', 'kit', 'categories');

function toPascalCase(value: string): string {
    return value
        .split(/[^a-zA-Z0-9]+/g)
        .filter(Boolean)
        .map((part) => part[0].toUpperCase() + part.slice(1))
        .join('');
}

function escapeTemplateLiteral(content: string): string {
    return content.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

async function buildCategory(category: string): Promise<CategoryInfo | null> {
    const categoryDir = join(svgRoot, category);
    const entries = await readdir(categoryDir, { withFileTypes: true });
    const icons: IconInfo[] = [];

    for (const entry of entries) {
        if (!entry.isFile() || extname(entry.name).toLowerCase() !== '.svg') continue;

        const iconName = basename(entry.name, '.svg');
        const svgPath = join(categoryDir, entry.name);
        const raw = await readFile(svgPath, 'utf8');

        const viewBoxMatch = raw.match(/viewBox="([^"]+)"/i);
        const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

        const inner = raw
            .replace(/^[\s\S]*?<svg[^>]*>/i, '')
            .replace(/<\/svg>\s*$/i, '')
            .trim();

        icons.push({
            name: iconName,
            viewBox,
            svg: escapeTemplateLiteral(inner),
        });
    }

    if (!icons.length) return null;

    const constName = `${category}Icons`;
    const typeName = `${toPascalCase(category)}IconName`;
    const lines: string[] = [];

    lines.push(`export const ${constName} = {`);
    for (const icon of icons) {
        lines.push(`  '${icon.name}': {`);
        lines.push(`    category: '${category}',`);
        lines.push(`    viewBox: '${icon.viewBox}',`);
        lines.push(`    svg: \`${icon.svg}\`,`);
        lines.push('  },');
    }
    lines.push('} as const;');
    lines.push('');
    lines.push(`export type ${typeName} = keyof typeof ${constName};`);

    await mkdir(categoriesRoot, { recursive: true });
    const outPath = join(categoriesRoot, `${category}.ts`);
    await writeFile(outPath, `${lines.join('\n')}\n`, 'utf8');

    return {
        name: category,
        constName,
        icons,
    };
}

async function buildIndex(categories: CategoryInfo[]): Promise<void> {
    const lines: string[] = [];

    for (const category of categories) {
        lines.push(`import { ${category.constName} } from './${category.name}';`);
    }

    lines.push('');
    lines.push('export const iconCatalog = {');
    for (const category of categories) {
        lines.push(`  ...${category.constName},`);
    }
    lines.push('} as const;');
    lines.push('');
    lines.push('export type IconName = keyof typeof iconCatalog;');
    lines.push('');
    lines.push('export const iconsByCategory = {');
    for (const category of categories) {
        const names = category.icons.map((icon) => `'${icon.name}'`).join(', ');
        lines.push(`  '${category.name}': [${names}],`);
    }
    lines.push('} as const;');

    await mkdir(categoriesRoot, { recursive: true });
    const indexPath = join(categoriesRoot, 'index.ts');
    await writeFile(indexPath, `${lines.join('\n')}\n`, 'utf8');
}

async function buildAll(): Promise<void> {
    await mkdir(categoriesRoot, { recursive: true });

    const entries = await readdir(svgRoot, { withFileTypes: true });
    const categories: CategoryInfo[] = [];

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const info = await buildCategory(entry.name);
        if (info) categories.push(info);
    }

    await buildIndex(categories);
}

buildAll().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
