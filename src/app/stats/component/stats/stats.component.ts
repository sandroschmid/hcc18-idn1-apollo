import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Chart } from '../../../core/model/chart';
import { Chicken } from '../../../core/model/chicken';
import { NAV_BAR_STATS } from '../../../core/model/constants';
import { NavBarItem } from '../../../core/model/nav-bar-item';
import { ChickenService } from '../../../core/service/chicken.service';
import { StateService } from '../../../core/service/state.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {

  public readonly view: {
    navBarItem: NavBarItem,
    chickens: Chicken[],
    selectedChickenTabIndex: number,
    eggsKing: Chicken,
    eggDistributionChart: Chart
  } = {
    navBarItem: NAV_BAR_STATS,
    chickens: undefined,
    selectedChickenTabIndex: 0,
    eggsKing: undefined,
    eggDistributionChart: undefined
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _stateService: StateService,
                     private readonly _chickenService: ChickenService) {
    this.onChickensLoaded = this.onChickensLoaded.bind(this);
  }

  public ngOnInit(): void {
    this._chickenService.findAll()
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(this.onChickensLoaded);

    this._stateService.statsSelectedChickenTabIndex
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(index => this.view.selectedChickenTabIndex = index);
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public onSelectedChickenTabIndexChange(index: number) {
    this._stateService.setStatsSelectedChickenTabIndex(index);
  }

  private onChickensLoaded(chickens: Chicken[]): void {
    this.view.chickens = chickens;
    this.view.eggsKing = chickens.reduce((king, chicken) => !king || chicken.eggsTotal > king.eggsTotal ? chicken : king, undefined);
    this.view.eggDistributionChart = this.createEggDistributionChart(chickens);
  }

  private createEggDistributionChart(chickens: Chicken[]): Chart {
    return {
      type: 'doughnut',
      labels: chickens.map(c => c.name),
      legend: true,
      data: [
        {
          id: 'eggDistribution',
          label: 'Eierverteilung gesamt',
          data: chickens.map(c => c.eggsTotal)
        }
      ]
    };
  }
}
