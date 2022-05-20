import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteCouponMutation } from "@graphql/coupons.graphql";
import { getErrorMessage } from "@utils/form-error";

const CouponDeleteView = () => {
  const [deleteCouponMutation, { loading }] = useDeleteCouponMutation({
    //@ts-ignore
    update(cache, { data: { deleteCoupon } }) {
      cache.modify({
        fields: {
          coupons(existingRefs, { readField }) {
            return existingRefs.data.filter(
              (ref: any) => deleteCoupon.id !== readField("id", ref)
            );
          },
        },
      });
    },
  });

  const { data: modalData } = useModalState();
  const { closeModal } = useModalAction();
  function handleDelete() {
    try {
      deleteCouponMutation({
        variables: { id: modalData as string },
      });
      closeModal();
    } catch (error) {
      closeModal();
      getErrorMessage(error);
    }
  }
  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
    />
  );
};

export default CouponDeleteView;
