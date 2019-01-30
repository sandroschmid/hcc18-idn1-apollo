import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { APP_NAME } from '../model/constants';

@Injectable()
export class StateService {
  private readonly _title = new Subject<string>();

  public setTitle(title: string | undefined): void {
    this._title.next(title || APP_NAME);
  }

  public get title(): Subject<string> {
    return this._title;
  }
}
