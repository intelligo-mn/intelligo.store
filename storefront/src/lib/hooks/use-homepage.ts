import { TYPES_PER_PAGE } from '@/framework/client/variables';
import { useTypes } from '@/framework/type';

export default function useHomepage() {
  const { types } = useTypes({
    limit: TYPES_PER_PAGE,
  });
  if (!types) {
    return {
      homePage: {
        slug: '',
      },
    };
  }
  return {
    homePage: types.find((type) => type.settings.isHome) ?? types[0],
  };
}
