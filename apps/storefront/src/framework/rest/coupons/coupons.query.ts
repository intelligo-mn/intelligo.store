import { Coupon, QueryParamsType } from '@framework/types';
import { mapPaginatorData } from '@framework/utils/data-mappers';
import { API_ENDPOINTS } from '@framework/utils/endpoints';
import { useInfiniteQuery, useMutation } from 'react-query';
import { CouponService, VerifyCouponInputType } from './coupon.service';

export const fetchCoupons = async ({
  queryKey,
  pageParam,
}: QueryParamsType) => {
  const params: any = queryKey[1];
  let fetchedData: any = {};
  if (pageParam) {
    const response = await CouponService.fetchUrl(pageParam);
    fetchedData = response.data;
  } else {
    const response = await CouponService.find(params);
    fetchedData = response.data;
  }

  const { data, ...rest } = fetchedData;
  return { data, paginatorInfo: mapPaginatorData({ ...rest }) };
};

export const useCouponsQuery = (options: any = { limit: 15 }) => {
  return useInfiniteQuery<{ data: Coupon[]; paginatorInfo: any }, Error>(
    [API_ENDPOINTS.COUPONS, options],
    fetchCoupons,
    {
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};

export const useVerifyCouponMutation = () => {
  return useMutation((input: VerifyCouponInputType) =>
    CouponService.verifyCoupon(input)
  );
};
