import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';

const modules = [
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
