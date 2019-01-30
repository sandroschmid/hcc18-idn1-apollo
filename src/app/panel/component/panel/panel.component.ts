import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NAV_BAR_PANEL } from '../../../core/model/constants';
import { NavBarItem } from '../../../core/model/nav-bar-item';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit, OnDestroy {

  public readonly view: {
    navBarItem: NavBarItem
  } = {
    navBarItem: NAV_BAR_PANEL,
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

}
