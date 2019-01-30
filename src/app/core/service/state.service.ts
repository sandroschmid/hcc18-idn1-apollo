import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chicken } from '../model/chicken';
import { APP_NAME } from '../model/constants';
import { HenHouse } from '../model/hen-house';

@Injectable()
export class StateService {

  private readonly _title = new BehaviorSubject<string>(APP_NAME);

  private readonly _chickens = new BehaviorSubject<Chicken[]>([
    {
      id: 1,
      name: 'Lilli',
      birthDate: new Date('2018-09-20T00:00:00Z'),
      eggsTotal: 12,
      eggsToday: 0,
    },
    {
      id: 2,
      name: 'Pippi',
      birthDate: new Date('2018-10-20T00:00:00Z'),
      eggsTotal: 0,
      eggsToday: 0,
    },
  ]);

  private readonly _henHouse = new BehaviorSubject<HenHouse>({
    temperatureInside: 3,
    temperatureOutside: -2,
    isDoorOpen: true,
  });

  public setTitle(title: string | undefined): void {
    this._title.next(title || APP_NAME);
  }

  public get title(): Observable<string> {
    return this._title;
  }

  public get chickens(): Observable<Chicken[]> {
    return this._chickens;
  }

  public get henHouse(): Observable<HenHouse> {
    return this._henHouse;
  }
}
