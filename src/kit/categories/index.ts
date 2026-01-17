import { chevronIcons } from './chevron';

export const iconCatalog = {
  ...chevronIcons,
} as const;

export type IconName = keyof typeof iconCatalog;

export const iconsByCategory = {
  'chevron': ['chevron-down'],
} as const;
