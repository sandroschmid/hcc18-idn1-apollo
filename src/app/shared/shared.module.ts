import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '../material/material.module';
import { ChartComponent } from './component/chart/chart.component';
import { IconComponent } from './component/icon/icon.component';
import { ImageUploadModalComponent } from './component/image-upload-modal/image-upload-modal.component';
import { ChartDirective } from './directive/chart.directive';
import { SimpleDatePipe } from './pipe/simple-date.pipe';
import { EggSizeDistributionComponent } from './component/egg-size-distribution/egg-size-distribution.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule
  ],
  declarations: [
    IconComponent,
    ImageUploadModalComponent,
    ChartComponent,
    ChartDirective,
    SimpleDatePipe,
    EggSizeDistributionComponent
  ],
  entryComponents: [
    ImageUploadModalComponent
  ],
  providers: [
    SimpleDatePipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
    IconComponent,
    ChartComponent,
    SimpleDatePipe,
    EggSizeDistributionComponent
  ]
})
export class SharedModule {
}
