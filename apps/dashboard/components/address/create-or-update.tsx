import { useUpdateCustomerMutation } from "@graphql/auth.graphql";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import AddressForm from "@components/address/address-form";
import { AddressType } from "__generated__/__types__";

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
  const [updateProfile] = useUpdateCustomerMutation();

  function onSubmit(values: FormValues) {
    const { __typename, ...rest } = values;
    updateProfile({
      variables: {
        input: {
          id: customerId,
          address: {
            upsert: [
              {
                ...(address?.id ? { id: address.id } : {}),
                ...rest,
              },
            ],
          },
        },
      },
    });
    return closeModal();
  }
  return <AddressForm onSubmit={onSubmit} />;
};

export default CreateOrUpdateAddressForm;
