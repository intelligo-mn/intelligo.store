import ConfirmationCard from "@components/common/confirmation-card";
import { getErrorMessage } from "@utils/form-error";
import {
  useBanUserMutation,
  useActiveUserMutation,
} from "@graphql/auth.graphql";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";

const CustomerBanView = () => {
  const [banUser, { loading }] = useBanUserMutation();
  const [activeUser, { loading: activeLoading }] = useActiveUserMutation();
  const { data } = useModalState();
  const { closeModal } = useModalAction();
  async function handleDelete() {
    try {
      if (data?.type === "ban") {
        await banUser({
          variables: { id: data?.id },
        });
      } else {
        await activeUser({
          variables: { id: data?.id },
        });
      }
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
      deleteBtnText={data?.type === "ban" ? "Block" : "Unblock"}
      title={data?.type === "ban" ? "Block Customer" : "Unblock Customer"}
      description="Are you sure you want to block this customer?"
      deleteBtnLoading={loading || activeLoading}
    />
  );
};

export default CustomerBanView;
