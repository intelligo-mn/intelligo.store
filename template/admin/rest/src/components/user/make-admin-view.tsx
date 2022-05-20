import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useMakeOrRevokeAdminMutation } from "@data/user/use-make-revoke-admin-mutation";

const CustomerBanView = () => {
  const { mutate: makeOrRevokeAdmin, isLoading: loading } =
    useMakeOrRevokeAdminMutation();
  const { data } = useModalState();

  const { closeModal } = useModalAction();
  async function handleMakeAdmin() {
    makeOrRevokeAdmin({ input: { user_id: data } });
    closeModal();
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
