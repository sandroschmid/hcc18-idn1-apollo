import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './component/panel/panel.component';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelQuestionComponent } from './component/panel-question/panel-question.component';
import { PanelQuestionItemComponent } from './component/panel-question-item/panel-question-item.component';
import { PanelResponseItemComponent } from './component/panel-response-item/panel-response-item.component';

@NgModule({
  imports: [
    SharedModule,
    PanelRoutingModule,
  ],
  declarations: [
    PanelComponent,
    PanelQuestionComponent,
    PanelQuestionItemComponent,
    PanelResponseItemComponent,
  ],
})
export class PanelModule {
}
