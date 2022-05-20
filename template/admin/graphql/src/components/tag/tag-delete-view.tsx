import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteTagMutation } from "@graphql/tags.graphql";
import { getErrorMessage } from "@utils/form-error";

const TagDeleteView = () => {
  const [deleteTagById, { loading }] = useDeleteTagMutation({
    //@ts-ignore
    update(cache, { data: { deleteTag } }) {
      cache.modify({
        fields: {
          tags(existingRefs, { readField }) {
            return existingRefs.data.filter(
              (ref: any) => deleteTag.id !== readField("id", ref)
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
      deleteTagById({
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

export default TagDeleteView;
