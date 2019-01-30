import { NavBarItemBuilder } from './nav-bar-item';

export const APP_NAME = 'APollo';

export const NAV_BAR_PANEL = new NavBarItemBuilder().path('/panel').label('Forum').icon('question_answer').build();
export const NAV_BAR_STATS = new NavBarItemBuilder().path('/stats').label('Statistik').icon('show_chart').build();
export const NAV_BAR_HOME = new NavBarItemBuilder().path('/home')
  .label('Start')
  .title(APP_NAME)
  .icon('fastfood')
  .build();
export const NAV_BAR_HEN_HOUSE = new NavBarItemBuilder().path('/hen-house').label('Stall').icon('home').build();
export const NAV_BAR_FAMILY = new NavBarItemBuilder().path('/family').label('Familie').icon('pets').build();

export const AVATAR = 'https://api.adorable.io/avatars/100/apollo.png';
