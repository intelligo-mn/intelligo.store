import Product from "@intelligo/dashboard/repositories/product";
import { useQuery } from "react-query";
import { Product as TProduct } from "@intelligo/dashboard/ts-types/generated";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export const fetchProduct = async (slug: string) => {
  const { data } = await Product.find(`${API_ENDPOINTS.PRODUCTS}/${slug}`);
  return data;
};

export const useProductQuery = (slug: string) => {
  return useQuery<TProduct, Error>([API_ENDPOINTS.PRODUCTS, slug], () =>
    fetchProduct(slug)
  );
};
