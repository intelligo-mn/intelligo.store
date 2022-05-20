import ConfirmationCard from "@components/common/confirmation-card";
import { CheckMarkCircle } from "@components/icons/checkmark-circle";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { getErrorMessage } from "@utils/form-error";
import { useDisApproveShopMutation } from "@graphql/shops.graphql";

const ProductDeleteView = () => {
  const [disApproveShopById, { loading }] = useDisApproveShopMutation({
    onCompleted: () => {
      closeModal();
    },
    onError: (error) => {
      closeModal();
      getErrorMessage(error);
    },
  });

  const { data: modalData } = useModalState();
  const { closeModal } = useModalAction();
  async function handleDelete() {
    disApproveShopById({
      variables: { id: modalData as string },
    });
  }
  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
      deleteBtnText="text-shop-approve-button"
      icon={<CheckMarkCircle className="mt-4 w-10 h-10 m-auto text-accent" />}
      deleteBtnClassName="!bg-accent focus:outline-none hover:!bg-accent-hover focus:!bg-accent-hover"
      cancelBtnClassName="!bg-red-600 focus:outline-none hover:!bg-red-700 focus:!bg-red-700"
      title="text-shop-approve-description"
      description=""
    />
  );
};

export default ProductDeleteView;
