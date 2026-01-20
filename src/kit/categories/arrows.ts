export const arrowsIcons = {
  'arrow-down': {
    category: 'arrows',
    viewBox: '0 0 384 512',
    svg: `<path opacity=".4" fill="currentColor" d="M160 32l0 370.7 32 32 32-32 0-370.7c0-17.7-14.3-32-32-32s-32 14.3-32 32z"/><path fill="currentColor" d="M214.6 502.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 434.7 329.4 297.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160z"/>`,
  },
  'arrow-left': {
    category: 'arrows',
    viewBox: '0 0 512 512',
    svg: `<path opacity=".4" fill="currentColor" d="M77.3 256l32 32 370.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0-32 32z"/><path fill="currentColor" d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L77.3 256 214.6 393.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160z"/>`,
  },
} as const;

export type ArrowsIconName = keyof typeof arrowsIcons;
