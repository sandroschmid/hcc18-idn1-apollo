import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PanelQuestion, PanelQuestionBuilder } from '../model/panel-question';
import { PanelResponse, PanelResponseBuilder } from '../model/panel-response';
import { StateService } from './state.service';

@Injectable()
export class PanelService {

  public constructor(private readonly _state: StateService) {
  }

  public getQuestions(): Observable<PanelQuestion[]> {
    return this._state.panelQuestions;
  }

  public getQuestion(id: number): Observable<PanelQuestion> {
    return this._state.panelQuestions.pipe(
      map(questions => questions.filter(q => q.id === id)),
      map(questions => questions.length === 1 ? questions[0] : undefined),
    );
  }

  public sendQuestion(question: PanelQuestionBuilder): Observable<PanelQuestion> {
    return this._state.addPanelQuestion(question);
  }

  public sendResponse(questionId: number, response: PanelResponseBuilder): Observable<PanelResponse> {
    return this._state.addPanelResponse(questionId, response);
  }

  public deleteQuestion(questionId: number): Observable<void> {
    return this._state.deleteQuestion(questionId);
  }

}
