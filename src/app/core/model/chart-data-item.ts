export interface ChartDataItem {
  readonly id: string;
  readonly label?: string;
  readonly data: (number | { x: number; y: number })[];

  readonly [key: string]: any;
}
