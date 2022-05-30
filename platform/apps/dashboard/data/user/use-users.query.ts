import { QueryParamsType, QueryOptionsType } from "apps/dashboard/src/ts-types/custom.types";
import { mapPaginatorData } from "apps/dashboard/src/utils/data-mappers";
import { useQuery } from "react-query";
import User from "apps/dashboard/src/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

const fetchUsers = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const {
    page,
    text,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as QueryOptionsType;
  const url = `${API_ENDPOINTS.USERS}?search=${text}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const {
    data: { data, ...rest },
  } = await User.all(url);
  return { users: { data, paginatorInfo: mapPaginatorData({ ...rest }) } };
};

const useUsersQuery = (options: QueryOptionsType) => {
  return useQuery<any, Error>([API_ENDPOINTS.USERS, options], fetchUsers, {
    keepPreviousData: true,
  });
};

export { useUsersQuery, fetchUsers };
