import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import AddressForm from "@components/address/address-form";
import { AddressType } from "@ts-types/generated";
import { useUpdateUserMutation } from "@data/user/use-user-update.mutation";

type FormValues = {
  __typename?: string;
  title: string;
  type: AddressType;
  address: {
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
  };
};

const CreateOrUpdateAddressForm = () => {
  const {
    data: { customerId, address },
  } = useModalState();
  const { closeModal } = useModalAction();
  const { mutate: updateProfile } = useUpdateUserMutation();

  function onSubmit(values: FormValues) {
    const { __typename, ...rest } = values;
    updateProfile({
      variables: {
        id: customerId,
        input: {
          address: [
            {
              ...(address?.id ? { id: address.id } : {}),
              ...rest,
            },
          ],
        },
      },
    });
    return closeModal();
  }
  return <AddressForm onSubmit={onSubmit} />;
};

export default CreateOrUpdateAddressForm;
