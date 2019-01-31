import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './component/main/main.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TitleBarComponent } from './component/title-bar/title-bar.component';
import { SVG_ICONS } from './model/constants';
import { ChickenService } from './service/chicken.service';
import { FamilyService } from './service/family.service';
import { HenHouseService } from './service/hen-house.service';
import { PanelService } from './service/panel.service';
import { StateService } from './service/state.service';
import { StatsService } from './service/stats.service';
import { UtilityService } from './service/utility.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    TitleBarComponent,
    NavBarComponent,
    MainComponent,
    NotFoundComponent,
  ],
  providers: [
    StateService,
    PanelService,
    StatsService,
    ChickenService,
    HenHouseService,
    FamilyService,
    UtilityService,
  ],
  exports: [
    MainComponent,
  ],
})
export class CoreModule {

  public static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule };
  }

  public constructor(@Optional() @SkipSelf() parentModule: CoreModule,
                     iconRegistry: MatIconRegistry,
                     sanitizer: DomSanitizer) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }

    SVG_ICONS
      .map(icon => ({ name: icon, url: sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`) }))
      .forEach(icon => iconRegistry.addSvgIcon(icon.name, icon.url));
  }
}
