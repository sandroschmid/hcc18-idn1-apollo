import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Chicken } from '../model/chicken';
import { APP_NAME } from '../model/constants';
import { HenHouse } from '../model/hen-house';
import { PanelQuestion, PanelQuestionBuilder } from '../model/panel-question';
import { PanelResponse, PanelResponseBuilder } from '../model/panel-response';

@Injectable()
export class StateService {

  private readonly _title = new BehaviorSubject<string>(APP_NAME);

  private readonly _panelQuestions = new BehaviorSubject<PanelQuestion[]>([
    new PanelQuestionBuilder().user('Max Mustermann')
      .id(1)
      .text('Pippi hat so ein lichtes Gefieder. Kann mir hier jemand sagen, was das sein könnte?')
      .date(new Date('2019-01-28T10:33:45Z'))
      .responses([
        new PanelResponseBuilder()
          .id(2)
          .user('Petra Müller')
          .text('Für mich sieht das eher nach XYZ aus. Wünsche gute Besserung.')
          .date(new Date('2019-01-29T11:50:48Z'))
          .build(),
        new PanelResponseBuilder()
          .id(1)
          .user('Anna Musterfrau')
          .text('Das könnte sein, weil blablabla')
          .date(new Date('2019-01-28T18:15:05Z'))
          .build(),
      ])
      .build(),
  ]);

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

  public get panelQuestions(): Observable<PanelQuestion[]> {
    return this._panelQuestions;
  }

  public addPanelQuestion(questionBuilder: PanelQuestionBuilder): Observable<PanelQuestion> {
    const question = questionBuilder.id(this.autoId(this._panelQuestions.value)).build();
    this._panelQuestions.next([
      question,
      ...this._panelQuestions.value,
    ]);

    return of(question);
  }

  public addPanelResponse(questionId: number, responseBuilder: PanelResponseBuilder): Observable<PanelResponse> {
    const question = this._panelQuestions.value.find(q => q.id === questionId);
    if (!question) {
      return throwError('Could not find question');
    }

    const response = responseBuilder.id(this.autoId(question.responses)).build();
    question.responses.unshift(response);
    this._panelQuestions.next(this._panelQuestions.value);

    return of(response);
  }

  public deleteQuestion(questionId: number): Observable<void> {
    const index = this._panelQuestions.value.findIndex(q => q.id === questionId);
    if (index < 0) {
      return throwError('Could not find question');
    }

    this._panelQuestions.next(this._panelQuestions.value.splice(index, 1));
    return of();
  }

  public get chickens(): Observable<Chicken[]> {
    return this._chickens;
  }

  public get henHouse(): Observable<HenHouse> {
    return this._henHouse;
  }

  private autoId(list: { id: number }[]): number {
    let maxId = 0;
    list.forEach(item => {
      if (item.id > maxId) {
        maxId = item.id;
      }
    });

    return maxId + 1;
  }
}
