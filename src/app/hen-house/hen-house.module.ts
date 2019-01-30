import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HenHouseComponent } from './component/hen-house/hen-house.component';

import { HenHouseRoutingModule } from './hen-house-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HenHouseRoutingModule,
  ],
  declarations: [
    HenHouseComponent,
  ],
})
export class HenHouseModule {
}
