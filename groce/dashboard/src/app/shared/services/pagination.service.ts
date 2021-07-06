import { Injectable } from '@angular/core';

/**
 * An utility service for pagination
 */
@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor() {}

  /**
   * Method to find whether the sort is defined
   */
  parseAscending(sort: string): boolean {
    let sortArray = sort.split(',');
    sortArray = sortArray.length > 1 ? sortArray : sort.split('%2C');
    if (sortArray.length > 1) {
      return sortArray.slice(-1)[0] === 'asc';
    }
    // default to true if no sort is defined
    return true;
  }

  /**
   * Method to query params are strings, and need to be parsed
   */
  parsePage(page: string): number {
    return parseInt(page, 10);
  }

  /**
   * Method to sort can be in the format `id,asc` or `id`
   */
  parsePredicate(sort: string): string {
    return sort.split(',')[0].split('%2C')[0];
  }
}
