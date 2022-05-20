import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteProductMutation } from "@graphql/products.graphql";
import { getErrorMessage } from "@utils/form-error";

const ProductDeleteView = () => {
  const [deleteProductById, { loading }] = useDeleteProductMutation({
    //@ts-ignore
    update(cache, { data: { deleteProduct } }) {
      cache.modify({
        fields: {
          products(existingProductRefs, { readField }) {
            return existingProductRefs.data.filter(
              (productRef: any) =>
                deleteProduct.id !== readField("id", productRef)
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
      await deleteProductById({
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

export default ProductDeleteView;
