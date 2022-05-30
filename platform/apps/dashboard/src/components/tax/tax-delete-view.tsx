import ConfirmationCard from "apps/dashboard/src/components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "apps/dashboard/src/components/ui/modal/modal.context";
import { useDeleteTaxMutation } from "apps/dashboard/src/data/tax/use-tax-delete.mutation";

const TaxDeleteView = () => {
  const { mutate: deleteTax, isLoading: loading } = useDeleteTaxMutation();
  const { data } = useModalState();
  const { closeModal } = useModalAction();
  async function handleDelete() {
    deleteTax(data);
    closeModal();
  }
  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
    />
  );
};

export default TaxDeleteView;
