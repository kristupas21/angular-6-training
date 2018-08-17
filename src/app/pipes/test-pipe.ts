import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reversed' })
export class ReversedPipe implements PipeTransform {
  transform(value: string, exponent?: number): string {
    if (!value) {
      return '';
    }

    if (typeof value !== 'string') {
      return value;
    }

    const valueArr = value.split('');
    const reversedArr = valueArr.reverse();

    return reversedArr.join('') + exponent;
  }
}
