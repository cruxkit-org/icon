export const caretIcons = {
  'caret-down': {
    category: 'caret',
    viewBox: '0 0 320 512',
    svg: `<path opacity=".4" fill="currentColor" d="M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"/><path fill="currentColor" d=""/>`,
  },
  'caret-left': {
    category: 'caret',
    viewBox: '0 0 256 512',
    svg: `<path opacity=".4" fill="currentColor" d="M7.7 235.8c-10.3 12.6-9.5 31.1 2.2 42.8l128 128c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128-2.2 2.4z"/><path fill="currentColor" d=""/>`,
  },
} as const;

export type CaretIconName = keyof typeof caretIcons;
