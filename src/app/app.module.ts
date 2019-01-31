import { DatePipe, registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/de-at';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './core/component/main/main.component';
import { CoreModule } from './core/core.module';

registerLocaleData(localeDeAt);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-at' },
    DatePipe
  ],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule {
}
