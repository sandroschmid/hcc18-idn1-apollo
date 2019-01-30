import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './component/main/main.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TitleBarComponent } from './component/title-bar/title-bar.component';
import { CoreRoutingModule } from './core-routing.module';
import { ChickenService } from './service/chicken.service';
import { HenHouseService } from './service/hen-house.service';
import { StateService } from './service/state.service';

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
    ChickenService,
    HenHouseService,
  ],
  exports: [
    MainComponent,
  ],
})
export class CoreModule {
}
