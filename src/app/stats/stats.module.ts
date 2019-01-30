import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StatsComponent } from './component/stats/stats.component';

import { StatsRoutingModule } from './stats-routing.module';

@NgModule({
  imports: [
    SharedModule,
    StatsRoutingModule,
  ],
  declarations: [
    StatsComponent,
  ],
})
export class StatsModule {
}
