import { CoreApi } from '@framework/utils/core-api';
import { API_ENDPOINTS } from '@framework/utils/endpoints';
import { useQuery } from 'react-query';
import { SettingsType } from '@framework/types';

const SettingsService = new CoreApi(API_ENDPOINTS.SETTINGS);

export const fetchSettings = async () => {
  const { data } = await SettingsService.findAll();
  return { settings: data };
};
type SettingsResponse = {
  settings: SettingsType;
};
export const useSettingsQuery = () => {
  return useQuery<SettingsResponse, Error>(
    API_ENDPOINTS.SETTINGS,
    fetchSettings
  );
};