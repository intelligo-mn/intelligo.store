import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteTaxClassMutation } from "@graphql/tax.graphql";
import { getErrorMessage } from "@utils/form-error";

const TaxDeleteView = () => {
  const [deleteTaxById, { loading }] = useDeleteTaxClassMutation({
    //@ts-ignore
    update(cache, { data: { deleteTax } }) {
      cache.modify({
        fields: {
          taxClasses(existingRefs, { readField }) {
            return existingRefs.filter(
              (ref: any) => deleteTax.id !== readField("id", ref)
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
      await deleteTaxById({
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

export default TaxDeleteView;
