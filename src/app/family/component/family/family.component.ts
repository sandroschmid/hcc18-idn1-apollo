import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Chicken, ChickenBuilder } from '../../../core/model/chicken';
import { AVATAR, NAV_BAR_FAMILY } from '../../../core/model/constants';
import { NavBarItem } from '../../../core/model/nav-bar-item';
import { ChickenService } from '../../../core/service/chicken.service';
import { UtilityService } from '../../../core/service/utility.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit, OnDestroy {

  @ViewChild('chickenFormExpansionPanel') public readonly chickenFormExpansionPanel: MatExpansionPanel;

  public readonly view: {
    navBarItem: NavBarItem,
    avatar: string,
    chickenForm: FormGroup,
    chickenBirthDateMin: Date,
    chickenBirthDateMax: Date,
    chickens: Chicken[]
  } = {
    navBarItem: NAV_BAR_FAMILY,
    avatar: AVATAR,
    chickenForm: undefined,
    chickenBirthDateMin: new Date('1950-01-01T00:00:00Z'),
    chickenBirthDateMax: new Date(),
    chickens: undefined
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _formBuilder: FormBuilder,
                     private readonly _chickenService: ChickenService,
                     private readonly _utility: UtilityService) {
  }

  public ngOnInit(): void {
    this.view.chickenForm = this._formBuilder.group({
      'name': [undefined, Validators.required],
      'birthDate': undefined
    });

    this._chickenService.findAll()
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(chickens => this.view.chickens = chickens);
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public createChicken(): void {
    const chickenBuilder = new ChickenBuilder()
      .name(this.view.chickenForm.controls.name.value)
      .birthDate(this.view.chickenForm.controls.birthDate.value);

    this._chickenService.createChicken(chickenBuilder)
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(
        _ => {
          this.view.chickenForm.reset();
          this.chickenFormExpansionPanel.close();
        },
        _ => this._utility.showMessage('Das Huhn konnte nicht gespeichert werden')
      );
  }

}
