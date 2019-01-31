import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChickenComponent } from './component/chicken/chicken.component';
import { FamilyComponent } from './component/family/family.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyComponent,
  },
  {
    path: 'chicken/:id',
    component: ChickenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyRoutingModule {
}
