export const bar_progressIcons = {
  'bar-progress-empty': {
    category: 'bar_progress',
    viewBox: '0 0 512 512',
    svg: `<path opacity=".4" fill="currentColor" d="M448 160l0 192-384 0 0-192 384 0zM64 96C28.7 96 0 124.7 0 160L0 352c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 96z"/><path fill="currentColor" d=""/>`,
  },
  'bar-progress-full': {
    category: 'bar_progress',
    viewBox: '0 0 512 512',
    svg: `<path opacity=".4" fill="currentColor" d="M0 160L0 352c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 96C28.7 96 0 124.7 0 160zm64 0l384 0 0 192-384 0 0-192z"/><path fill="currentColor" d="M64 160l384 0 0 192-384 0z"/>`,
  },
  'bar-progress-half': {
    category: 'bar_progress',
    viewBox: '0 0 512 512',
    svg: `<path opacity=".4" fill="currentColor" d="M0 160L0 352c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 96C28.7 96 0 124.7 0 160zm64 0l384 0 0 192-384 0 0-192z"/><path fill="currentColor" d="M64 160l192 0 0 192-192 0z"/>`,
  },
  'bar-progress-quarter': {
    category: 'bar_progress',
    viewBox: '0 0 512 512',
    svg: `<path opacity=".4" fill="currentColor" d="M0 160L0 352c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 96C28.7 96 0 124.7 0 160zm64 0l384 0 0 192-384 0 0-192z"/><path fill="currentColor" d="M64 160l96 0 0 192-96 0z"/>`,
  },
  'bar-progress-three-quarters': {
    category: 'bar_progress',
    viewBox: '0 0 512 512',
    svg: `<path opacity=".4" fill="currentColor" d="M0 160L0 352c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 96C28.7 96 0 124.7 0 160zm64 0l384 0 0 192-384 0 0-192z"/><path fill="currentColor" d="M64 160l288 0 0 192-288 0z"/>`,
  },
  'bar-progress': {
    category: 'bar_progress',
    viewBox: '0 0 512 512',
    svg: `<path opacity=".4" fill="currentColor" d="M0 160L0 352c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 96C28.7 96 0 124.7 0 160zm64 0l384 0 0 192-384 0 0-192z"/><path fill="currentColor" d="M64 160l256 0 0 192-256 0z"/>`,
  },
} as const;

export type BarProgressIconName = keyof typeof bar_progressIcons;
