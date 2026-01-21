import { arrowsIcons } from './arrows';
import { barsIcons } from './bars';
import { bellIcons } from './bell';
import { chevronIcons } from './chevron';
import { lettersIcons } from './letters';
import { shieldIcons } from './shield';
import { uiIcons } from './ui';

export const iconCatalog = {
  ...arrowsIcons,
  ...barsIcons,
  ...bellIcons,
  ...chevronIcons,
  ...lettersIcons,
  ...shieldIcons,
  ...uiIcons,
} as const;

export type IconName = keyof typeof iconCatalog;

export const iconsByCategory = {
  'arrows': ['arrow-down', 'arrow-left'],
  'bars': ['bars-filter', 'bars-sort', 'bars-staggered', 'bars'],
  'bell': ['bell-on', 'bell-ring', 'bell-slash', 'bell'],
  'chevron': ['chevron-down', 'chevron-left'],
  'letters': ['a', 'ain'],
  'shield': ['shield-check', 'shield-exclamation', 'shield-halved', 'shield-minus', 'shield-slash', 'shield'],
  'ui': ['asterisk', 'check-double', 'check', 'door', 'flag', 'gear', 'house', 'key-skeleton', 'key', 'language', 'lock-keyhole', 'lock', 'minus', 'moon', 'plus-minus', 'plus', 'search', 'sun', 'unlock-keyhole', 'unlock', 'user', 'x'],
} as const;
