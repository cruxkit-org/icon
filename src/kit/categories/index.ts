import { chevronIcons } from './chevron';
import { uiIcons } from './ui';

export const iconCatalog = {
  ...chevronIcons,
  ...uiIcons,
} as const;

export type IconName = keyof typeof iconCatalog;

export const iconsByCategory = {
  'chevron': ['chevron-down'],
  'ui': ['flag', 'language', 'moon', 'sun', 'user'],
} as const;
