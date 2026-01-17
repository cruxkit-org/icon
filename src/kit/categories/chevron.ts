export const chevronIcons = {
  'chevron-down': {
    category: 'chevron',
    viewBox: '0 0 24 24',
    svg: `<path d="M6 9L12 15L18 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
} as const;

export type ChevronIconName = keyof typeof chevronIcons;
