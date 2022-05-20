import ConfirmationCard from "@components/common/confirmation-card";
import { getErrorMessage } from "@utils/form-error";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useMakeOrRevokeAdminMutation } from "@graphql/user.graphql";

const CustomerBanView = () => {
  const [makeOrRevokeAdmin, { loading }] = useMakeOrRevokeAdminMutation();
  const { data } = useModalState();

  const { closeModal } = useModalAction();
  async function handleMakeAdmin() {
    try {
      await makeOrRevokeAdmin({
        variables: { input: { user_id: data } },
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
      onDelete={handleMakeAdmin}
      deleteBtnText="text-yes"
      title="text-make-admin"
      description="text-description-make-admin"
      deleteBtnLoading={loading}
    />
  );
};

export default CustomerBanView;
