import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NAV_BAR_FAMILY, NAV_BAR_HEN_HOUSE, NAV_BAR_HOME, NAV_BAR_PANEL, NAV_BAR_STATS } from '../../model/constants';
import { NavBarItem } from '../../model/nav-bar-item';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {

  public readonly view: { items: NavBarItem[] } = {
    items: [
      NAV_BAR_PANEL,
      NAV_BAR_STATS,
      NAV_BAR_HOME,
      NAV_BAR_HEN_HOUSE,
      NAV_BAR_FAMILY,
    ],
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _router: Router,
                     private readonly _state: StateService) {
  }

  public ngOnInit(): void {
    this._router.events
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.onNavigated(event.urlAfterRedirects);
        }
      });
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public onNavigated(url: string): void {
    let found = false;
    for (const item of this.view.items) {
      if (url.startsWith(item.path)) {
        this._state.setNavItem(item);
        found = true;
      }
    }

    if (!found) {
      this._state.setNavItem(undefined);
    }
  }

}
