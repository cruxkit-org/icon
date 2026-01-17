<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.3-black"/>
    <a href="https://github.com/cruxkit-org"><img src="https://img.shields.io/badge/🔥-@cruxkit-black"/></a>
    <br>
    <img src="https://img.shields.io/badge/coverage-99%25-brightgreen" alt="Test Coverage" />
    <img src="https://img.shields.io/github/issues/cruxkit-org/icon?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/cruxkit-org/icon?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀
    - #### Why ?
        > A lightweight, type-safe icon library offering full TypeScript support and effortless customization.

    - #### When ?
        > Whenever you need crisp, scalable SVG icons inside CruxJS (or any JSX) projects without pulling in thousands of unused glyphs or heavy CSS frameworks.

    <br>
    <br>

- ## Quick Start 🔥

    > install [`hmm`](https://github.com/minejs-org/hmm) first.

    ```bash
    # in your terminal
    hmm i @cruxkit/icon
    ```

    ```ts
    // in your ts files
    import { Icon } from `@cruxkit/icon`;
    ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
    <br>


    - ### Basic usage

        ```typescript
        const ChevronDown = Icon('chevron-down');
        ```

    - ### With options

        ```typescript
        const LargePrimaryChevron = Icon({
            name    : 'chevron-down',
            size    : 'xl',
            color   : '#111827',
        });
        ```

    - ### Custom SVG

        ```typescript
        const CustomCircle = Icon({
            svg     : `<circle cx="12" cy="12" r="10" />`,
            viewBox : '0 0 24 24',
            size    : 24,
            color   : '#16a34a',
        });
        ```

    <br>
    <br>

- ## Documentation 📑


    - ### API ⛓️

        - #### Functions

            ```typescript
            /**
            * Icon Component
            * Renders inline SVG icons with various options
            *
            * @example
            * Icon('check')
            * Icon({ name: 'spinner', spin: true, size: 'lg' })
            */
            export function Icon(props: IconProps) : JSXElement | null
            ```

        - #### Types

            ```typescript
            export type IconSize        = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number;

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
            ```

        - #### Constants

            ```typescript
            export const sizeMap: Record<string, string> = {
                xs                      : '0.75rem',
                sm                      : '1rem',
                md                      : '1.25rem',
                lg                      : '1.5rem',
                xl                      : '2rem',
                xxl                     : '2.5rem'
            };
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Related 🔗

        - ##### [@minejs/jsx](https://github.com/minejs-org/jsx)

        - ##### [@mineui/utils](https://github.com/mineui-org/utils)

        - ##### [@cruxkit/..](https://github.com/cruxkit-org)


<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->
