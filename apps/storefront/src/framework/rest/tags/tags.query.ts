import { QueryParamsType, TagsQueryOptionsType, Tag } from "@framework/types";
import { CoreApi, ParamsType } from "@framework/utils/core-api";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { mapPaginatorData } from "@framework/utils/data-mappers";
import {
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
} from "react-query";

const TagService = new CoreApi(API_ENDPOINTS.TAGS);

type PaginatedTag = {
  data: Tag[];
  paginatorInfo: any;
};
const fetchTags = async ({
  queryKey,
  pageParam,
}: QueryParamsType): Promise<PaginatedTag> => {
  const params = queryKey[1];
  let fetchedData: any = {};
  if (pageParam) {
    const response = await TagService.fetchUrl(pageParam);
    fetchedData = response.data;
  } else {
    const response = await TagService.find(params as ParamsType);
    fetchedData = response.data;
  }
  const { data, ...rest } = fetchedData;
  return { data, paginatorInfo: mapPaginatorData({ ...rest }) };
};

const useTagsQuery = (
  params: TagsQueryOptionsType,
  options?: UseInfiniteQueryOptions<
    PaginatedTag,
    Error,
    PaginatedTag,
    PaginatedTag,
    QueryKey
  >
) => {
  return useInfiniteQuery<PaginatedTag, Error>(
    [API_ENDPOINTS.TAGS, params],
    fetchTags,
    {
      ...options,
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};

export { useTagsQuery, fetchTags };

export const fetchTag = async (slug: string) => {
  const { data } = await TagService.findOne(slug);
  return data;
};

export const useTagQuery = (slug: string) => {
  return useQuery<Tag, Error>([API_ENDPOINTS.TAGS, slug], () => fetchTag(slug));
};
