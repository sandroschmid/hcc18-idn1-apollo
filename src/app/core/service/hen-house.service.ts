import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HenHouse } from '../model/hen-house';
import { StateService } from './state.service';
import { HenHouseDoor } from '../model/hen-house-door';

@Injectable()
export class HenHouseService {

  private static readonly LAY_AN_EGG_DELAY = 5 * 1000;

  private _availableEggsCount = new BehaviorSubject<number>(-1);

  public constructor(private readonly _state: StateService) {
    this.layAnEgg = this.layAnEgg.bind(this);
    this.layAnEgg();
  }

  public getHenHouse(): Observable<HenHouse> {
    return this._state.henHouse;
  }

  public updateDoorSettings(door: HenHouseDoor): Observable<void> {
    return this._state.updateHenHouseDoorSettings(door);
  }

  public getAvailableEggsCount(): Observable<number> {
    return this._availableEggsCount;
  }

  public toggleDoor(): Observable<void> {
    return this._state.toggleHenHouseDoor();
  }

  private layAnEgg() {
    this._availableEggsCount.next(this._availableEggsCount.value + 1);
    setTimeout(this.layAnEgg, HenHouseService.LAY_AN_EGG_DELAY);
  }
}
