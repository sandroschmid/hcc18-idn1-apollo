import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelQuestionComponent } from './component/panel-question/panel-question.component';
import { PanelComponent } from './component/panel/panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
  },
  {
    path: ':id',
    component: PanelQuestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {
}
