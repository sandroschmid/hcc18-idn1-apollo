import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import {Subject} from 'rxjs';
import {map, switchMap, takeUntil} from 'rxjs/operators';
import {Chart} from '../../../core/model/chart';
import {Chicken} from '../../../core/model/chicken';
import {AVATAR} from '../../../core/model/constants';
import {ChickenService} from '../../../core/service/chicken.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.scss']
})
export class ChickenComponent implements OnInit, OnDestroy {

  private static readonly TIME_RANGES = [
    {
      label: '7 Tage',
      continuousText: 'in den letzten sieben Tagen'
    },
    {
      label: '8 Wochen',
      continuousText: 'in den letzten acht Wochen'
    },
    {
      label: '6 Monate',
      continuousText: 'in den letzten sechs Monaten'
    },
    {
      label: 'Ganzes Jahr',
      continuousText: 'im vergangen Jahr'
    }
  ];

  private static readonly WEEK_DAYS: string[] = [
    'SO',
    'MO',
    'DI',
    'MI',
    'DO',
    'FR',
    'SA'
  ];

  private static readonly MONTHS: string[] = [
    'Jän.',
    'Feb.',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'Aug.',
    'Sept.',
    'Okt.',
    'Nov.',
    'Dez.'
  ];

  public readonly view: {
    avatar: string,
    chicken: Chicken,
    timeRanges: { label: string, continuousText: string }[],
    selectedRange: { label: string, continuousText: string },
    chart: Chart,
    eggSum: number
  } = {
    avatar: AVATAR,
    chicken: undefined,
    timeRanges: ChickenComponent.TIME_RANGES,
    selectedRange: ChickenComponent.TIME_RANGES[0],
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

    this.updateChart();
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public updateChart(): void {
    const data = this.getChartData();
    this.view.chart = {
      type: 'bar',
      labels: data.labels,
      legend: false,
      min: 0,
      stepSize: 1,
      data: [
        {
          id: 'eggs',
          label: 'Eier',
          data: data.data,
        }
      ]
    };
  }

  private getChartData(): ({ labels: string[], data: number[] }) {
    const result = {labels: [], data: []};
    this.view.eggSum = 0;

    if (this.view.selectedRange.label === '7 Tage') {
      for (let i = 0; i < 7; i++) {
        result.labels.unshift(ChickenComponent.WEEK_DAYS[moment().subtract(i, 'days').weekday()]);
        // labels.unshift(this._simpleDate.transform(moment().subtract(i, 'days').toDate(), 'dd.MM.'));
        const eggs = Math.round(Math.random() * 3);
        result.data.unshift(eggs);
        this.view.eggSum += eggs;
      }
    } else if (this.view.selectedRange.label === '8 Wochen') {
      for (let i = 0; i < 8; i++) {
        result.labels.unshift(`KW ${moment().subtract(i, 'week').week()}`);
        const eggs = Math.round(Math.random() * (12 - 3) + 3);
        result.data.unshift(eggs);
        this.view.eggSum += eggs;
      }
    } else {
      const months = this.view.selectedRange.label === '6 Monate' ? 6 : 12;
      for (let i = 0; i < months; i++) {
        result.labels.unshift(ChickenComponent.MONTHS[moment().subtract(i, 'month').month()]);
        const eggs = Math.round(Math.random() * (40 - 10) + 10);
        result.data.unshift(eggs);
        this.view.eggSum += eggs;
      }
    }

    return result;
  }

}
