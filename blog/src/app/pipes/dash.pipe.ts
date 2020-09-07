import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dash'
})
export class DashPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return;
    }
    return value.replace(' ', '-');
  }
}
