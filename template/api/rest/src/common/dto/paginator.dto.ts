export class Paginator<T> {
  data: T[];
  count: number;
  currentPage: number;
  firstItem: number;
  lastItem: number;
  lastPage: number;
  perPage: number;
  total: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;
  prev_page_url: string;
}
