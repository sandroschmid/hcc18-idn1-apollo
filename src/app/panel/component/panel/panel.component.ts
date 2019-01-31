import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatExpansionPanel } from '@angular/material';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { AVATAR, NAV_BAR_PANEL } from '../../../core/model/constants';
import { Image } from '../../../core/model/image';
import { ImageUploadModalData } from '../../../core/model/image-upload-modal-data';
import { NavBarItem } from '../../../core/model/nav-bar-item';
import { PanelQuestion, PanelQuestionBuilder } from '../../../core/model/panel-question';
import { PanelService } from '../../../core/service/panel.service';
import { UtilityService } from '../../../core/service/utility.service';
import { ImageUploadModalComponent } from '../../../shared/component/image-upload-modal/image-upload-modal.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, OnDestroy {

  @ViewChild('questionFormExpansionPanel') public readonly questionFormExpansionPanel: MatExpansionPanel;

  public readonly view: {
    navBarItem: NavBarItem,
    avatar: string,
    questionForm: FormGroup,
    image: Image,
    questions: PanelQuestion[],
  } = {
    navBarItem: NAV_BAR_PANEL,
    avatar: AVATAR,
    questionForm: undefined,
    image: undefined,
    questions: undefined
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _formBuilder: FormBuilder,
                     private readonly _dialog: MatDialog,
                     private readonly _panelService: PanelService,
                     private readonly _utility: UtilityService) {
  }

  public ngOnInit(): void {
    this.view.questionForm = this._formBuilder.group({
      'question': undefined
    });

    this._panelService.getQuestions()
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(questions => this.view.questions = questions);
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public uploadImage(): void {
    const dialogData: ImageUploadModalData = { image: this.view.image };
    const dialogRef = this._dialog.open(ImageUploadModalComponent, { data: dialogData });
    dialogRef.beforeClosed()
      .pipe(take(1), takeUntil(this._ngDestroy))
      .subscribe(image => {
        if (image && image instanceof Image) {
          this.view.image = image;
          this._utility.showMessage('Bild hochgeladen');
        }
      });
  }

  public sendQuestion(): void {
    const question = new PanelQuestionBuilder()
      .image(this.view.image)
      .text(this.view.questionForm.controls.question.value)
      .user('Test User');
    this._panelService.sendQuestion(question)
      .pipe(take(1))
      .subscribe(
        _ => {
          this.view.questionForm.reset();
          this.questionFormExpansionPanel.close();
        },
        _ => this._utility.showMessage('Beitrag konnte nicht gespeichert werden')
      );
  }
}
