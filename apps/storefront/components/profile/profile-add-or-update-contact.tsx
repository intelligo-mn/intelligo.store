import { useUpdateCustomerMutation } from "apps/storefront/framework/rest/customer/customer.query";
import { OTP } from "apps/storefront/framework/rest/otp/otp";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";
import React from "react";
import { useUI } from "apps/storefront/contexts/ui.context";

type Props = {
  data: {
    customerId: string;
    profileId: string;
    contactNumber: string;
  };
};

const ProfileAddOrUpdateContact: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation("common");
  const { customerId, contactNumber, profileId } = data;
  const { closeModal } = useUI();
  const { mutate: updateProfile } = useUpdateCustomerMutation();

  function onContactUpdate(newPhoneNumber: string) {
    if (!customerId) {
      return false;
    }
    updateProfile(
      {
        id: customerId,
        profile: {
          id: profileId,
          contact: newPhoneNumber,
        },
      },
      {
        onSuccess: () => {
          toast.success(t("profile-update-successful"));
        },
        onError: (_err) => {
          toast.error(t("error-something-wrong"));
        },
      }
    );
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

export default ProfileAddOrUpdateContact;
