import {
  QueryParamsType,
  CategoriesQueryOptionsType,
} from "@ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "@utils/data-mappers";
import { useQuery } from "react-query";
import Category from "@repositories/category";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { CategoryPaginator } from "@ts-types/generated";

const fetchCategories = async ({
  queryKey,
}: QueryParamsType): Promise<{ categories: CategoryPaginator }> => {
  const [_key, params] = queryKey;

  const {
    page,
    text,
    type,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
    parent = null,
  } = params as CategoriesQueryOptionsType;

  const searchString = stringifySearchQuery({
    name: text,
    type,
  });
  // @ts-ignore
  const queryParams = new URLSearchParams({
    searchJoin: "and",
    orderBy,
    sortedBy,
    parent,
    limit: limit.toString(),
    ...(page && { page: page.toString() }),
    ...(Boolean(searchString) && { search: searchString }),
  });
  const url = `${API_ENDPOINTS.CATEGORIES}?${queryParams.toString()}`;
  const {
    data: { data, ...rest },
  } = await Category.all(url);
  return {
    categories: {
      data,
      paginatorInfo: mapPaginatorData({ ...rest }),
    },
  };
};

const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  return useQuery<{ categories: CategoryPaginator }, Error>(
    [API_ENDPOINTS.CATEGORIES, options],
    fetchCategories,
    {
      keepPreviousData: true,
    }
  );
};

export { useCategoriesQuery, fetchCategories };
