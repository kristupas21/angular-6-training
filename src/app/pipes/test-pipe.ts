import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reversed' })
export class ReversedPipe implements PipeTransform {
  transform(value: string): string {
    const valueArr = value.split('');
    const reversedArr = valueArr.reverse();

    return reversedArr.join('');
  }
}
