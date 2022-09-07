import { useAtom } from "jotai";
import isEmpty from "lodash/isEmpty";
import dynamic from "next/dynamic";
import { verifiedResponseAtom } from "apps/storefront/store/checkout";

const UnverifiedItemList = dynamic(
  () => import("apps/storefront/components/checkout/item/unverified-item-list")
);
const VerifiedItemList = dynamic(
  () => import("apps/storefront/components/checkout/item/verified-item-list")
);

export const RightSideView = () => {
  const [verifiedResponse] = useAtom(verifiedResponseAtom);
  if (isEmpty(verifiedResponse)) {
    return <UnverifiedItemList />;
  }
  return <VerifiedItemList className="border border-gray-300 rounded-md" />;
};

export default RightSideView;
