import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Chart } from '../../../core/model/chart';
import { Chicken } from '../../../core/model/chicken';
import { AVATAR } from '../../../core/model/constants';
import { ChickenService } from '../../../core/service/chicken.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.scss']
})
export class ChickenComponent implements OnInit, OnDestroy {

  private static readonly WEEK_DAYS: string[] = [
    'SO',
    'MO',
    'DI',
    'MI',
    'DO',
    'FR',
    'SA'
  ];

  public readonly view: {
    avatar: string,
    chicken: Chicken,
    chart: Chart,
    eggSum: number
  } = {
    avatar: AVATAR,
    chicken: undefined,
    chart: undefined,
    eggSum: undefined
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _activatedRoute: ActivatedRoute,
                     private readonly _chickenService: ChickenService) {
  }

  public ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        takeUntil(this._ngDestroy),
        map(params => +params['id']),
        switchMap(id => this._chickenService.findById(id).pipe(takeUntil(this._ngDestroy)))
      )
      .subscribe(chicken => this.view.chicken = chicken);

    this.initChart();
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  private initChart(): void {
    const labels: string[] = [];
    const data: number[] = [];
    this.view.eggSum = 0;
    for (let i = 0; i < 7; i++) {
      labels.unshift(ChickenComponent.WEEK_DAYS[moment().subtract(i, 'days').weekday()]);
      // labels.unshift(this._simpleDate.transform(moment().subtract(i, 'days').toDate(), 'dd.MM.'));
      const eggs = Math.round(Math.random() * 3);
      data.unshift(eggs);
      this.view.eggSum += eggs;
    }

    this.view.chart = {
      type: 'bar',
      labels: labels,
      legend: true,
      min: 0,
      stepSize: 1,
      data: [
        {
          id: 'eggs',
          label: 'Eier',
          data: data
        }
      ]
    };
  }

}
