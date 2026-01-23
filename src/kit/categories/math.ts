export const mathIcons = {
  'asterisk': {
    category: 'math',
    viewBox: '0 0 448 512',
    svg: `<path opacity=".4" fill="currentColor" d="M224 0c17.7 0 32 14.3 32 32l0 168.6 144-83.1c15.3-8.8 34.9-3.6 43.7 11.7s3.6 34.9-11.7 43.7L288 256 432 339.1c15.3 8.8 20.6 28.4 11.7 43.7s-28.4 20.6-43.7 11.7L256 311.4 256 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-168.6-144 83.1c-15.3 8.8-34.9 3.6-43.7-11.7S.7 348 16 339.1L160 256 16 172.9C.7 164-4.5 144.5 4.3 129.1S32.7 108.6 48 117.4L192 200.6 192 32c0-17.7 14.3-32 32-32z"/><path fill="currentColor" d=""/>`,
  },
  'minus': {
    category: 'math',
    viewBox: '0 0 448 512',
    svg: `<path opacity=".4" fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/><path fill="currentColor" d=""/>`,
  },
  'plus-minus': {
    category: 'math',
    viewBox: '0 0 384 512',
    svg: `<path opacity=".4" fill="currentColor" d="M0 480c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32z"/><path fill="currentColor" d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-128 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0 0-128z"/>`,
  },
  'plus': {
    category: 'math',
    viewBox: '0 0 448 512',
    svg: `<path opacity=".4" fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"/><path fill="currentColor" d=""/>`,
  },
} as const;

export type MathIconName = keyof typeof mathIcons;
