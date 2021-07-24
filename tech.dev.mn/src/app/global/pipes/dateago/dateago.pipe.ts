import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateago',
})
export class DateagoPipe implements PipeTransform {
  transform(value: Date, args?: unknown[]): string {
    if (value) {
      const seconds = Math.floor((Date.now() - +new Date(value)) / 1000);
      if (seconds < 59)
        // less than 59 seconds ago will show as 'Just now'
        return 'Just now';
      const intervals = {
        day: 86400,
        hour: 3600,
        minute: 60,
      };
      switch (true) {
        case seconds < intervals.minute: {
          return '(Just Now)';
        }
        case seconds < intervals.hour: {
          return `(${Math.floor(seconds / intervals.minute)} minute's ago)`;
        }
        case seconds < intervals.day: {
          return `(${Math.floor(seconds / intervals.hour)} + hours's ago`;
        }
      }
    }
    return '';
  }
}
