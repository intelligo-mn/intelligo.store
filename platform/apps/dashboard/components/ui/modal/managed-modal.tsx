import Modal from "apps/dashboard/components/ui/modal/modal";
import dynamic from "next/dynamic";
import { useModalAction, useModalState } from "./modal.context";
const TagDeleteView = dynamic(() => import("apps/dashboard/components/tag/tag-delete-view"));
const TaxDeleteView = dynamic(() => import("apps/dashboard/components/tax/tax-delete-view"));
const BanCustomerView = dynamic(() => import("apps/dashboard/components/user/user-ban-view"));
const UserWalletPointsAddView = dynamic(
  () => import("apps/dashboard/components/user/user-wallet-points-add-view")
);
const ShippingDeleteView = dynamic(
  () => import("apps/dashboard/components/shipping/shipping-delete-view")
);
const CategoryDeleteView = dynamic(
  () => import("apps/dashboard/components/category/category-delete-view")
);
const CouponDeleteView = dynamic(
  () => import("apps/dashboard/components/coupon/coupon-delete-view")
);

const ProductDeleteView = dynamic(
  () => import("apps/dashboard/components/product/product-delete-view")
);
const TypeDeleteView = dynamic(
  () => import("apps/dashboard/components/brand/brand-delete-view")
);
const AttributeDeleteView = dynamic(
  () => import("apps/dashboard/components/attribute/attribute-delete-view")
);

const ApproveShopView = dynamic(
  () => import("apps/dashboard/components/shop/approve-shop-view")
);
const DisApproveShopView = dynamic(
  () => import("apps/dashboard/components/shop/disapprove-shop-view")
);
const RemoveStaffView = dynamic(
  () => import("apps/dashboard/components/shop/staff-delete-view")
);

const ExportImportView = dynamic(
  () => import("apps/dashboard/components/product/import-export-modal")
);

const AttributeExportImport = dynamic(
  () => import("apps/dashboard/components/attribute/attribute-import-export")
);
const ManagedModal = () => {
  const { isOpen, view } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === "DELETE_PRODUCT" && <ProductDeleteView />}
      {view === "DELETE_TYPE" && <TypeDeleteView />}
      {view === "DELETE_ATTRIBUTE" && <AttributeDeleteView />}
      {view === "DELETE_CATEGORY" && <CategoryDeleteView />}
      {view === "DELETE_COUPON" && <CouponDeleteView />}
      {view === "DELETE_TAX" && <TaxDeleteView />}
      {view === "DELETE_SHIPPING" && <ShippingDeleteView />}
      {view === "DELETE_TAG" && <TagDeleteView />}
      {view === "BAN_CUSTOMER" && <BanCustomerView />}
      {view === "SHOP_APPROVE_VIEW" && <ApproveShopView />}
      {view === "SHOP_DISAPPROVE_VIEW" && <DisApproveShopView />}
      {view === "DELETE_STAFF" && <RemoveStaffView />}
      {view === "ADD_WALLET_POINTS" && <UserWalletPointsAddView />}
      {view === "EXPORT_IMPORT_PRODUCT" && <ExportImportView />}
      {view === "EXPORT_IMPORT_ATTRIBUTE" && <AttributeExportImport />}
    </Modal>
  );
};

export default ManagedModal;
