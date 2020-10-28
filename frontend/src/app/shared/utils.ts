import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { DATE_FORMAT } from './constants';
export class FASUtils {
  static ngbDateToMoment(date: NgbDate): any {
    return moment(`${date.year}-${date.month}-${date.day}`);
  }
}
