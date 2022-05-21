import {
  QueryParamsType,
  AuthorsQueryOptionsType,
} from "@ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "@utils/data-mappers";
import { useQuery } from "react-query";
import Author from "@repositories/author";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { AuthorPaginator } from "@ts-types/generated";

const fetchAuthors = async ({
  queryKey,
}: QueryParamsType): Promise<{ authors: AuthorPaginator }> => {
  const [_key, params] = queryKey;

  const {
    page,
    text,
    is_approved,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as AuthorsQueryOptionsType;

  const searchString = stringifySearchQuery({
    name: text,
    is_approved,
  });
  // @ts-ignore
  const queryParams = new URLSearchParams({
    searchJoin: "and",
    orderBy,
    sortedBy,
    limit: limit.toString(),
    ...(page && { page: page.toString() }),
    ...(Boolean(searchString) && { search: searchString }),
  });
  const url = `${API_ENDPOINTS.AUTHORS}?${queryParams.toString()}`;
  const {
    data: { data, ...rest },
  } = await Author.all(url);
  return {
    authors: {
      data,
      paginatorInfo: mapPaginatorData({ ...rest }),
    },
  };
};

const useAuthorsQuery = (options: AuthorsQueryOptionsType) => {
  return useQuery<{ authors: AuthorPaginator }, Error>(
    [API_ENDPOINTS.AUTHORS, options],
    fetchAuthors,
    {
      keepPreviousData: true,
    }
  );
};

export { useAuthorsQuery, fetchAuthors };
