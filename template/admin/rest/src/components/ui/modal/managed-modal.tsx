import Modal from "@components/ui/modal/modal";
import dynamic from "next/dynamic";
import { MODAL_VIEWS, useModalAction, useModalState } from "./modal.context";
const TagDeleteView = dynamic(() => import("@components/tag/tag-delete-view"));
const TaxDeleteView = dynamic(() => import("@components/tax/tax-delete-view"));
const BanCustomerView = dynamic(() => import("@components/user/user-ban-view"));
const UserWalletPointsAddView = dynamic(
  () => import("@components/user/user-wallet-points-add-view")
);
const MakeAdminView = dynamic(() => import("@components/user/make-admin-view"));
const ShippingDeleteView = dynamic(
  () => import("@components/shipping/shipping-delete-view")
);
const CategoryDeleteView = dynamic(
  () => import("@components/category/category-delete-view")
);
const CouponDeleteView = dynamic(
  () => import("@components/coupon/coupon-delete-view")
);

const ProductDeleteView = dynamic(
  () => import("@components/product/product-delete-view")
);
const TypeDeleteView = dynamic(
  () => import("@components/group/group-delete-view")
);
const AttributeDeleteView = dynamic(
  () => import("@components/attribute/attribute-delete-view")
);

const ApproveShopView = dynamic(
  () => import("@components/shop/approve-shop-view")
);
const DisApproveShopView = dynamic(
  () => import("@components/shop/disapprove-shop-view")
);
const RemoveStaffView = dynamic(
  () => import("@components/shop/staff-delete-view")
);

const ExportImportView = dynamic(
  () => import("@components/product/import-export-modal")
);

const AttributeExportImport = dynamic(
  () => import("@components/attribute/attribute-import-export")
);
const UpdateRefundConfirmationView = dynamic(
  () => import("@components/refund/refund-confirmation-view")
);
const RefundImageModal = dynamic(
  () => import("@components/refund/refund-image-modal")
);

const CreateOrUpdateAddressForm = dynamic(
  () => import("@components/address/create-or-update")
);
const AddOrUpdateCheckoutContact = dynamic(
  () => import("@components/checkout/contact/add-or-update")
);
const SelectCustomer = dynamic(
  () => import("@components/checkout/customer/select-customer")
);

const AuthorDeleteView = dynamic(
  () => import("@components/author/author-delete-view")
);
const ManufacturerDeleteView = dynamic(
  () => import("@components/manufacturer/manufacturer-delete-view")
);

const ProductVariation = dynamic(
  () => import("@components/product/variation/variation")
);

function renderModal(view: MODAL_VIEWS | undefined, data: any) {
  switch (view) {
    case "DELETE_PRODUCT":
      return <ProductDeleteView />;
    case "DELETE_TYPE":
      return <TypeDeleteView />;
    case "DELETE_ATTRIBUTE":
      return <AttributeDeleteView />;
    case "DELETE_CATEGORY":
      return <CategoryDeleteView />;
    // case "DELETE_ORDER":
    //   return <OrderDeleteView />;
    case "DELETE_COUPON":
      return <CouponDeleteView />;
    case "DELETE_TAX":
      return <TaxDeleteView />;
    case "DELETE_SHIPPING":
      return <ShippingDeleteView />;
    // case "DELETE_ORDER_STATUS":
    //   return <OrderStatusDeleteView />;
    case "DELETE_TAG":
      return <TagDeleteView />;
    case "DELETE_MANUFACTURER":
      return <ManufacturerDeleteView />;
    case "DELETE_AUTHOR":
      return <AuthorDeleteView />;
    case "BAN_CUSTOMER":
      return <BanCustomerView />;
    case "SHOP_APPROVE_VIEW":
      return <ApproveShopView />;
    case "SHOP_DISAPPROVE_VIEW":
      return <DisApproveShopView />;
    case "DELETE_STAFF":
      return <RemoveStaffView />;
    case "UPDATE_REFUND":
      return <UpdateRefundConfirmationView />;
    case "ADD_OR_UPDATE_ADDRESS":
      return <CreateOrUpdateAddressForm />;
    case "ADD_OR_UPDATE_CHECKOUT_CONTACT":
      return <AddOrUpdateCheckoutContact />;
    case "REFUND_IMAGE_POPOVER":
      return <RefundImageModal />;
    case "MAKE_ADMIN":
      return <MakeAdminView />;
    case "EXPORT_IMPORT_PRODUCT":
      return <ExportImportView />;
    case "EXPORT_IMPORT_ATTRIBUTE":
      return <AttributeExportImport />;
    case "ADD_WALLET_POINTS":
      return <UserWalletPointsAddView />;
    case "SELECT_PRODUCT_VARIATION":
      return <ProductVariation productSlug={data} />;
    case "SELECT_CUSTOMER":
      return <SelectCustomer />;
    default:
      return null;
  }
}

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {renderModal(view, data)}
    </Modal>
  );
};

export default ManagedModal;
