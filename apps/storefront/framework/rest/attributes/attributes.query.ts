import { Attribute } from 'apps/storefront/framework/rest/types';
import { CoreApi } from 'apps/storefront/framework/rest/utils/core-api';
import { API_ENDPOINTS } from 'apps/storefront/framework/rest/utils/endpoints';
import { useQuery } from 'react-query';

const AttributesService = new CoreApi(API_ENDPOINTS.ATTRIBUTES);

export const fetchAttributes = async () => {
  const { data } = await AttributesService.findAll();
  return { attributes: data as Attribute[] };
};

export const useAttributesQuery = () => {
  return useQuery<{ attributes: Attribute[] }, Error>(API_ENDPOINTS.ATTRIBUTES, fetchAttributes);
};
