import { NavBarItemBuilder } from './nav-bar-item';

export const APP_NAME = 'APollo';

export const RANDOMIZE_DATA_DELAY = 3000;

export const SVG_ICONS: string[] = [
  'chicken',
  'egg',
  'hen-house',
  'thermostat',
  'sensor'
];

export const NAV_BAR_PANEL = new NavBarItemBuilder().path('/panel')
  .label('Forum')
  .icon({ name: 'question_answer' })
  .build();

export const NAV_BAR_STATS = new NavBarItemBuilder().path('/stats')
  .label('Statistik')
  .icon({ name: 'show_chart' })
  .build();

export const NAV_BAR_HOME = new NavBarItemBuilder().path('/home')
  .label('Start')
  .title(APP_NAME)
  .icon({ name: 'egg', isSvg: true })
  .build();

export const NAV_BAR_HEN_HOUSE = new NavBarItemBuilder().path('/hen-house')
  .label('Stall')
  .icon({ name: 'hen-house', isSvg: true })
  .build();

export const NAV_BAR_FAMILY = new NavBarItemBuilder().path('/family')
  .label('Familie')
  .icon({ name: 'chicken', isSvg: true })
  .build();

export const AVATAR = 'https://api.adorable.io/avatars/100/apollo.png';
