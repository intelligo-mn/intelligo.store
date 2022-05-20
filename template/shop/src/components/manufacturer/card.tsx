import cn from 'classnames';
import { avatarPlaceholder } from '@/lib/placeholders';
import { useTranslation } from 'next-i18next';
import { Image } from '@/components/ui/image';
import Link from '@/components/ui/link';
import { ROUTES } from '@/lib/routes';
import { formatAddress } from '@/lib/format-address';
import { isEmpty } from 'lodash';
import React from 'react';
import { MapPin } from '@/components/icons/map-pin';
import { getIcon } from '@/lib/get-icon';
import * as socialIcons from '@/components/icons/social';

interface ManufacturerProps {
  item: any;
  className?: string;
}

const ManufacturerCard: React.FC<ManufacturerProps> = ({ item, className }) => {
  const { t } = useTranslation();

  return (
    <Link
      href={`${ROUTES.MANUFACTURERS}/${item?.slug}`}
      className={cn(
        'flex items-center p-5 border border-gray-200 bg-white rounded cursor-pointer shadow-md relative',
        className
      )}
      title={item?.name}
    >
      <span
        className={cn(
          'w-16 h-16 relative flex shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden'
        )}
      >
        <Image
          src={item?.image?.original! ?? avatarPlaceholder}
          alt={item?.name!}
          layout="fill"
          objectFit="cover"
        />
      </span>
      <div className="flex flex-col ltr:ml-4 rtl:mr-4 overflow-hidden">
        <span className="text-lg font-semibold text-heading mb-2 transition-colors hover:text-orange-500 truncate">
          {item?.name}
        </span>
        {!isEmpty(item?.socials) ? (
          <div className="flex items-center space-x-3 rtl:space-x-reverse mt-1.5 ltr:ml-1 rtl:mr-1">
            {item?.socials?.map((item: any, index: number) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className={`text-body focus:outline-none transition-colors duration-300 hover:text-accent cursor-pointer`}
                rel="noreferrer"
              >
                {getIcon({
                  iconList: socialIcons,
                  iconName: item.icon,
                  className: 'w-[16px] h-[14px]',
                })}
              </a>
            ))}
          </div>
        ) : (
          // <span className="text-xs text-body flex">
          //   {t('common:text-no-address')}
          // </span>
          <div className="flex items-center space-x-3 rtl:space-x-reverse mt-1.5">
            <a
              href="/"
              target="_blank"
              className={`text-body focus:outline-none transition-colors duration-300 hover:text-accent cursor-pointer`}
              rel="noreferrer"
            >
              {getIcon({
                iconList: socialIcons,
                iconName: 'FacebookIcon',
                className: 'w-[16px] h-[14px]',
              })}
              {/* <FacebookIcon className="w-[16px] h-[14px]" /> */}
            </a>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ManufacturerCard;
