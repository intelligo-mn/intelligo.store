import { Image } from '@/components/ui/image';
import { MapPin } from '@/components/icons/map-pin';
import { useTranslation } from 'next-i18next';
import { formatAddress } from '@/lib/format-address';
import { ROUTES } from '@/lib/routes';
import Link from '@/components/ui/link';
import isEmpty from 'lodash/isEmpty';
import { productPlaceholder } from '@/lib/placeholders';

type ShopCardProps = {
  shop: any;
};

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  const { t } = useTranslation();

  const isNew = false;

  return (
    <Link href={`${ROUTES.SHOPS}/${shop.slug}`}>
      <div className="flex items-center p-5 border border-gray-200 rounded cursor-pointer relative">
        {isNew && (
          <span className="text-xs text-light px-2 py-1 rounded bg-blue-500 absolute top-2 ltr:right-2 rtl:left-2">
            {t('common:text-new')}
          </span>
        )}
        <div className="w-16 h-16 relative flex shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden">
          <Image
            alt={t('common:text-logo')}
            src={shop?.logo?.thumbnail ?? productPlaceholder}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col ltr:ml-4 rtl:mr-4">
          <span className="text-lg font-semibold text-heading mb-2">
            {shop?.name}
          </span>
          <span className="text-xs text-body flex">
            <MapPin className="w-3.5 h-3.5 ltr:mr-1 rtl:ml-1 text-muted shrink-0" />
            {!isEmpty(formatAddress(shop?.address))
              ? formatAddress(shop?.address)
              : t('common:text-no-address')}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
