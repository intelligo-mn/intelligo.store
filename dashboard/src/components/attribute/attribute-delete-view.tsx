import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState
} from "@components/ui/modal/modal.context";
import useAttribute from "@core/attribute/useAttribute";
import { getErrorMessage } from "@utils/form-error";


const AttributeDeleteView = () => {
  const { loading, removeAttribute } = useAttribute();

  const { data: modalData } = useModalState();
  const { closeModal } = useModalAction();
  async function handleDelete() {
    try {
      await removeAttribute(modalData as string);
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

export default AttributeDeleteView;
