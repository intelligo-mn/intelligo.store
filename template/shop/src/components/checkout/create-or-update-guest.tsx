import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { AddressForm } from '@/components/address/address-form';
import { AddressType } from '@/framework/utils/constants';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';

//FIXME: should be in types file
type FormValues = {
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

const CreateOrUpdateGuestAddressForm = () => {
  const { t } = useTranslation('common');
  const {
    data: { atom, address, type },
  } = useModalState();
  const { closeModal } = useModalAction();
  const [selectedAddress, setAddress] = useAtom(atom);

  function onSubmit(values: FormValues) {
    const formattedInput = {
      title: values.title,
      type: values.type,
      address: values.address,
    };
    setAddress(formattedInput);
    closeModal();
  }

  return (
    <div className="min-h-screen bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl">
      <h1 className="mb-4 text-center text-lg font-semibold text-heading sm:mb-6">
        {t('text-add-new')} {t('text-address')}
      </h1>
      <AddressForm
        onSubmit={onSubmit}
        defaultValues={{
          title: address?.title ?? '',
          type: address?.type ?? type,
          address: {
            ...address?.address,
          },
        }}
      />
    </div>
  );
};

export default CreateOrUpdateGuestAddressForm;
