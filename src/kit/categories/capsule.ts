export const capsuleIcons = {
  'capsule': {
    category: 'capsule',
    viewBox: '0 0 448 512',
    svg: `<path opacity=".4" fill="currentColor" d="M128 160l192 192 88.2-88.2c25.5-25.5 39.8-60 39.8-96 0-75-60.8-135.8-135.8-135.8-36 0-70.5 14.3-96 39.8L128 160z"/><path fill="currentColor" d="M320 352l-88.2 88.2c-25.5 25.5-60 39.8-96 39.8-75 0-135.8-60.8-135.8-135.8 0-36 14.3-70.5 39.8-96L128 160 320 352z"/>`,
  },
  'capsules': {
    category: 'capsule',
    viewBox: '0 0 576 512',
    svg: `<path opacity=".4" fill="currentColor" d="M32 112l0 144 224 0 0 38.2 53.1 77.5c61.6-43.1 123.1-86.2 184.7-129.4-22.2-32.4-44.4-64.7-66.6-97.1-35.5-51.7-105.3-64.3-156-28.1-5.6 4-10.7 8.4-15.3 13.1l0-18.3C256 50.1 205.9 0 144 0S32 50.1 32 112z"/><path fill="currentColor" d="M372.3 463.7l-63.1-92 184.7-129.4 61.9 90.2c35.5 51.7 23.2 123-27.5 159.2s-120.5 23.6-156-28.1zM256 256l0 144c0 61.9-50.1 112-112 112S32 461.9 32 400l0-144 224 0z"/>`,
  },
} as const;

export type CapsuleIconName = keyof typeof capsuleIcons;
