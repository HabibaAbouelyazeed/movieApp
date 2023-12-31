import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateToPercent'
})
export class RateToPercentPipe implements PipeTransform {

  transform(value: number): number {
    return +(value * 10).toFixed(0);
  }

}
