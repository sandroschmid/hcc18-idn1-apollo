import { Component, Input } from '@angular/core';
import { Chart } from '../../../core/model/chart';
import { Color } from '../../../core/model/color';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  public readonly view: {
    chart: Chart,
    options: any,
    colors: {
      backgroundColor?: string,
      borderColor?: string,
      pointBackgroundColor?: string,
      pointBorderColor?: string,
      pointHoverBackgroundColor?: string,
      pointHoverBorderColor?: string
    }[]
  } = {
    chart: undefined,
    options: undefined,
    colors: undefined
  };

  @Input()
  public set chart(chart: Chart) {
    this.view.chart = chart;
    this.updateChart();
  }

  private async updateChart(): Promise<void> {
    if (!this.view.chart) {
      return;
    }

    this.view.options = this.view.options || {};
    this.view.options.responsive = true;
    this.view.options.maintainAspectRatio = true;
    this.applyMinMaxOptions();

    if (this.view.chart.type === 'radar') {
      this.view.options.scale.pointLabels = { fontSize: 12, fontStyle: 'normal', fontFamily: 'Arial' };
    }

    if (this.view.chart.type === 'horizontalBar') {
      this.view.options.scales.yAxes = [{ maxBarThickness: 30 }];
    }

    this.colorize();
  }

  private applyMinMaxOptions(): void {
    if (isNaN(this.view.chart.min) || isNaN(this.view.chart.max)) {
      return null;
    }

    const ticks = {
      ticks: {
        beginAtZero: this.view.chart.min === 0,
        min: this.view.chart.min,
        max: this.view.chart.max,
        stepSize: this.view.chart.stepSize,
        precision: this.view.chart.stepSize && this.view.chart.stepSize > 1 ? 0 : 0.5
      }
    };

    switch (this.view.chart.type) {
      case 'radar':
        this.view.options.scale = ticks;
        break;
      case 'bar':
      case 'line':
        this.view.options.scales = { yAxes: [ticks] };
        break;
      case 'horizontalBar':
        this.view.options.scales = { xAxes: [ticks] };
        break;
    }
  }

  private colorize(): void {
    if (!this.view.chart || !this.view.chart.data) {
      return;
    }

    this.view.colors = this.view.chart.data.map(dataItem => {
      const color = Color.fromString(dataItem.id);
      return {
        backgroundColor: color.rgba(0.35),
        borderColor: color.rgba(0.9),
        pointBackgroundColor: color.rgba(0.95),
        pointBorderColor: color.rgba(0.95),
        pointHoverBackgroundColor: color.rgba(1),
        pointHoverBorderColor: color.rgba(1)
      };
    });
  }

}
