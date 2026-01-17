// test/index.test.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { beforeAll, describe, expect, test, spyOn } from 'bun:test';
    import {
        getIconCategories,
        getIconNames,
        getIconsByCategory,
        iconCatalog,
        iconExists,
        sizeMap,
        type IconName,
        Icon,
    } from '../src';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ SETUP ═══════════════════════════════════════╗

    class FakeNode {
        style = {
            setProperty(_name: string, _value: string) {
                // no-op
            },
        };

        appendChild(child: FakeNode) {
            return child;
        }

        setAttribute(_name: string, _value: string) {
            // no-op
        }
    }

    class FakeDocumentFragment extends FakeNode {}

    beforeAll(() => {
        (globalThis as any).Node = FakeNode;
        (globalThis as any).document = {
            createDocumentFragment() {
                return new FakeDocumentFragment();
            },
            createElementNS(_ns: string, _tag: string) {
                return new FakeNode();
            },
            createElement(_tag: string) {
                return new FakeNode();
            },
            createTextNode(_text: string) {
                return new FakeNode();
            },
        };
    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TEST ════════════════════════════════════════╗

    describe('@cruxkit/icon', () => {

        test('sizeMap provides all predefined sizes', () => {
            expect(sizeMap.xs).toBe('0.75rem');
            expect(sizeMap.sm).toBe('1rem');
            expect(sizeMap.md).toBe('1.25rem');
            expect(sizeMap.lg).toBe('1.5rem');
            expect(sizeMap.xl).toBe('2rem');
            expect(sizeMap.xxl).toBe('2.5rem');
        });

        test('iconCatalog exposes at least one icon', () => {
            const names = Object.keys(iconCatalog) as IconName[];
            expect(names.length).toBeGreaterThan(0);
            expect(names).toContain('chevron-down');
        });

        test('iconExists returns true for existing icons and false otherwise', () => {
            expect(iconExists('chevron-down')).toBe(true);
            expect(iconExists('non-existent-icon')).toBe(false);
        });

        test('getIconNames returns all catalog icon names', () => {
            const names = getIconNames();
            expect(names).toContain('chevron-down');
            expect(new Set(names).size).toBe(names.length);
        });

        test('getIconCategories and getIconsByCategory are consistent', () => {
            const categories = getIconCategories();
            expect(categories.length).toBeGreaterThan(0);
            expect(categories).toContain('chevron');

            const chevronIcons = getIconsByCategory('chevron');
            expect(chevronIcons).toContain('chevron-down');
        });

        test('Icon renders catalog icon when called with name string', () => {
            const element = Icon('chevron-down');
            expect(element).not.toBeNull();
        });

        test('Icon renders catalog icon when called with config name', () => {
            const element = Icon({ name: 'chevron-down' });
            expect(element).not.toBeNull();
        });

        test('Icon uses numeric size when provided', () => {
            const element = Icon({ name: 'chevron-down', size: 32 });
            expect(element).not.toBeNull();
        });

        test('Icon falls back to medium size when none provided', () => {
            const element = Icon({ name: 'chevron-down' });
            expect(element).not.toBeNull();
        });

        test('Icon allows custom SVG when name is missing from catalog', () => {
            const element = Icon({
                name    : 'unknown-icon',
                svg     : '<circle cx="12" cy="12" r="10" />',
                viewBox : '0 0 24 24',
            });

            expect(element).not.toBeNull();
        });

        test('Icon allows custom SVG without providing a name', () => {
            const element = Icon({
                svg     : '<rect x="4" y="4" width="16" height="16" />',
                viewBox : '0 0 24 24',
            });

            expect(element).not.toBeNull();
        });

        test('Icon logs a warning and returns null when configuration is invalid', () => {
            const spy = spyOn(console, 'warn');

            const element = Icon({} as never);

            expect(element).toBeNull();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });

        test('Icon logs a warning and returns null when unknown name without svg is provided', () => {
            const spy = spyOn(console, 'warn');

            const element = Icon({ name: 'really-unknown-icon' as IconName });

            expect(element).toBeNull();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });

    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
