// src/types.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { iconCatalog, type IconName as CatalogIconName } from './kit/categories';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export type IconSize        = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number;

    export type IconData        = Record<string, unknown>;
    export { iconCatalog };
    export type IconName        = CatalogIconName;

    interface IconConfigBase {
        size?                   : IconSize
        color?                  : string
        spin?                   : boolean
        pulse?                  : boolean
        rotate?                 : 0 | 90 | 180 | 270
        flip?                   : 'horizontal' | 'vertical' | 'both'
        [key: string]           : unknown
    }

    export interface NamedIconConfig extends IconConfigBase {
        name                    : IconName
        svg?                    : never
        viewBox?                : never
    }

    export interface CustomIconConfig extends IconConfigBase {
        name?                   : string
        svg                     : string
        viewBox?                : string
    }

    export type IconConfig      = NamedIconConfig | CustomIconConfig;

    export type IconProps       = IconConfig | IconName;

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
