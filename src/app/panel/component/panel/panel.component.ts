import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { AVATAR, NAV_BAR_PANEL } from '../../../core/model/constants';
import { NavBarItem } from '../../../core/model/nav-bar-item';
import { PanelQuestion, PanelQuestionBuilder } from '../../../core/model/panel-question';
import { PanelService } from '../../../core/service/panel.service';
import { UtilityService } from '../../../core/service/utility.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit, OnDestroy {

  public readonly view: {
    navBarItem: NavBarItem,
    avatar: string,
    form: FormGroup,
    questions: PanelQuestion[],
  } = {
    navBarItem: NAV_BAR_PANEL,
    avatar: AVATAR,
    form: undefined,
    questions: undefined,
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _formBuilder: FormBuilder,
                     private readonly _panelService: PanelService,
                     private readonly _utility: UtilityService) {
  }

  public ngOnInit(): void {
    this.view.form = this._formBuilder.group({
      'question': undefined,
    });

    this._panelService.getQuestions()
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(questions => this.view.questions = questions);
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public sendQuestion(): void {
    const question = new PanelQuestionBuilder()
      .text(this.view.form.controls.question.value)
      .user('Test User');
    this._panelService.sendQuestion(question)
      .pipe(take(1))
      .subscribe(
        _ => this.view.form.reset(),
        _ => this._utility.showMessage('Beitrag konnte nicht gespeichert werden'),
      );
  }

}
