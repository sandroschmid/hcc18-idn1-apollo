import { Component, OnInit } from '@angular/core';
import { Chart } from '../../../core/model/chart';

@Component({
  selector: 'app-egg-size-distribution',
  templateUrl: './egg-size-distribution.component.html',
  styleUrls: ['./egg-size-distribution.component.scss']
})
export class EggSizeDistributionComponent implements OnInit {

  public readonly view: {
    chart: Chart
  } = {
    chart: undefined
  };

  public ngOnInit(): void {
    this.view.chart = {
      type: 'doughnut',
      labels: ['Klein', 'Mittel', 'Groß'],
      legend: true,
      data: [
        {
          id: 'eggSizeDistribution',
          label: 'Größenverteilung',
          data: [25, 60, 15]
        }
      ]
    };
  }

}
