export const uturnIcons = {
  'u-turn-down-left': {
    category: 'uturn',
    viewBox: '0 0 512 512',
    svg: `<path opacity=".4" fill="currentColor" d="M64 64l0 64c0 17.7 14.3 32 32 32l208 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-128 0 0 128 128 0c114.9 0 208-93.1 208-208S418.9 32 304 32L96 32C78.3 32 64 46.3 64 64z"/><path fill="currentColor" d="M176 496c0 12.9-7.8 24.6-19.7 29.6s-25.7 2.2-34.9-6.9l-112-112-2.2-2.4c-10.2-12.6-9.5-31.1 2.2-42.8l112-112c9.2-9.2 22.9-11.9 34.9-6.9S176 259.1 176 272l0 224z"/>`,
  },
  'u-turn-left-down': {
    category: 'uturn',
    viewBox: '0 0 576 512',
    svg: `<path opacity=".4" fill="currentColor" d="M96 208l0 128 128 0 0-128c0-44.2 35.8-80 80-80s80 35.8 80 80l0 208c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-208C512 93.1 418.9 0 304 0S96 93.1 96 208z"/><path fill="currentColor" d="M48 336c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l112 112 2.4 2.2c12.6 10.2 31.1 9.5 42.8-2.2l112-112c9.2-9.2 11.9-22.9 6.9-34.9S284.9 336 272 336L48 336z"/>`,
  },
} as const;

export type UturnIconName = keyof typeof uturnIcons;
