import { PaginatorInfo } from "@ts-types/generated";

export const getPaginatorInfo = (data: any): PaginatorInfo => {
  if (data?.length) {
    const dataIndex = data.length - 1;
    const isEmpty = data?.[dataIndex]?.length === 0;
    const fetchedAllData =
      isEmpty ||
      (data && data[dataIndex]?.current_page === data[dataIndex]?.last_page);

    const total = data?.[dataIndex]?.total;
    const perPage = data?.[dataIndex]?.per_page;
    const currentPage = data?.[dataIndex]?.current_page;
    const lastPage = data?.[dataIndex]?.last_page;
    const count = data?.[dataIndex]?.to + 1 - data?.[dataIndex]?.from;

    return {
      perPage,
      currentPage,
      lastPage,
      total,
      hasMorePages: !fetchedAllData,
      count,
    };
  }
  return {
    perPage: 0,
    currentPage: 0,
    lastPage: 0,
    total: 0,
    hasMorePages: false,
    count: 0,
  };
};
