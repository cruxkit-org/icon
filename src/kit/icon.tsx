// src/kit/icon.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { JSXElement }                               from '@minejs/jsx';
    import { IconProps, iconCatalog, type IconName }    from '../types';
    import { iconsByCategory }                          from './categories';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    export const sizeMap: Record<string, string> = {
        xxs     : '0.6rem',
        xs      : '0.75rem',
        sm      : '1rem',
        md      : '1.25rem',
        lg      : '1.5rem',
        xl      : '2rem',
        'xxl'   : '2.5rem'
    };

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    /**
     * Icon Component
     * Renders inline SVG icons with various options
     *
     * @example
     * Icon('check')
     * Icon({ name: 'spinner', spin: true, size: 'lg' })
     */
    export function Icon(props: IconProps) : JSXElement | null {

        interface IconLikeConfig {
            name?       : string
            size?       : number | string
            color?      : string
            svg?        : string
            viewBox?    : string
        }

        const config = typeof props === 'string' ? { name: props } : props;
        const cfg    = config as IconLikeConfig;

        let iconData: { viewBox: string; svg: string } | null = null;

        if (cfg.name && cfg.name in iconCatalog) {
            iconData = iconCatalog[cfg.name as IconName] as { viewBox: string; svg: string };
        } else if (cfg.svg) {
            iconData = {
                viewBox : cfg.viewBox || '0 0 24 24',
                svg     : cfg.svg
            };
        }

        if (!iconData) {
            if (cfg.name) {
                console.warn(`Icon "${cfg.name}" not found in catalog`);
            } else {
                console.warn('Icon configuration is invalid');
            }
            return null;
        }

        const sizeValue = cfg.size;

        const size = typeof sizeValue === 'number'
            ? `${sizeValue}px`
            : sizeMap[sizeValue || 'md'];

        const style: Record<string, string> = {
            width                   : size,
            height                  : size,
            display                 : 'inline-block',
            verticalAlign           : 'middle',
            lineHeight              : '1',
            flexShrink              : '0'
        };

        if (cfg.color) style.color = cfg.color;

        return (
            <svg
                style               = {style}
                viewBox             = {iconData.viewBox}
                fill                = "currentColor"
                xmlns               = "http://www.w3.org/2000/svg"
                aria-hidden         = "true"
                role                = "img"
                dangerouslySetInnerHTML = {{
                    __html          : iconData.svg
                }}
            />
        );
    }

    /**
     * Utility function to check if an icon exists
     */
    export function iconExists(name: string): name is IconName {
        return name in iconCatalog;
    }

    /**
     * Get all available icon names
     */
    export function getIconNames(): IconName[] {
        return Object.keys(iconCatalog) as IconName[];
    }

    /**
     * Get icons by category
     */
    export function getIconsByCategory(category: string): IconName[] {
        return (iconsByCategory[category as keyof typeof iconsByCategory] || []) as unknown as IconName[];
    }

    /**
     * Get all available categories
     */
    export function getIconCategories(): string[] {
        return Object.keys(iconsByCategory);
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
