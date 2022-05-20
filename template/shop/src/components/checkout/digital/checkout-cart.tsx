import { verifiedResponseAtom } from '@/store/checkout';
import { useAtom } from 'jotai';
import isEmpty from 'lodash/isEmpty';
import dynamic from 'next/dynamic';
const UnverifiedItemList = dynamic(
  () => import('@/components/checkout/digital/unverified-item-list')
);
const VerifiedItemList = dynamic(
  () => import('@/components/checkout/digital/verified-item-list')
);

export const CheckoutCart = ({
  hideTitle = false,
}: {
  hideTitle?: boolean;
}) => {
  const [verifiedResponse] = useAtom(verifiedResponseAtom);
  if (isEmpty(verifiedResponse)) {
    return <UnverifiedItemList hideTitle={hideTitle} />;
  }
  return <VerifiedItemList />;
};

export default CheckoutCart;
