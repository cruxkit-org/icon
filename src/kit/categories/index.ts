import { arrowsIcons } from './arrows';
import { barsIcons } from './bars';
import { chevronIcons } from './chevron';
import { lettersIcons } from './letters';
import { shieldIcons } from './shield';
import { uiIcons } from './ui';

export const iconCatalog = {
  ...arrowsIcons,
  ...barsIcons,
  ...chevronIcons,
  ...lettersIcons,
  ...shieldIcons,
  ...uiIcons,
} as const;

export type IconName = keyof typeof iconCatalog;

export const iconsByCategory = {
  'arrows': ['arrow-down', 'arrow-left'],
  'bars': ['bars-filter', 'bars-sort', 'bars-staggered', 'bars'],
  'chevron': ['chevron-down', 'chevron-left'],
  'letters': ['a', 'ain'],
  'shield': ['shield-check', 'shield-exclamation', 'shield-halved', 'shield-minus', 'shield-slash', 'shield'],
  'ui': ['asterisk', 'door', 'flag', 'gear', 'house', 'key-skeleton', 'key', 'language', 'lock-keyhole', 'lock', 'moon', 'search', 'sun', 'unlock-keyhole', 'unlock', 'user'],
} as const;
