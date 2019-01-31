import { NgModule } from '@angular/core';
import {
  DateAdapter, MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';

const modules = [
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatSnackBarModule,
  MatDialogModule,
  MatListModule,
  MatExpansionModule
];

const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  imports: modules,
  exports: modules,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'de-AT' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class MaterialModule {
}
