import Button from "@components/ui/button";
import { useModalAction } from "@components/ui/modal/modal.context";
import { customerContactAtom } from "@contexts/checkout";
import { useAtom } from "jotai";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const AddOrUpdateCheckoutContact = () => {
  const { closeModal } = useModalAction();
  const { t } = useTranslation("common");
  const [phone, setPhone] = useState("");
  const [contactNumber, setContactNumber] = useAtom(customerContactAtom);

  function onContactUpdate() {
    if (!phone) return;
    setContactNumber(phone);
    closeModal();
  }
  return (
    <div className="p-5 sm:p-8 bg-light md:rounded-xl min-h-screen flex flex-col justify-center md:min-h-0">
      <h1 className="text-heading font-semibold text-sm text-center mb-5 sm:mb-6">
        {contactNumber ? t("text-update") : t("text-add-new")}{" "}
        {t("text-contact-number")}
      </h1>

      <div className="flex items-center">
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(phoneNumber) => setPhone(`+${phoneNumber}`)}
          inputClass="!p-0 !pe-4 !ps-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base !border-e-0 !rounded !rounded-e-none focus:!border-accent !h-12"
          dropdownClass="focus:!ring-0 !border !border-border-base !shadow-350"
        />
        <Button className="!rounded-s-none" onClick={onContactUpdate}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddOrUpdateCheckoutContact;
