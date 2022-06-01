import { OTP } from "@framework/otp/otp";
import { customerContactAtom } from "@store/checkout";
import { useAtom } from "jotai";
import { useTranslation } from "next-i18next";
import { useUI } from "@contexts/ui.context";
import {useUpdateCustomerMutation} from "@framework/customer/customer.query";
import React from "react";

type Props = {
  data: {
    customerId: string;
    profileId: string;
    contactNumber: string;
  };
}

const AddOrUpdateCheckoutContact: React.FC<Props> = ({data}: any) => {
  const { closeModal } = useUI();
  const { customerId, profileId } = data;
  const { t } = useTranslation('common');
  const [contactNumber, setContactNumber] = useAtom(customerContactAtom);
  const { mutate: updateProfile } = useUpdateCustomerMutation();

  function onContactUpdate(newPhoneNumber: string) {
    if (!customerId){
      return null;
    }

    updateProfile({
      id: customerId,
      profile: {
        id: profileId,
        contact: newPhoneNumber,
      },
    });

    setContactNumber(newPhoneNumber);
    closeModal();
  }
  return (
    <div className="p-6 sm:p-8 bg-white rounded-lg md:rounded-xl flex flex-col justify-center md:min-h-0">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-5 text-center">
        {contactNumber ? t("text-update") : t("text-add-new")}{" "}
        {t("text-contact-number")}
      </h3>
      <OTP defaultValue={contactNumber} onVerify={onContactUpdate} />
    </div>
  );
};

export default AddOrUpdateCheckoutContact;
