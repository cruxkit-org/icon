export const chevronIcons = {
  'chevron-down': {
    category: 'chevron',
    viewBox: '0 0 448 512',
    svg: `<path opacity=".4" fill="currentColor" d="M246.6 406.6c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 338.7 393.4 169.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192z"/><path fill="currentColor" d=""/>`,
  },
  'chevron-left': {
    category: 'chevron',
    viewBox: '0 0 320 512',
    svg: `<path opacity=".4" fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/><path fill="currentColor" d=""/>`,
  },
} as const;

export type ChevronIconName = keyof typeof chevronIcons;
