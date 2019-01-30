import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NAV_BAR_HEN_HOUSE } from '../../../core/model/constants';
import { NavBarItem } from '../../../core/model/nav-bar-item';
import { HenHouse } from '../../../core/model/hen-house';
import { HenHouseService } from '../../../core/service/hen-house.service';
import { take, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hen-house',
  templateUrl: './hen-house.component.html',
  styleUrls: ['./hen-house.component.scss']
})
export class HenHouseComponent implements OnInit, OnDestroy {

  public readonly view: {
    navBarItem: NavBarItem,
    henHouse: HenHouse,
    doorForm: FormGroup,
    doorFormOpenOptions: string[];
    doorFormCloseOptions: string[];
  } = {
    navBarItem: NAV_BAR_HEN_HOUSE,
    henHouse: undefined,
    doorForm: undefined,
    doorFormOpenOptions: ['06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00'],
    doorFormCloseOptions: ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00']
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _formBuilder: FormBuilder,
                     private readonly _henHouseService: HenHouseService) {
  }

  public ngOnInit(): void {
    this.view.doorForm = this._formBuilder.group({
      'automatismActive': false,
      'open': [undefined, Validators.required],
      'close': [undefined, Validators.required]
    });

    this._henHouseService.getHenHouse()
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(henHouse => {
        this.view.henHouse = henHouse;
        this.view.doorForm.setValue({
          automatismActive: henHouse.door.automatismActive,
          open: henHouse.door.open,
          close: henHouse.door.close
        }, { emitEvent: false });
      });

    this.view.doorForm.valueChanges
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(settings => this._henHouseService.updateDoorSettings(settings));
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public toggleDoor(): void {
    this._henHouseService.toggleDoor();
  }

}
