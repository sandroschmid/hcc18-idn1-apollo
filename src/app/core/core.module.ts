import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './component/main/main.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TitleBarComponent } from './component/title-bar/title-bar.component';
import { CoreRoutingModule } from './core-routing.module';
import { ChickenService } from './service/chicken.service';
import { FamilyService } from './service/family.service';
import { HenHouseService } from './service/hen-house.service';
import { PanelService } from './service/panel.service';
import { StateService } from './service/state.service';
import { StatsService } from './service/stats.service';
import { UtilityService } from './service/utility.service';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
  ],
  declarations: [
    TitleBarComponent,
    NavBarComponent,
    MainComponent,
    NotFoundComponent,
  ],
  providers: [
    StateService,
    PanelService,
    StatsService,
    ChickenService,
    HenHouseService,
    FamilyService,
    UtilityService,
  ],
  exports: [
    MainComponent,
  ],
})
export class CoreModule {
}
