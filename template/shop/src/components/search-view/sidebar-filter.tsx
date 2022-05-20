import { CustomDisclosure } from '@/components/ui/disclosure';
import { useTranslation } from 'next-i18next';
import Search from '@/components/ui/search/search';
import { useRouter } from 'next/router';
import Sorting from './sorting';
import PriceFilter from '@/components/search-view/price-filter';
import CategoryFilter from '@/components/search-view/category-filter-view';
import TagFilter from '@/components/search-view/tag-filter-view';
import ManufacturerFilter from '@/components/search-view/manufacturer-filter-view';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import { drawerAtom } from '@/store/drawer-atom';
import ArrowNarrowLeft from '@/components/icons/arrow-narrow-left';
import { useIsRTL } from '@/lib/locals';
import Button from '@/components/ui/button';

const FieldWrapper = ({ children, title }: any) => (
  <div className="border-b border-gray-200 py-7 last:border-0">
    <CustomDisclosure title={title}>{children}</CustomDisclosure>
  </div>
);

function ClearFiltersButton() {
  const { t } = useTranslation('common');
  const router = useRouter();

  function clearFilters() {
    const {
      price,
      category,
      sortedBy,
      orderBy,
      tags,
      manufacturer,
      text,
      ...rest
    } = router.query;
    router.push({
      pathname: router.pathname,
      query: {
        ...rest,
        ...(router.route !== '/[searchType]/search' && { manufacturer }),
      },
    });
  }
  return (
    <button
      className="text-sm font-semibold transition-colors text-body hover:text-red-500 focus:text-red-500 focus:outline-none lg:m-0"
      onClick={clearFilters}
    >
      {t('text-clear-all')}
    </button>
  );
}
const SidebarFilter: React.FC<{
  type?: string;
  showManufacturers?: boolean;
  className?: string;
}> = ({ type, showManufacturers = true, className }) => {
  const router = useRouter();
  const { isRTL } = useIsRTL();
  const { t } = useTranslation('common');
  const [_, closeSidebar] = useAtom(drawerAtom);

  return (
    <div
      className={classNames(
        'flex bg-white w-full h-full lg:h-auto flex-col lg:border border-gray-200 rounded-xl',
        className
      )}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-6 bg-white border-b border-gray-200 lg:static rounded-tl-xl rounded-tr-xl">
        <div className="flex items-center space-x-3 rtl:space-x-reverse lg:space-x-0">
          <button
            className="text-body focus:outline-none lg:hidden"
            onClick={() => closeSidebar({ display: false, view: '' })}
          >
            <ArrowNarrowLeft
              className={classNames('h-7', {
                'rotate-180': isRTL,
              })}
              strokeWidth={1.7}
            />
            <span className="sr-only">{t('text-close')}</span>
          </button>

          <h3 className="text-xl font-semibold lg:text-2xl text-heading">
            {t('text-filter')}
          </h3>
        </div>

        <ClearFiltersButton />
      </div>

      <div className="flex-1 px-5">
        <FieldWrapper title="text-search">
          <Search variant="minimal" label="search" />
        </FieldWrapper>

        {router.route !== '/[searchType]/search' && (
          <FieldWrapper title="text-sort">
            <Sorting />
          </FieldWrapper>
        )}

        <FieldWrapper title="text-categories">
          <CategoryFilter type={type} />
        </FieldWrapper>

        <FieldWrapper title="text-sort-by-price">
          <PriceFilter />
        </FieldWrapper>

        <FieldWrapper title="text-tags">
          <TagFilter />
        </FieldWrapper>

        {showManufacturers && (
          <FieldWrapper title="text-manufacturers">
            <ManufacturerFilter />
          </FieldWrapper>
        )}
      </div>
      <div className="p-5 bg-white sticky bottom-0 z-10 border-t border-gray-200 mt-auto lg:hidden">
        <Button
          className="w-full"
          onClick={() => closeSidebar({ display: false, view: '' })}
        >
          Show Products
        </Button>
      </div>
    </div>
  );
};

export default SidebarFilter;
