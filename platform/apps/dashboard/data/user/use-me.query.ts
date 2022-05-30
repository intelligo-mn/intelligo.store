import User from "apps/dashboard/repositories/user";
import { useQuery } from "react-query";
import { User as TUser } from "apps/dashboard/ts-types/generated";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export const fetchMe = async () => {
  const { data } = await User.find(API_ENDPOINTS.ME);
  return data;
};

export const useMeQuery = () => {
  return useQuery<TUser, Error>([API_ENDPOINTS.ME], () => fetchMe());
};
