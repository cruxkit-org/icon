import { JSXElement } from '@minejs/jsx';

declare const iconCatalog: {
    readonly 'chevron-down': {
        readonly category: "chevron";
        readonly viewBox: "0 0 24 24";
        readonly svg: "<path d=\"M6 9L12 15L18 9\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>";
    };
};
type IconName$1 = keyof typeof iconCatalog;

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number;
type IconData = Record<string, unknown>;

type IconName = IconName$1;
interface IconConfigBase {
    size?: IconSize;
    color?: string;
    spin?: boolean;
    pulse?: boolean;
    rotate?: 0 | 90 | 180 | 270;
    flip?: 'horizontal' | 'vertical' | 'both';
    [key: string]: unknown;
}
interface NamedIconConfig extends IconConfigBase {
    name: IconName;
    svg?: never;
    viewBox?: never;
}
interface CustomIconConfig extends IconConfigBase {
    name?: string;
    svg: string;
    viewBox?: string;
}
type IconConfig = NamedIconConfig | CustomIconConfig;
type IconProps = IconConfig | IconName;

declare const sizeMap: Record<string, string>;
/**
 * Icon Component
 * Renders inline SVG icons with various options
 *
 * @example
 * Icon('check')
 * Icon({ name: 'spinner', spin: true, size: 'lg' })
 */
declare function Icon(props: IconProps): JSXElement | null;
/**
 * Utility function to check if an icon exists
 */
declare function iconExists(name: string): name is IconName;
/**
 * Get all available icon names
 */
declare function getIconNames(): IconName[];
/**
 * Get icons by category
 */
declare function getIconsByCategory(category: string): IconName[];
/**
 * Get all available categories
 */
declare function getIconCategories(): string[];

export { type CustomIconConfig, Icon, type IconConfig, type IconData, type IconName, type IconProps, type IconSize, type NamedIconConfig, getIconCategories, getIconNames, getIconsByCategory, iconCatalog, iconExists, sizeMap };
