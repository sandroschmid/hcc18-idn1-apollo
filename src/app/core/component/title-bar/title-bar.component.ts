import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Icon } from '../../model/icon';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit, OnDestroy {

  public readonly view: {
    title: string,
    icon: Icon
  } = {
    title: undefined,
    icon: undefined
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private _state: StateService) {
  }

  public ngOnInit(): void {
    this._state.title
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(title => this.view.title = title);

    this._state.icon
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(icon => this.view.icon = icon);
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

}
