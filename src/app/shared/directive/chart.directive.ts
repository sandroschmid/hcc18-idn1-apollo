import { Directive, ElementRef, SimpleChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataItem } from '../../core/model/chart-data-item';

@Directive({
  selector: '[appChart]'
})
export class ChartDirective extends BaseChartDirective {

  constructor(element: ElementRef) {
    super(element);

    this['ngOnChanges'] = (changes: SimpleChanges): void => {
      if (this['initFlag']) {
        if ('data' in changes) {
          this['updateChartData'](changes['data'].currentValue);
          this.chart.update();
        } else if ('datasets' in changes) {
          this['updateChartData'](changes['datasets'].currentValue);
          this.chart.update();
        }

        if ('chartType' in changes ||
          'labels' in changes ||
          'legend' in changes ||
          'options' in changes ||
          'colors' in changes) {
          this['refresh']();
        }
      }
    };

    /**
     * Default implementation is complete bullshit.
     * Since this is a private method it cannot be overridden normally.
     */
    this['updateChartData'] = (newDataValues: ChartDataItem[]) => {
      this.chart.data.datasets = newDataValues.map(dataItem => {
        const existingDataItem = this.chart.data.datasets.find(ds => ds.id === dataItem.id);
        if (existingDataItem) {
          existingDataItem.label = dataItem.label;
          existingDataItem.data = dataItem.data;
          return existingDataItem;
        } else {
          return dataItem;
        }
      });
    };
  }
}
