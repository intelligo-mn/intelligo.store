import User from "@repositories/user";
import { useQuery } from "react-query";
import { User as TUser } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchMe = async () => {
  const { data } = await User.find(API_ENDPOINTS.ME);
  return data;
};

export const useMeQuery = () => {
  return useQuery<TUser, Error>([API_ENDPOINTS.ME], () => fetchMe());
};
