import type { TypeQueryOptions } from '@/types';
import { useGroupQuery, useGroupsQuery } from './gql/groups.graphql';

export function useTypes(options?: Partial<TypeQueryOptions>) {
  const { data, loading: isLoading, error } = useGroupsQuery();
  return {
    types: data?.types ?? [],
    isLoading,
    error,
  };
}

export function useType(slug: string) {
  const {
    data,
    loading: isLoading,
    error,
  } = useGroupQuery({
    variables: {
      slug,
    },
  });
  return {
    type: data?.type,
    isLoading,
    error,
  };
}
