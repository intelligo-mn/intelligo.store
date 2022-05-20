import { AddressType } from "@common/generated-types";
import AddressForm from "@components/address/address-form";
import {
  useModalAction,
  useModalState
} from "@components/ui/modal/modal.context";
import useCustomer from "src/core/user/useCustomer";

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
  const {updateCustomer} = useCustomer();

  function onSubmit(values: FormValues) {
    const { __typename, ...rest } = values;
    updateCustomer({id: customerId});
    return closeModal();
  }
  return <AddressForm onSubmit={onSubmit} />;
};

export default CreateOrUpdateAddressForm;
