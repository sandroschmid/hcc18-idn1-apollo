import { ChartDataItem } from './chart-data-item';

export interface Chart {
  readonly type: 'radar' | 'bar' | 'horizontalBar' | 'line' | 'scatter';
  readonly labels?: string[];
  readonly data?: ChartDataItem[];

  readonly min?: number;
  readonly max?: number;
  readonly stepSize?: number;
  readonly legend?: boolean;

  readonly options?: object;
}
