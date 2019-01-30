import { Component, Input } from '@angular/core';
import { AVATAR } from '../../../core/model/constants';
import { PanelQuestion } from '../../../core/model/panel-question';

@Component({
  selector: 'app-panel-question-item',
  templateUrl: './panel-question-item.component.html',
  styleUrls: ['./panel-question-item.component.scss'],
})
export class PanelQuestionItemComponent {

  public view: {
    avatar: string,
    question: PanelQuestion
  } = {
    avatar: AVATAR,
    question: undefined,
  };

  @Input()
  public set question(question: PanelQuestion) {
    this.view.question = question;
  }

}
