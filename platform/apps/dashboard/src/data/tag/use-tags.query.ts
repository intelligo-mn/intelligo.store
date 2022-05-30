import { QueryParamsType, TagsQueryOptionsType } from "apps/dashboard/src/ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "apps/dashboard/src/utils/data-mappers";
import { useQuery } from "react-query";
import Tag from "apps/dashboard/src/repositories/tag";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";
import { TagPaginator } from "apps/dashboard/src/ts-types/generated";

const fetchTags = async ({
  queryKey,
}: QueryParamsType): Promise<{ tags: TagPaginator }> => {
  const [_key, params] = queryKey;

  const {
    page,
    text,
    type,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as TagsQueryOptionsType;

  const searchString = stringifySearchQuery({
    name: text,
    type,
  });
  const url = `${API_ENDPOINTS.TAGS}?search=${searchString}&searchJoin=and&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const {
    data: { data, ...rest },
  } = await Tag.all(url);
  return {
    tags: {
      data,
      paginatorInfo: mapPaginatorData({ ...rest }),
    },
  };
};

const useTagsQuery = (options: TagsQueryOptionsType) => {
  return useQuery<{ tags: TagPaginator }, Error>(
    [API_ENDPOINTS.TAGS, options],
    fetchTags,
    {
      keepPreviousData: true,
    }
  );
};

export { useTagsQuery, fetchTags };
