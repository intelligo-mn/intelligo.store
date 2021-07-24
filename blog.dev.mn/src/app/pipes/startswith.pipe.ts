import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'startswith' })
export class StartsWithPipe implements PipeTransform {
  transform(value: string, arg: string): boolean {
    return value?.toLocaleLowerCase().startsWith(arg?.toLocaleLowerCase());
  }
}
