export class PaginatorInfo {
  count: number;
  currentPage: number;
  firstItem: number;
  lastItem: number;
  lastPage: number;
  perPage: number;
  total: number;
  'first_page_url': string;
  'last_page_url': string;

  'next_page_url': string;
  'prev_page_url': string;
}
// "current_page": 1,
//   "first_page_url": "https://pickbazarapi.redq.io/admin/users?page=1",
//     "from": 1,
//     "last_page": 1,
//     "last_page_url": "https://pickbazarapi.redq.io/admin/users?page=1",
//     "links": [
//         {
//             "url": null,
//             "label": "&laquo; Previous",
//             "active": false
//         },
//         {
//             "url": "https://pickbazarapi.redq.io/admin/users?page=1",
//             "label": "1",
//             "active": true
//         },
//         {
//             "url": null,
//             "label": "Next &raquo;",
//             "active": false
//         }
//     ],
//     "next_page_url": null,
//     "path": "https://pickbazarapi.redq.io/admin/users",
//     "per_page": 15,
//     "prev_page_url": null,
//     "to": 12,
//     "total": 12
