import Analytics from "apps/dashboard/src/repositories/analytics";
import { useQuery } from "react-query";
import { Analytics as TAnalytics } from "apps/dashboard/src/ts-types/generated";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export const fetchAnalytics = async () => {
  return await Analytics.analytics(API_ENDPOINTS.ANALYTICS);
};

export const useAnalyticsQuery = () => {
  return useQuery<TAnalytics, Error>([API_ENDPOINTS.ANALYTICS], fetchAnalytics);
};
