import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKW'
})
export class ToKWPipe implements PipeTransform {

  transform(value: number = 0, ...args: unknown[]): string {
    return `${value}W: ${value / 1000}KW`;
  }

}
