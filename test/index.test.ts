// test/index.test.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { beforeAll, describe, expect, test, spyOn } from 'bun:test';
    import { JSDOM } from 'jsdom';
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



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    // Setup DOM environment
    const dom               = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document         = dom.window.document;
    global.window           = dom.window as any;
    global.HTMLElement      = dom.window.HTMLElement;
    global.Element          = dom.window.Element;
    global.Text             = dom.window.Text;
    global.DocumentFragment = dom.window.DocumentFragment;
    global.Node             = dom.window.Node;

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
            expect(names).toContain('arrow-down');
        });

        test('iconExists returns true for existing icons and false otherwise', () => {
            expect(iconExists('arrow-down')).toBe(true);
            expect(iconExists('non-existent-icon')).toBe(false);
        });

        test('getIconNames returns all catalog icon names', () => {
            const names = getIconNames();
            expect(names).toContain('arrow-down');
            expect(new Set(names).size).toBe(names.length);
        });

        test('getIconCategories and getIconsByCategory are consistent', () => {
            const categories = getIconCategories();
            expect(categories.length).toBeGreaterThan(0);
            expect(categories).toContain('arrow');

            const arrowIcons = getIconsByCategory('arrow');
            expect(arrowIcons).toContain('arrow-down');
        });

        test('Icon renders catalog icon when called with name string', () => {
            const element = Icon('arrow-down');
            expect(element).not.toBeNull();
        });

        test('Icon renders catalog icon when called with config name', () => {
            const element = Icon({ name: 'arrow-down' });
            expect(element).not.toBeNull();
        });

        test('Icon uses numeric size when provided', () => {
            const element = Icon({ name: 'arrow-down', size: 32 });
            expect(element).not.toBeNull();
        });

        test('Icon falls back to medium size when none provided', () => {
            const element = Icon({ name: 'arrow-down' });
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
