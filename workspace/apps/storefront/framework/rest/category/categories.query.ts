import {
  CategoriesQueryOptionsType,
  Category,
  QueryParamsType,
} from "@framework/types";
import { CoreApi, ParamsType } from "@framework/utils/core-api";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import {
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
} from "react-query";
import { mapPaginatorData } from "@framework/utils/data-mappers";

const CategoryService = new CoreApi(API_ENDPOINTS.CATEGORIES);

type PaginatedCategories = {
  data: Category[];
  paginatorInfo: any;
};

export const fetchInfiniteCategories = async ({
  queryKey,
  pageParam,
}: QueryParamsType): Promise<PaginatedCategories> => {
  const params = queryKey[1];
  let fetchedData: any = {};
  if (pageParam) {
    const response = await CategoryService.fetchUrl(pageParam);
    fetchedData = response.data;
  } else {
    const response = await CategoryService.find(params as ParamsType);
    fetchedData = response.data;
  }
  const { data, ...rest } = fetchedData;
  return { data, paginatorInfo: mapPaginatorData({ ...rest }) };
};

export const useCategoriesInfiniteQuery = (
  params: CategoriesQueryOptionsType,
  options?: UseInfiniteQueryOptions<
    PaginatedCategories,
    Error,
    PaginatedCategories,
    PaginatedCategories,
    QueryKey
  >
) => {
  return useInfiniteQuery<PaginatedCategories, Error>(
    [API_ENDPOINTS.PRODUCTS, params],
    fetchInfiniteCategories,
    {
      ...options,
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};

export const fetchCategories = async ({ queryKey }: QueryParamsType) => {
  const params = queryKey[1];

  const response = await CategoryService.find(params as ParamsType);

  const fetchedData = response?.data;

  return { data: fetchedData?.data };
};

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  return useQuery<{ data: Category[] }, Error>(
    [API_ENDPOINTS.CATEGORIES, options],
    fetchCategories
  );
};

export const fetchCategory = async (params: string | number) => {
  const { data } = await CategoryService.findOne(params);

  return data;
};

export const useCategoryQuery = (params: string | number) => {
  return useQuery<Category, Error>([API_ENDPOINTS.CATEGORIES, params], () =>
    fetchCategory(params)
  );
};
