import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './component/panel/panel.component';

import { PanelRoutingModule } from './panel-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PanelRoutingModule,
  ],
  declarations: [
    PanelComponent,
  ],
})
export class PanelModule {
}
