import User from "@repositories/user";
import { useQuery } from "react-query";
import { User as TUser } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchUser = async (id: string) => {
  const { data } = await User.find(`${API_ENDPOINTS.USERS}/${id}`);
  return data;
};

export const useUserQuery = (id: string) => {
  return useQuery<TUser, Error>(
    [API_ENDPOINTS.USERS, id],
    () => fetchUser(id),
    { enabled: Boolean(id) }
  );
};
