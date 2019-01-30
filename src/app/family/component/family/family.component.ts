import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NAV_BAR_FAMILY } from '../../../core/model/constants';
import { NavBarItem } from '../../../core/model/nav-bar-item';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent implements OnInit, OnDestroy {

  public readonly view: {
    navBarItem: NavBarItem
  } = {
    navBarItem: NAV_BAR_FAMILY,
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
