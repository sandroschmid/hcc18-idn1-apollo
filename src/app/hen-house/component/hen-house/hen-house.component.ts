import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NAV_BAR_HEN_HOUSE } from '../../../core/model/constants';
import { NavBarItem } from '../../../core/model/nav-bar-item';

@Component({
  selector: 'app-hen-house',
  templateUrl: './hen-house.component.html',
  styleUrls: ['./hen-house.component.scss'],
})
export class HenHouseComponent implements OnInit, OnDestroy {

  public readonly view: {
    navBarItem: NavBarItem
  } = {
    navBarItem: NAV_BAR_HEN_HOUSE,
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
