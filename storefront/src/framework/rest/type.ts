import type { Type, TypeQueryOptions } from '@/types';
import { useQuery } from 'react-query';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';

export function useTypes(options?: Partial<TypeQueryOptions>) {
  const { data, isLoading, error } = useQuery<Type[], Error>(
    [API_ENDPOINTS.TYPES, options],
    ({ queryKey }) => client.types.all(Object.assign({}, queryKey[1]))
  );
  return {
    types: data,
    isLoading,
    error,
  };
}

export function useType(slug: string) {
  const { data, isLoading, error } = useQuery<Type, Error>(
    [API_ENDPOINTS.TYPES, slug],
    () => client.types.get(slug),
    {
      enabled: Boolean(slug),
    }
  );
  return {
    type: data,
    isLoading,
    error,
  };
}
