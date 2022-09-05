import ConfirmationCard from '@components/ui/cards/confirmation';
import { useDeleteAddressMutation } from '@framework/address/address.query';
import { Address } from "@framework/types";
import React from "react";
import { useUI } from "@contexts/ui.context";

type Props = {
  data: Address
}

const AddressDeleteView: React.FC<Props> = ({ data }) => {
  const { mutate: deleteAddressById, isLoading } = useDeleteAddressMutation();
  const { closeModal } = useUI();

  function handleDelete() {
    deleteAddressById({ id: data?.address?.id });
    closeModal();
  }

  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={isLoading}
    />
  );
};

export default AddressDeleteView;
