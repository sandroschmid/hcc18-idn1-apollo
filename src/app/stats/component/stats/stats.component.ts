import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NAV_BAR_STATS } from '../../../core/model/constants';
import { NavBarItem } from '../../../core/model/nav-bar-item';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit, OnDestroy {

  public readonly view: {
    navBarItem: NavBarItem
  } = {
    navBarItem: NAV_BAR_STATS,
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
