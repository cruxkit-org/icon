import { alarmIcons } from './alarm';
import { alignIcons } from './align';
import { angleIcons } from './angle';
import { arrowIcons } from './arrow';
import { backwardIcons } from './backward';
import { badgeIcons } from './badge';
import { bagIcons } from './bag';
import { barsIcons } from './bars';
import { bar_progressIcons } from './bar_progress';
import { batteryIcons } from './battery';
import { bellIcons } from './bell';
import { binaryIcons } from './binary';
import { boltIcons } from './bolt';
import { bookIcons } from './book';
import { bookmarkIcons } from './bookmark';
import { boxIcons } from './box';
import { bracketIcons } from './bracket';
import { brandIcons } from './brand';
import { broomIcons } from './broom';
import { bugIcons } from './bug';
import { buildingsIcons } from './buildings';
import { bullseyeIcons } from './bullseye';
import { calendarIcons } from './calendar';
import { cameraIcons } from './camera';
import { candyIcons } from './candy';
import { capsuleIcons } from './capsule';
import { caretIcons } from './caret';
import { cartIcons } from './cart';
import { chartIcons } from './chart';
import { checkIcons } from './check';
import { chevronIcons } from './chevron';
import { clockIcons } from './clock';
import { cloudIcons } from './cloud';
import { codeIcons } from './code';
import { commentIcons } from './comment';
import { compassIcons } from './compass';
import { cookieIcons } from './cookie';
import { diagramIcons } from './diagram';
import { doorIcons } from './door';
import { fileIcons } from './file';
import { filterIcons } from './filter';
import { flagIcons } from './flag';
import { floppy_diskIcons } from './floppy_disk';
import { folderIcons } from './folder';
import { fontIcons } from './font';
import { gearIcons } from './gear';
import { globeIcons } from './globe';
import { gridIcons } from './grid';
import { handIcons } from './hand';
import { hashtagIcons } from './hashtag';
import { headphonesIcons } from './headphones';
import { heartIcons } from './heart';
import { hourglassIcons } from './hourglass';
import { inboxIcons } from './inbox';
import { keyIcons } from './key';
import { letterIcons } from './letter';
import { lightbulbIcons } from './lightbulb';
import { linkIcons } from './link';
import { listIcons } from './list';
import { locationIcons } from './location';
import { lockIcons } from './lock';
import { mapIcons } from './map';
import { mathIcons } from './math';
import { memoIcons } from './memo';
import { messageIcons } from './message';
import { microphoneIcons } from './microphone';
import { mobileIcons } from './mobile';
import { moneyIcons } from './money';
import { mugIcons } from './mug';
import { musicIcons } from './music';
import { numberIcons } from './number';
import { partyIcons } from './party';
import { penIcons } from './pen';
import { plugIcons } from './plug';
import { puzzleIcons } from './puzzle';
import { qrcodeIcons } from './qrcode';
import { quoteIcons } from './quote';
import { receiptIcons } from './receipt';
import { rightIcons } from './right';
import { rocketIcons } from './rocket';
import { rotateIcons } from './rotate';
import { rulerIcons } from './ruler';
import { shieldIcons } from './shield';
import { signIcons } from './sign';
import { signalIcons } from './signal';
import { signatureIcons } from './signature';
import { spaceIcons } from './space';
import { spinnerIcons } from './spinner';
import { starIcons } from './star';
import { thingsIcons } from './things';
import { transporterIcons } from './transporter';
import { trashIcons } from './trash';
import { uiIcons } from './ui';
import { userIcons } from './user';
import { uturnIcons } from './uturn';
import { virusIcons } from './virus';
import { volumeIcons } from './volume';
import { wandIcons } from './wand';
import { waveIcons } from './wave';
import { wifiIcons } from './wifi';

export const iconCatalog = {
  ...alarmIcons,
  ...alignIcons,
  ...angleIcons,
  ...arrowIcons,
  ...backwardIcons,
  ...badgeIcons,
  ...bagIcons,
  ...barsIcons,
  ...bar_progressIcons,
  ...batteryIcons,
  ...bellIcons,
  ...binaryIcons,
  ...boltIcons,
  ...bookIcons,
  ...bookmarkIcons,
  ...boxIcons,
  ...bracketIcons,
  ...brandIcons,
  ...broomIcons,
  ...bugIcons,
  ...buildingsIcons,
  ...bullseyeIcons,
  ...calendarIcons,
  ...cameraIcons,
  ...candyIcons,
  ...capsuleIcons,
  ...caretIcons,
  ...cartIcons,
  ...chartIcons,
  ...checkIcons,
  ...chevronIcons,
  ...clockIcons,
  ...cloudIcons,
  ...codeIcons,
  ...commentIcons,
  ...compassIcons,
  ...cookieIcons,
  ...diagramIcons,
  ...doorIcons,
  ...fileIcons,
  ...filterIcons,
  ...flagIcons,
  ...floppy_diskIcons,
  ...folderIcons,
  ...fontIcons,
  ...gearIcons,
  ...globeIcons,
  ...gridIcons,
  ...handIcons,
  ...hashtagIcons,
  ...headphonesIcons,
  ...heartIcons,
  ...hourglassIcons,
  ...inboxIcons,
  ...keyIcons,
  ...letterIcons,
  ...lightbulbIcons,
  ...linkIcons,
  ...listIcons,
  ...locationIcons,
  ...lockIcons,
  ...mapIcons,
  ...mathIcons,
  ...memoIcons,
  ...messageIcons,
  ...microphoneIcons,
  ...mobileIcons,
  ...moneyIcons,
  ...mugIcons,
  ...musicIcons,
  ...numberIcons,
  ...partyIcons,
  ...penIcons,
  ...plugIcons,
  ...puzzleIcons,
  ...qrcodeIcons,
  ...quoteIcons,
  ...receiptIcons,
  ...rightIcons,
  ...rocketIcons,
  ...rotateIcons,
  ...rulerIcons,
  ...shieldIcons,
  ...signIcons,
  ...signalIcons,
  ...signatureIcons,
  ...spaceIcons,
  ...spinnerIcons,
  ...starIcons,
  ...thingsIcons,
  ...transporterIcons,
  ...trashIcons,
  ...uiIcons,
  ...userIcons,
  ...uturnIcons,
  ...virusIcons,
  ...volumeIcons,
  ...wandIcons,
  ...waveIcons,
  ...wifiIcons,
} as const;

export type IconName = keyof typeof iconCatalog;

export const iconsByCategory = {
  'alarm': ['alarm-clock', 'alarm-exclamation', 'alarm-minus', 'alarm-plus', 'alarm-snooze'],
  'align': ['align-center', 'align-justify', 'align-left', 'align-right', 'align-slash', 'indent'],
  'angle': ['angle-down', 'angle-left', 'angles-down', 'angles-left', 'angles-up-down'],
  'arrow': ['arrow-down', 'arrow-left'],
  'backward': ['backward-fast', 'backward-step', 'backward'],
  'badge': ['badge-check', 'badge-dollar', 'badge-percent', 'badge'],
  'bag': ['bag-shopping-minus', 'bag-shopping-plus', 'bag-shopping'],
  'bars': ['bars-filter', 'bars-sort', 'bars-staggered', 'bars'],
  'bar_progress': ['bar-progress-empty', 'bar-progress-full', 'bar-progress-half', 'bar-progress-quarter', 'bar-progress-three-quarters', 'bar-progress'],
  'battery': ['battery-bolt', 'battery-empty', 'battery-exclamation', 'battery-full', 'battery-half', 'battery-low', 'battery-quarter', 'battery-slash', 'battery-three-quarters'],
  'bell': ['bell-on', 'bell-ring', 'bell-slash', 'bell'],
  'binary': ['binary-circle-check', 'binary-lock', 'binary-slash', 'binary'],
  'bolt': ['bolt-auto', 'bolt-lightning', 'bolt-slash', 'bolt'],
  'book': ['book-bookmark', 'book-open-cover', 'book-open-lines', 'book-open', 'book', 'books'],
  'bookmark': ['bookmark-plus', 'bookmark-slash', 'bookmark'],
  'box': ['box-archive', 'box-arrow-down-arrow-up', 'box-arrow-down', 'box-ballot', 'box-dollar', 'box-isometric-tape', 'box-isometric', 'box-magnifying-glass', 'box-open-full', 'box-open', 'box'],
  'bracket': ['bracket-curly-right', 'bracket-curly', 'bracket-round-right', 'bracket-round', 'bracket-square-right', 'bracket-square', 'brackets-curly', 'brackets-round', 'brackets-square'],
  'brand': ['amazon', 'app-store', 'apple', 'bitcoin', 'facebook', 'github', 'google-play', 'google', 'instagram', 'pinterest', 'reddit', 'telegram', 'tiktok', 'twitch', 'twitter', 'whatsapp', 'x-twitter', 'youtube'],
  'broom': ['broom-ball', 'broom-wide', 'broom'],
  'bug': ['bug-slash', 'bug', 'bugs'],
  'buildings': ['building-circle-arrow-right', 'building-circle-check', 'building-circle-exclamation', 'building-circle-xmark', 'building-columns', 'building-lock', 'building-magnifying-glass', 'building-memo', 'building-shield', 'building-un', 'building-user', 'home-blank', 'home', 'kaaba', 'vihara'],
  'bullseye': ['bullseye-arrow', 'bullseye-pointer', 'bullseye'],
  'calendar': ['calendar-check', 'calendar-exclamation', 'calendar-heart', 'calendar-lines-pen', 'calendar-lines', 'calendar-minus', 'calendar-pen', 'calendar-plus', 'calendar-range', 'calendar-star', 'calendar-xmark', 'calendar', 'calendars'],
  'camera': ['camera-cctv', 'camera-circle-ellipsis', 'camera-clock', 'camera-movie', 'camera-rotate', 'camera-security', 'camera-slash', 'camera-viewfinder', 'camera-web-slash', 'camera-web', 'camera'],
  'candy': ['candy-cane', 'candy', 'lollipop'],
  'capsule': ['capsule', 'capsules'],
  'caret': ['caret-down', 'caret-left'],
  'cart': ['cart-arrow-down', 'cart-arrow-up', 'cart-minus', 'cart-plus', 'cart-shopping-fast', 'cart-shopping', 'cart-xmark'],
  'chart': ['chart-area', 'chart-bar', 'chart-bullet', 'chart-candlestick', 'chart-column', 'chart-diagram', 'chart-fft', 'chart-gantt', 'chart-kanban', 'chart-line-down', 'chart-line-up-down', 'chart-line-up', 'chart-line', 'chart-mixed-up-circle-dollar', 'chart-mixed', 'chart-network', 'chart-pie-simple-circle-dollar', 'chart-pie-simple', 'chart-pie', 'chart-pyramid', 'chart-radar', 'chart-scatter-3d', 'chart-scatter-bubble', 'chart-scatter', 'chart-simple-horizontal', 'chart-simple', 'chart-sine', 'chart-tree-map', 'chart-user', 'chart-waterfall'],
  'check': ['check-double', 'check'],
  'chevron': ['chevron-down', 'chevron-left'],
  'clock': ['clock-eight-thirty', 'clock-rotate-left', 'clock-six-thirty', 'clock'],
  'cloud': ['cloud-arrow-down', 'cloud-arrow-up', 'cloud-check', 'cloud-minus', 'cloud-plus', 'cloud'],
  'code': ['code-branch', 'code-commit', 'code-compare', 'code-fork', 'code-merge', 'code-pull-request-closed', 'code-pull-request-draft', 'code-pull-request', 'code-simple', 'code'],
  'comment': ['comment-slash', 'comment', 'comments'],
  'compass': ['compact-disc', 'compass-drafting', 'compass-slash', 'compass', 'compress'],
  'cookie': ['cookie-bite', 'cookie'],
  'diagram': ['diagram-cells', 'diagram-nested', 'diagram-project', 'diagram-sankey'],
  'door': ['door-closed', 'door-open', 'dungeon'],
  'file': ['file-arrow-down', 'file-arrow-up', 'file-binary', 'file-brackets-curly', 'file-chart-column', 'file-code', 'file-exclamation', 'file-image', 'file-lock', 'file-medical', 'file-minus', 'file'],
  'filter': ['filter-list', 'filter-slash', 'filter', 'filters'],
  'flag': ['flag-checkered', 'flag-pennant', 'flag-swallowtail', 'flag'],
  'floppy_disk': ['floppy-disk-circle-arrow-right', 'floppy-disk-circle-xmark', 'floppy-disk-pen', 'floppy-disk'],
  'folder': ['folder-arrow-down', 'folder-arrow-left', 'folder-arrow-right', 'folder-arrow-up', 'folder-bookmark', 'folder-check', 'folder-heart', 'folder-image', 'folder-medical', 'folder-minus', 'folder-open', 'folder-plus', 'folder-tree', 'folder-xmark', 'folder'],
  'font': ['font-case', 'font'],
  'gear': ['gear-complex', 'gear', 'gears'],
  'globe': ['globe-pointer', 'globe-stand', 'globe', 'language'],
  'grid': ['grid-2-minus', 'grid-2-plus', 'grid-2', 'grid-4', 'grid-5', 'grid-dividers', 'grid', 'grip-vertical', 'grip'],
  'hand': ['hand-back-point-down', 'hand-back-point-left', 'hand-shaka', 'hand-wave', 'hands-clapping', 'handshake-slash', 'handshake'],
  'hashtag': ['hashtag-lock', 'hashtag'],
  'headphones': ['headphones-slash', 'headphones', 'headset'],
  'heart': ['heart-crack', 'heart-half', 'heart-pulse', 'heart-slash', 'heart', 'hearts'],
  'hourglass': ['hourglass-clock', 'hourglass-end', 'hourglass-half', 'hourglass-start', 'hourglass'],
  'inbox': ['inbox-full', 'inbox-in', 'inbox-out', 'inbox', 'inboxes'],
  'key': ['key-skeleton', 'key'],
  'letter': ['a', 'ain'],
  'lightbulb': ['light-emergency-on', 'lightbulb-cfl-on', 'lightbulb-cfl', 'lightbulb-on', 'lightbulb-slash', 'lightbulb'],
  'link': ['link-slash', 'link'],
  'list': ['list-check', 'list-dropdown', 'list-ol', 'list-radio', 'list-timeline', 'list-tree', 'list-ul', 'list'],
  'location': ['location-arrow-slash', 'location-arrow-up', 'location-check', 'location-crosshairs-slash', 'location-crosshairs', 'location-dot-slash', 'location-dot', 'location-exclamation', 'location-minus', 'location-pen', 'location-pin-lock', 'location-pin-slash', 'location-pin', 'location-plus', 'location-question'],
  'lock': ['lock-keyhole', 'lock', 'unlock-keyhole', 'unlock'],
  'map': ['map-location-dot', 'map-location', 'map-pin', 'map'],
  'math': ['asterisk', 'minus', 'plus-minus', 'plus'],
  'memo': ['memo-circle-check', 'memo-circle-info', 'memo'],
  'message': ['message-slash', 'message-sms', 'message'],
  'microphone': ['microphone-circle-plus', 'microphone-circle-xmark', 'microphone-lines-slash', 'microphone-lines', 'microphone-slash', 'microphone-stand', 'microphone'],
  'mobile': ['mobile-arrow-down', 'mobile-rotate', 'mobile-slash', 'mobile-vibrate-slash', 'mobile-vibrate', 'mobile'],
  'money': ['money-bill-1-wave', 'money-bill-1', 'money-bill-trend-up', 'money-bill', 'money-check-dollar-pen', 'money-check-dollar', 'money-check-pen'],
  'mug': ['mug-hot', 'mug'],
  'music': ['music-note-slash', 'music-note', 'music-slash', 'music'],
  'number': ['eight', 'five', 'four', 'nine', 'one', 'seven', 'six', 'three', 'two', 'zero'],
  'party': ['party-bell', 'party-horn'],
  'pen': ['pen-fancy', 'pen-field', 'pen-nib-slash', 'pen-nib', 'pen-paintbrush', 'pen-ruler', 'pen-slash', 'pen-swirl', 'pen-to-square', 'pen', 'pencil-line', 'pencil'],
  'plug': ['plug-circle-bolt', 'plug-circle-check', 'plug-circle-exclamation', 'plug-circle-minus', 'plug-circle-plus', 'plug-circle-xmark', 'plug'],
  'puzzle': ['puzzle-piece-simple', 'puzzle-piece', 'puzzle'],
  'qrcode': ['qrcode-read', 'qrcode'],
  'quote': ['quote-left', 'quote-right', 'quotes', 'single-quote-left', 'single-quote-right'],
  'receipt': ['receipt'],
  'right': ['right-from-bracket', 'right-from-line', 'right-left-large', 'right-left', 'right-long-to-line', 'right-long', 'right-to-bracket', 'right'],
  'rocket': ['rocket-launch', 'rocket-vertical', 'rocket'],
  'rotate': ['rotate-exclamation', 'rotate-left', 'rotate-reverse', 'rotate'],
  'ruler': ['ruler-combined', 'ruler-horizontal', 'ruler-triangle', 'ruler-vertical', 'ruler'],
  'shield': ['shield-check', 'shield-exclamation', 'shield-halved', 'shield-minus', 'shield-slash', 'shield'],
  'sign': ['sign-post', 'signs-post'],
  'signal': ['signal-bars-fair', 'signal-bars-good', 'signal-bars-slash', 'signal-bars-weak', 'signal-bars', 'signal-fair', 'signal-good', 'signal-slash', 'signal-stream-slash', 'signal-stream', 'signal-strong', 'signal-weak', 'signal'],
  'signature': ['signature-lock', 'signature-slash', 'signature'],
  'space': ['moon', 'sun'],
  'spinner': ['spinner-scale', 'spinner-third', 'spinner'],
  'star': ['star-christmas', 'star-half-stroke', 'star-half', 'star-of-life', 'star-shooting', 'stars'],
  'things': ['alien-8bit', 'alien', 'butterfly', 'ghost', 'gingerbread-man', 'hippo', 'horse', 'mask', 'masks-theater', 'narwhal', 'paw', 'rabbit-running', 'rabbit', 'raccoon', 'skull', 'unicorn'],
  'transporter': ['transporter-1', 'transporter-2', 'transporter-3', 'transporter-4', 'transporter-5', 'transporter-6', 'transporter-empty', 'transporter'],
  'trash': ['trash-can-clock', 'trash-can-slash', 'trash-can', 'trash-slash', 'trash'],
  'ui': ['at', 'bluetooth', 'brain-circuit', 'brain', 'browser', 'brush', 'bullhorn', 'buoy-mooring', 'buoy', 'burger', 'burst', 'cake-candles', 'credit-card', 'crop-simple', 'crop', 'cube', 'cubes', 'cup-straw', 'cupcake', 'desktop-arrow-down', 'desktop', 'fingerprint', 'fire-flame-curved', 'fire', 'football', 'futbol', 'galaxy', 'game-board', 'gavel', 'gif', 'gift-card', 'gift', 'glasses', 'highlighter-line', 'highlighter', 'infinity', 'life-ring', 'midi', 'minimize', 'mustache', 'pause', 'play-pause', 'play', 'podcast', 'pump-impeller', 'radiation', 'ribbon', 'route-highway', 'route-interstate', 'router', 'rss', 'search', 'shuffle', 'sitemap', 'slider', 'sliders', 'smoking', 'snake', 'snowflake', 'snowman', 'sparkles', 'splotch', 'stocking', 'tv', 'volleyball', 'wind', 'window', 'wireless', 'wrench-simple', 'wrench', 'x', 'yin-yang'],
  'user': ['user-alien', 'user-astronaut', 'user-beard', 'user-check', 'user-circle-minus', 'user-circle-plus', 'user-gear', 'user-group-crown', 'user-group-simple', 'user-group', 'user-key', 'user-lock', 'user-microphone', 'user-minus', 'user-pen', 'user-plus', 'user-question', 'user-shield', 'user-slash', 'user-solid', 'user-tag', 'user-tie', 'user-unlock', 'user-viewfinder', 'user-xmark', 'user', 'users-gear', 'users-slash', 'users'],
  'uturn': ['u-turn-down-left', 'u-turn-left-down'],
  'virus': ['virus-covid-slash', 'virus-covid', 'virus-slash', 'virus', 'viruses'],
  'volume': ['volume-high', 'volume-low', 'volume-off', 'volume'],
  'wand': ['wand-magic-sparkles', 'wand-magic', 'wand-sparkles', 'wand'],
  'wave': ['wave-pulse', 'wave-sine', 'wave-square', 'wave-triangle', 'waveform-lines', 'waveform', 'waves-sine'],
  'wifi': ['wifi-exclamation', 'wifi-fair', 'wifi-slash', 'wifi-weak', 'wifi'],
} as const;
