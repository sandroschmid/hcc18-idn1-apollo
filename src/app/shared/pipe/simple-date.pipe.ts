import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleDate'
})
export class SimpleDatePipe implements PipeTransform {

  private static readonly FORMATS = new Map<string, string>([
    ['d', 'dd.MM.yyyy'],
    ['t', 'HH:mm'],
    ['dt', 'dd.MM.yyyy, HH:mm']
  ]);

  constructor(private readonly datePipe: DatePipe) {
  }

  public transform(value: any, format?: string): any {
    const formatString = format ? SimpleDatePipe.FORMATS.get(format) : undefined;
    return this.datePipe.transform(value, formatString || format);
  }
}

