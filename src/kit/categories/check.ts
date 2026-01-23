export const checkIcons = {
  'check-double': {
    category: 'check',
    viewBox: '0 0 384 512',
    svg: `<path opacity=".4" fill="currentColor" d="M9.4 137.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l128-176c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-106 145.7-37.5-37.5c-12.5-12.5-32.8-12.5-45.3 0z"/><path fill="currentColor" d="M370.8 158.1c14.3 10.4 17.5 30.4 7.1 44.7l-192 264c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l69.5 69.5 170-233.7c10.4-14.3 30.4-17.5 44.7-7.1z"/>`,
  },
  'check': {
    category: 'check',
    viewBox: '0 0 448 512',
    svg: `<path opacity=".4" fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/><path fill="currentColor" d=""/>`,
  },
} as const;

export type CheckIconName = keyof typeof checkIcons;
