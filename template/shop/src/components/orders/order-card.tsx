import usePrice from '@/lib/use-price';
import dayjs from 'dayjs';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';

type OrderCardProps = {
  order: any;
  isActive: boolean;
  onClick?: (e: any) => void;
};

const OrderCard: React.FC<OrderCardProps> = ({ onClick, order, isActive }) => {
  const { t } = useTranslation('common');
  const { id, status, created_at, delivery_time } = order;
  const { price: amount } = usePrice({
    amount: order?.amount,
  });
  const { price: total } = usePrice({
    amount: order?.total,
  });

  return (
    <div
      onClick={onClick}
      role="button"
      className={cn(
        'bg-gray-100 rounded overflow-hidden w-full flex shrink-0 flex-col mb-4 border-2 border-transparent cursor-pointer last:mb-0',
        isActive === true && '!border-accent'
      )}
    >
      <div className="flex justify-between items-center border-b border-border-200 py-3 px-5 md:px-3 lg:px-5 ">
        <span className="flex font-bold text-sm lg:text-base text-heading ltr:mr-4 rtl:ml-4 shrink-0">
          {t('text-order')}
          <span className="font-normal">#{id}</span>
        </span>
        <span
          className="text-sm text-blue-500 bg-blue-100 px-3 py-2 rounded whitespace-nowrap truncate max-w-full"
          title={status.name}
        >
          {status.name}
        </span>
      </div>

      <div className="flex flex-col p-5 md:p-3 lg:px-4 lg:py-5">
        <p className="text-sm text-heading w-full flex justify-between items-center mb-4 last:mb-0">
          <span className="w-24 overflow-hidden shrink-0">
            {t('text-order-date')}
          </span>
          <span className="ltr:mr-auto rtl:ml-auto">:</span>
          <span className="ltr:ml-1 rtl:mr-1">
            {dayjs(created_at).format('MMMM D, YYYY')}
          </span>
        </p>
        <p className="text-sm text-heading w-full flex justify-between items-center mb-4 last:mb-0">
          <span className="w-24 overflow-hidden shrink-0">
            {t('text-deliver-time')}
          </span>
          <span className="ltr:mr-auto rtl:ml-auto">:</span>
          <span className="ltr:ml-1 rtl:mr-1 truncate">{delivery_time}</span>
        </p>
        <p className="text-sm font-bold text-heading w-full flex justify-between items-center mb-4 last:mb-0">
          <span className="w-24 overflow-hidden shrink-0">
            {t('text-amount')}
          </span>
          <span className="ltr:mr-auto rtl:ml-auto">:</span>
          <span className="ltr:ml-1 rtl:mr-1">{amount}</span>
        </p>
        <p className="text-sm font-bold text-heading w-full flex justify-between items-center mb-4 last:mb-0">
          <span className="w-24 overflow-hidden flex-shrink-0">
            {t('text-total-price')}
          </span>
          <span className="ltr:mr-auto rtl:ml-auto">:</span>
          <span className="ltr:ml-1 rtl:mr-1">{total}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
