import NotFound from '@/components/ui/not-found';
import usePrice from '@/lib/use-price';
import { formatAddress } from '@/lib/format-address';
import OrderStatuses from '@/components/orders/statuses';
import { useTranslation } from 'next-i18next';
import Link from '@/components/ui/link';
import { ROUTES } from '@/lib/routes';
import { Eye } from '@/components/icons/eye-icon';
import { OrderItems } from './order-items';
import isEmpty from 'lodash/isEmpty';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { SadFaceIcon } from '@/components/icons/sad-face';
import Badge from '@/components/ui/badge';
import { Order } from '@/framework/types';

interface Props {
  order: Order;
}
const RenderStatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const { t } = useTranslation('common');

  switch (status.toLowerCase()) {
    case 'approved':
      return (
        <Badge
          text={`${t('text-refund')} ${t('text-approved')}`}
          color="bg-accent"
          className="ltr:mr-4 rtl:ml-4"
        />
      );

    case 'rejected':
      return (
        <Badge
          text={`${t('text-refund')} ${t('text-rejected')}`}
          color="bg-red-500"
          className="ltr:mr-4 rtl:ml-4"
        />
      );
    case 'processing':
      return (
        <Badge
          text={`${t('text-refund')} ${t('text-processing')}`}
          color="bg-yellow-500"
          className="ltr:mr-4 rtl:ml-4"
        />
      );
    // case 'pending':
    default:
      return (
        <Badge
          text={`${t('text-refund')} ${t('text-pending')}`}
          color="bg-purple-500"
          className="ltr:mr-4 rtl:ml-4"
        />
      );
  }
};
function RefundView({ status, orderId }: { status: string; orderId: string }) {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();

  return (
    <>
      {status ? (
        <RenderStatusBadge status={status} />
      ) : (
        <button
          className="flex items-center text-sm font-semibold text-body transition-colors hover:text-accent disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:text-gray-400 ltr:mr-4 rtl:ml-4"
          onClick={() => openModal('REFUND_REQUEST', orderId)}
          disabled={Boolean(status)}
        >
          <SadFaceIcon width={18} className="ltr:mr-2 rtl:ml-2" />
          {t('text-ask-refund')}
        </button>
      )}
    </>
  );
}

const OrderDetails = ({ order }: Props) => {
  const { t } = useTranslation('common');
  const {
    id,
    products,
    status,
    shipping_address,
    billing_address,
    tracking_number,
    refund,
  } = order ?? {};
  const { price: amount } = usePrice({
    amount: order?.amount,
  });
  const { price: discount } = usePrice({
    amount: order?.discount,
  });
  const { price: total } = usePrice({
    amount: order?.total,
  });
  const { price: delivery_fee } = usePrice({
    amount: order?.delivery_fee,
  });
  const { price: sales_tax } = usePrice({
    amount: order?.sales_tax,
  });

  return (
    <div className="flex w-full flex-col border border-border-200 bg-white lg:w-2/3">
      {!isEmpty(order) ? (
        <>
          <div className="flex flex-col items-center border-b border-border-200 p-5 md:flex-row md:justify-between">
            <h2 className="mb-2 flex text-sm font-semibold text-heading md:text-lg">
              {t('text-order-details')} <span className="px-2">-</span>{' '}
              {tracking_number}
            </h2>
            <div className="flex items-center">
              <RefundView status={refund?.status} orderId={id} />

              <Link
                href={`${ROUTES.ORDERS}/${tracking_number}`}
                className="flex items-center text-sm font-semibold text-accent no-underline transition duration-200 hover:text-accent-hover focus:text-accent-hover"
              >
                <Eye width={20} className="ltr:mr-2 rtl:ml-2" />
                {t('text-sub-orders')}
              </Link>
            </div>
          </div>

          <div className="flex flex-col border-b border-border-200 sm:flex-row">
            <div className="flex w-full flex-col border-b border-border-200 px-5 py-4 sm:border-b-0 ltr:sm:border-r rtl:sm:border-l md:w-3/5">
              <div className="mb-4">
                <span className="mb-2 block text-sm font-bold text-heading">
                  {t('text-shipping-address')}
                </span>

                <span className="text-sm text-body">
                  {formatAddress(shipping_address)}
                </span>
              </div>

              <div>
                <span className="mb-2 block text-sm font-bold text-heading">
                  {t('text-billing-address')}
                </span>

                <span className="text-sm text-body">
                  {formatAddress(billing_address)}
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col px-5 py-4 md:w-2/5">
              <div className="mb-3 flex justify-between">
                <span className="text-sm text-body">{t('text-sub-total')}</span>
                <span className="text-sm text-heading">{amount}</span>
              </div>

              <div className="mb-3 flex justify-between">
                <span className="text-sm text-body">{t('text-discount')}</span>
                <span className="text-sm text-heading">{discount}</span>
              </div>

              <div className="mb-3 flex justify-between">
                <span className="text-sm text-body">
                  {t('text-delivery-fee')}
                </span>
                <span className="text-sm text-heading">{delivery_fee}</span>
              </div>
              <div className="mb-3 flex justify-between">
                <span className="text-sm text-body">{t('text-tax')}</span>
                <span className="text-sm text-heading">{sales_tax}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm font-bold text-heading">
                  {t('text-total')}
                </span>
                <span className="text-sm font-bold text-heading">{total}</span>
              </div>
            </div>
          </div>

          {/* Order Table */}
          <div>
            <div className="flex w-full items-center justify-center px-6">
              <OrderStatuses status={status?.serial} />
            </div>
            <OrderItems products={products} />
          </div>
        </>
      ) : (
        <div className="mx-auto max-w-lg">
          <NotFound text="text-no-order-found" />
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
