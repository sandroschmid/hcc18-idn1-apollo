import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FamilyComponent } from './component/family/family.component';

import { FamilyRoutingModule } from './family-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FamilyRoutingModule,
  ],
  declarations: [
    FamilyComponent,
  ],
})
export class FamilyModule {
}
