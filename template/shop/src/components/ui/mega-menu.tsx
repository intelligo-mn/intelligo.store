import React from 'react';
import Link from '@/components/ui/link';
import { useTranslation } from 'next-i18next';

interface MenuItem {
  id: number | string;
  path: string;
  label: string;
  columnItemItems?: MenuItem[];
}
type MegaMenuProps = {
  columns: {
    id: number | string;
    columnItems: MenuItem[];
  }[];
};

const MegaMenu: React.FC<MegaMenuProps> = ({ columns }) => {
  const { t } = useTranslation('menu');
  return (
    <div className="megaMenu shadow-header bg-white absolute border border-gray-200 ltr:left-0 rtl:right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible shadow-md">
      <div className="grid grid-cols-5">
        {columns?.map((column) => (
          <ul
            className="even:bg-gray-50 pb-7 2xl:pb-8 pt-6 2xl:pt-7"
            key={column.id}
          >
            {column?.columnItems?.map((columnItem) => (
              <React.Fragment key={columnItem.id}>
                <li className="mb-1.5">
                  <Link
                    href={columnItem.path}
                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 transition-colors hover:text-accent"
                  >
                    {t(columnItem.label)}
                  </Link>
                </li>
                {columnItem?.columnItemItems?.map((item: any) => (
                  <li
                    key={item.id}
                    className={
                      columnItem?.columnItemItems?.length === item.id
                        ? 'border-b border-gray-200 pb-3.5 mb-3'
                        : ''
                    }
                  >
                    <Link
                      href={item.path}
                      className="transition-colors text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-accent"
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
