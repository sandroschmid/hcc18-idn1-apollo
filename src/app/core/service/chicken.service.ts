import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chicken } from '../model/chicken';
import { StateService } from './state.service';

@Injectable()
export class ChickenService {

  public constructor(private readonly _state: StateService) {
  }

  public findAll(): Observable<Chicken[]> {
    return this._state.chickens;
  }

  public findById(id: number): Observable<Chicken> {
    return this._state.chickens.pipe(
      map(chickens => chickens.filter(c => c.id === id)),
      map(chickens => chickens.length === 1 ? chickens[0] : undefined));
  }

}
