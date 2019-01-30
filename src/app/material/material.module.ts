import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatTabsModule, MatToolbarModule } from '@angular/material';

const modules = [
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
