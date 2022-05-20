import Banner from '@/components/banners/banner';
import Categories from '@/components/categories/categories';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';

import FilterBar from './filter-bar';

export default function Standard({ variables }: HomePageProps) {
  return (
    <>
      <Banner layout="standard" variables={variables.types} />
      <FilterBar variables={variables.categories} />
      <Categories layout="standard" variables={variables.categories} />
      <main className="flex-1">
        <ProductGridHome
          className="px-4 py-8 lg:p-8"
          variables={variables.products}
        />
      </main>
    </>
  );
}
