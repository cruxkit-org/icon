export const backwardIcons = {
  'backward-fast': {
    category: 'backward',
    viewBox: '0 0 512 512',
    svg: `<path opacity=".4" fill="currentColor" d="M64 210.7l0 90.5 169.4 169.4c9.2 9.2 22.9 11.9 34.9 6.9S288 460.9 288 448l0-146.7 169.4 169.4c9.2 9.2 22.9 11.9 34.9 6.9S512 460.9 512 448l0-384c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L288 210.7 288 64c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L64 210.7z"/><path fill="currentColor" d="M32 480c-17.7 0-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32S64 46.3 64 64l0 384c0 17.7-14.3 32-32 32z"/>`,
  },
  'backward-step': {
    category: 'backward',
    viewBox: '0 0 384 512',
    svg: `<path opacity=".4" fill="currentColor" d="M64 208.1l0 95.7 258 169.6c12.3 8.1 28 8.8 41 1.8s21-20.5 21-35.2l0-368c0-14.7-8.1-28.2-21-35.2s-28.7-6.3-41 1.8L64 208.1z"/><path fill="currentColor" d="M32 32l0 0C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32l0 0c17.7 0 32-14.3 32-32L64 64c0-17.7-14.3-32-32-32z"/>`,
  },
  'backward': {
    category: 'backward',
    viewBox: '0 0 576 512',
    svg: `<path opacity=".4" fill="currentColor" d="M272 208.3l0 95.5 172.3 165.1c11.6 11.1 28.6 14.2 43.4 7.9S512 456 512 440l0-368c0-16-9.6-30.5-24.3-36.8s-31.8-3.2-43.4 7.9L272 208.3z"/><path fill="currentColor" d="M204.3 43.1C215.9 32 233 28.9 247.7 35.2S272 56 272 72l0 368c0 16-9.6 30.5-24.3 36.8s-31.8 3.2-43.4-7.9l-192-184C4.5 277.3 0 266.9 0 256s4.5-21.3 12.3-28.9l192-184z"/>`,
  },
} as const;

export type BackwardIconName = keyof typeof backwardIcons;
