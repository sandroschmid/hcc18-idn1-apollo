import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HenHouseComponent } from './component/hen-house/hen-house.component';

const routes: Routes = [
  {
    path: '',
    component: HenHouseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HenHouseRoutingModule {
}
