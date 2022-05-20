import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteManufacturerMutation } from "@graphql/manufacturers.graphql";
import { getErrorMessage } from "@utils/form-error";

const ManufacturerDeleteView = () => {
  const [deleteManufacturerMutation, { loading }] =
    useDeleteManufacturerMutation({
      //@ts-ignore
      update(cache, { data: { deleteManufacturer } }) {
        cache.modify({
          fields: {
            manufacturers(existingRefs, { readField }) {
              return existingRefs.data.filter(
                (ref: any) => deleteManufacturer.id !== readField("id", ref)
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
      deleteManufacturerMutation({
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

export default ManufacturerDeleteView;
