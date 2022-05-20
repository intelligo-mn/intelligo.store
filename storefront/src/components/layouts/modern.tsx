import Banner from '@/components/banners/banner';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import ProductGridHome from '@/components/products/grids/home';
import FilterBar from './filter-bar';
import type { HomePageProps } from '@/types';

export default function Modern({ variables }: HomePageProps) {
  return (
    <div className="flex flex-1 bg-gray-100">
      <div className="sticky top-22 hidden h-full bg-gray-100 lg:w-[380px] xl:block">
        <Categories layout="modern" variables={variables.categories} />
      </div>
      <main className="block w-full lg:mt-6 xl:overflow-hidden ltr:xl:pl-0 ltr:xl:pr-5 rtl:xl:pr-0 rtl:xl:pl-5">
        <div className="border border-border-200">
          <Banner layout="modern" variables={variables.types} />
        </div>
        <FilterBar variables={variables.categories} />
        <Element name="grid" className="px-4 xl:px-0">
          <ProductGridHome className="py-6" variables={variables.products} />
        </Element>
      </main>
    </div>
  );
}
