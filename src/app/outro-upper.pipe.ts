import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'outroUpper'
})
export class OutroUpperPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let x = value

    return x.toUpperCase();
  }

}
