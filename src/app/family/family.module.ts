import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FamilyComponent } from './component/family/family.component';

import { FamilyRoutingModule } from './family-routing.module';
import { ChickenComponent } from './component/chicken/chicken.component';
import { ChickenItemComponent } from './component/chicken-item/chicken-item.component';

@NgModule({
  imports: [
    SharedModule,
    FamilyRoutingModule,
  ],
  declarations: [
    FamilyComponent,
    ChickenComponent,
    ChickenItemComponent
  ],
})
export class FamilyModule {
}
