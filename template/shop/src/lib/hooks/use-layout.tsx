import { TYPES_PER_PAGE } from '@/framework/client/variables';
import { useTypes } from '@/framework/type';
import { useRouter } from 'next/router';
const useLayout = () => {
  const data = useTypes({
    limit: TYPES_PER_PAGE,
  });
  const router = useRouter();
  const regex = /^\/$|^\/\?(.*)/;
  if (regex.test(router?.asPath)) {
    const homePage =
      data?.types?.find((type) => type?.settings?.isHome) ?? data?.types?.[0];
    return {
      layout: homePage?.settings?.layoutType ?? 'default',
      page: homePage,
    };
  }
  const page = data?.types?.find((type) => router.asPath.includes(type.slug));
  return {
    layout: page?.settings?.layoutType ?? 'default',
    page,
  };
};

export default useLayout;
