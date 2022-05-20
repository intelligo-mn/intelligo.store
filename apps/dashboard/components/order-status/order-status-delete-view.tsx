import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteOrderStatusMutation } from "@graphql/order_status.graphql";
import { getErrorMessage } from "@utils/form-error";

const OrderStatusDeleteView = () => {
  const [deleteOrderStatusMutation, { loading }] = useDeleteOrderStatusMutation(
    {
      //@ts-ignore
      update(cache, { data: { deleteOrderStatus } }) {
        cache.modify({
          fields: {
            order_statuses(existingRefs, { readField }) {
              return existingRefs.data.filter(
                (ref: any) => deleteOrderStatus.id !== readField("id", ref)
              );
            },
          },
        });
      },
    }
  );

  const { data: modalData } = useModalState();
  const { closeModal } = useModalAction();
  async function handleDelete() {
    try {
      await deleteOrderStatusMutation({
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
      deleteBtnLoading={loading}
      onCancel={closeModal}
      onDelete={handleDelete}
    />
  );
};

export default OrderStatusDeleteView;
