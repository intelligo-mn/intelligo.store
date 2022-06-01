import Shop from "@repositories/shop";
import { QueryKey, useQuery, UseQueryOptions } from "react-query";
import { Shop as TShop } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchShop = async (slug: string) => {
  const { data } = await Shop.find(`${API_ENDPOINTS.SHOPS}/${slug}`);
  return { shop: data };
};

type IProps = {
  shop: TShop;
};
export const useShopQuery = (
  slug: string,
  options?: UseQueryOptions<IProps, Error, IProps, QueryKey>
) => {
  return useQuery<IProps, Error>(
    [API_ENDPOINTS.SHOPS, slug],
    () => fetchShop(slug),
    options
  );
};
