import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { map, switchMap, take, takeUntil } from 'rxjs/operators';
import { AVATAR, NAV_BAR_PANEL } from '../../../core/model/constants';
import { NavBarItem } from '../../../core/model/nav-bar-item';
import { PanelQuestion } from '../../../core/model/panel-question';
import { PanelResponseBuilder } from '../../../core/model/panel-response';
import { PanelService } from '../../../core/service/panel.service';
import { UtilityService } from '../../../core/service/utility.service';

@Component({
  selector: 'app-panel-question',
  templateUrl: './panel-question.component.html',
  styleUrls: ['./panel-question.component.scss'],
})
export class PanelQuestionComponent implements OnInit, OnDestroy {

  public readonly view: {
    navBarItem: NavBarItem,
    avatar: string,
    form: FormGroup,
    question: PanelQuestion,
  } = {
    navBarItem: NAV_BAR_PANEL,
    avatar: AVATAR,
    form: undefined,
    question: undefined,
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _activatedRoute: ActivatedRoute,
                     private readonly _formBuilder: FormBuilder,
                     private readonly _panelService: PanelService,
                     private readonly _utility: UtilityService) {
  }

  public ngOnInit(): void {
    this.view.form = this._formBuilder.group({
      'response': undefined,
    });

    this._activatedRoute.params.pipe(
      takeUntil(this._ngDestroy),
      map(params => +params['id']),
      switchMap(id => this._panelService.getQuestion(id).pipe(takeUntil(this._ngDestroy))),
    ).subscribe(question => this.view.question = question);
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public sendResponse(): void {
    const response = new PanelResponseBuilder()
      .text(this.view.form.controls.response.value)
      .user('Test User');
    this._panelService.sendResponse(this.view.question.id, response)
      .pipe(take(1))
      .subscribe(
        _ => this.view.form.reset(),
        _ => this._utility.showMessage('Antwort konnte nicht gespeichert werden'),
      );
  }

}
