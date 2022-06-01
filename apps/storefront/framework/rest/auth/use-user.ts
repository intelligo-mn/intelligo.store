import { CoreApi } from "@framework/utils/core-api";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { authorizationAtom } from "@store/authorization-atom";
import { useAtom } from "jotai";
import { QueryKey, useQuery, UseQueryOptions } from "react-query";

const CustomerService = new CoreApi(API_ENDPOINTS.CUSTOMER);
export const fetchMe = async () => {
  const { data } = await CustomerService.findAll();
  return { me: data };
};

export const useCustomerQuery = (
  options: UseQueryOptions<any, Error, any, QueryKey>
) => {
  return useQuery<any, Error>(API_ENDPOINTS.CUSTOMER, fetchMe, options);
};

const useUser = () => {
  const [isAuthorized] = useAtom(authorizationAtom);
  const { data, isLoading, error } = useCustomerQuery({
    enabled: isAuthorized,
    onError: (err) => {
      console.log(err);
    },
  });
  return { me: data?.me, loading: isLoading, error };
};

export default useUser;
