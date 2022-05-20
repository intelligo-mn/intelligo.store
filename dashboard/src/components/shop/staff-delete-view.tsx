import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useRemoveStaffMutation } from "@graphql/shops.graphql";
import { getErrorMessage } from "@utils/form-error";

const StaffDeleteView = () => {
  const [removeStaffByID, { loading }] = useRemoveStaffMutation({
    //@ts-ignore
    update(cache, { data: { removeStaff } }) {
      cache.modify({
        fields: {
          staffs(existingRefs, { readField }) {
            return existingRefs?.data?.filter(
              (ref: any) => removeStaff.id !== readField("id", ref)
            );
          },
        },
      });
    },
  });

  const { data: modalData } = useModalState();
  const { closeModal } = useModalAction();
  async function handleDelete() {
    try {
      await removeStaffByID({
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

export default StaffDeleteView;
