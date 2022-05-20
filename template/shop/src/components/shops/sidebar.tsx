import cn from 'classnames';
import { Image } from '@/components/ui/image';
import { useTranslation } from 'next-i18next';
import { formatAddress } from '@/lib/format-address';
import isEmpty from 'lodash/isEmpty';
import ReadMore from '@/components/ui/truncate';
import { useModalAction } from '@/components/ui/modal/modal.context';
import Scrollbar from '@/components/ui/scrollbar';
import { getIcon } from '@/lib/get-icon';
import { productPlaceholder } from '@/lib/placeholders';
import * as socialIcons from '@/components/icons/social';
import type { Shop } from '@/types';

type ShopSidebarProps = {
  shop: Shop;
  className?: string;
  cardClassName?: string;
};

const ShopSidebar: React.FC<ShopSidebarProps> = ({
  shop,
  className,
  cardClassName,
}) => {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();

  function handleMoreInfoModal() {
    return openModal('SHOP_INFO', { shop });
  }
  return (
    <>
      <div
        className={cn(
          'flex items-center lg:hidden w-full bg-light border-b border-gray-300 py-4 px-6 sticky top-[55px] z-10',
          cardClassName
        )}
      >
        <div className="relative w-16 h-16 mx-auto overflow-hidden bg-gray-200 border border-gray-100 rounded-lg ltr:mr-4 rtl:ml-4 shrink-0">
          <Image
            alt={t('logo')}
            src={shop?.logo?.original! ?? productPlaceholder}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="w-full">
          <h3 className="text-base font-semibold text-heading">{shop.name}</h3>

          <button
            className="text-sm font-semibold transition text-accent hover:text-accent-hover"
            onClick={handleMoreInfoModal}
          >
            {t('text-more-info')}
          </button>
        </div>
      </div>

      <aside
        className={cn(
          'bg-light md:rounded h-full w-full lg:w-80 2xl:w-96 hidden lg:block',
          className
        )}
      >
        <div className="max-h-full overflow-hidden">
          <Scrollbar className={cn('w-full', 'scrollbar_height')}>
            <div className="flex flex-col items-center w-full border-b border-gray-200 p-7">
              <div className="relative mx-auto mb-8 overflow-hidden bg-gray-200 border border-gray-100 rounded-lg w-44 h-44">
                <Image
                  alt={t('logo')}
                  src={shop?.logo?.original! ?? productPlaceholder}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-heading">
                {shop.name}
              </h3>

              {shop?.description && (
                <p className="mb-2 text-sm leading-relaxed text-center text-body">
                  <ReadMore character={70}>{shop.description}</ReadMore>
                </p>
              )}

              <div className="flex items-center justify-start mt-3">
                {shop?.settings?.socials?.map((item: any, index: number) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    className={`text-muted focus:outline-none ltr:mr-6 rtl:ml-6 ltr:last:mr-0 rtl:last:ml-0 transition-colors duration-300 hover:${item.hoverClass}`}
                    rel="noreferrer"
                  >
                    {getIcon({
                      iconList: socialIcons,
                      iconName: item.icon,
                      className: 'w-4 h-4',
                    })}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-7">
              <div className="flex flex-col mb-7 last:mb-0">
                <span className="mb-2 text-sm font-semibold text-heading">
                  {t('text-address')}
                </span>
                <span className="text-sm text-body">
                  {!isEmpty(formatAddress(shop?.address))
                    ? formatAddress(shop?.address)
                    : t('common:text-no-address')}
                </span>
              </div>

              <div className="flex flex-col mb-7 last:mb-0">
                <span className="mb-2 text-sm font-semibold text-heading">
                  {t('text-phone')}
                </span>
                <span className="text-sm text-body">
                  {shop?.settings?.contact
                    ? shop?.settings?.contact
                    : t('text-no-contact')}
                </span>
              </div>

              {shop?.settings?.website && (
                <div className="flex flex-col">
                  <span className="mb-2 text-sm font-semibold text-heading">
                    {t('text-website')}
                  </span>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-body">
                      {shop.settings.website}
                    </span>
                    <a
                      href={shop.settings.website}
                      target="_blank"
                      className="text-sm font-semibold text-accent hover:text-accent-hover focus:outline-none focus:text-accent-hover"
                      rel="noreferrer"
                    >
                      {t('text-visit-site')}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </Scrollbar>
        </div>
      </aside>
    </>
  );
};

export default ShopSidebar;
