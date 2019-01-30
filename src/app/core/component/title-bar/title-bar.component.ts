import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit, OnDestroy {

  public readonly view: { title: string } = { title: undefined };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private _state: StateService) {
  }

  public ngOnInit(): void {
    this._state.title
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(title => this.view.title = title);
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

}
