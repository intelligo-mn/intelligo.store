import usePrice from '@/lib/use-price';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
interface Props {
  item: any;
  notAvailable?: boolean;
}

const CartItem = ({ item, notAvailable }: Props) => {
  const { t } = useTranslation('common');
  const { price } = usePrice({
    amount: item.itemTotal,
  });
  return (
    <div
      className={cn(
        'flex w-full space-x-3 rtl:space-x-reverse py-3 first:pt-0 last:pb-0'
      )}
      key={item.id}
    >
      <div className="w-[42px] h-[42px] flex-shrink-0 bg-gray-100">
        <Image
          src={item?.image ?? productPlaceholder}
          alt={item.name}
          layout="responsive"
          width={42}
          height={42}
          className="product-image rounded-md"
        />
      </div>
      <div className="flex w-full justify-between">
        <p className="flex flex-col text-sm">
          <span className={cn(notAvailable ? 'text-red-500' : 'text-gray-800')}>
            {item.name}
          </span>
          <span
            className={cn(
              'text-xs font-semibold mt-1.5',
              notAvailable ? 'text-red-500' : 'text-gray-500'
            )}
          >
            X {item.quantity}
          </span>
          {/* <span>{item.name}</span> | <span>{item.unit}</span> */}
        </p>
        <span
          className={cn(
            'text-sm font-semibold',
            notAvailable ? 'text-red-500' : 'text-gray-800'
          )}
        >
          {!notAvailable ? price : t('text-unavailable')}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
