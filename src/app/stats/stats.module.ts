import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StatsComponent } from './component/stats/stats.component';

import { StatsRoutingModule } from './stats-routing.module';
import { EggsCounterComponent } from './component/eggs-counter/eggs-counter.component';

@NgModule({
  imports: [
    SharedModule,
    StatsRoutingModule,
  ],
  declarations: [
    StatsComponent,
    EggsCounterComponent,
  ],
})
export class StatsModule {
}
