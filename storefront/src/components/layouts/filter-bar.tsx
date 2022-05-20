import { FilterIcon } from '@/components/icons/filter-icon';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';
import { drawerAtom } from '@/store/drawer-atom';
import GroupsDropdownMenu from './menu/groups-menu';
import classNames from 'classnames';

export default function FilterBar({
  className,
  variables,
}: {
  className?: string;
  variables: any;
}) {
  const { t } = useTranslation('common');
  const [_, setDrawerView] = useAtom(drawerAtom);

  return (
    <div
      className={classNames(
        'sticky top-14 z-10 flex h-14 items-center justify-between border-t border-b border-border-200 bg-light py-3 px-5 md:top-16 md:h-16 lg:top-22 lg:px-7 xl:hidden',
        className
      )}
    >
      <button
        onClick={() =>
          setDrawerView({ display: true, view: 'FILTER_VIEW', data: variables })
        }
        className="flex h-8 items-center rounded border border-border-200 bg-gray-100 bg-opacity-90 py-1 px-3 text-sm font-semibold text-heading transition-colors duration-200 hover:border-accent-hover hover:bg-accent hover:text-light focus:border-accent-hover focus:bg-accent focus:text-light focus:outline-none md:h-10 md:py-1.5 md:px-4 md:text-base"
      >
        <FilterIcon width="18" height="14" className="ltr:mr-2 rtl:ml-2" />
        {t('text-filter')}
      </button>
      <GroupsDropdownMenu />
    </div>
  );
}
