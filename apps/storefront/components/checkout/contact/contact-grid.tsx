import { useEffect } from "react";
import { useAtom } from "jotai";
import { customerContactAtom } from "@store/checkout";
import ContactCard from "@components/ui/contact-card";
import PlusIcon from "@components/icons/plus-icon";
import { useTranslation } from "next-i18next";
import { useUI } from "@contexts/ui.context";

interface ContactProps {
  contact: string | undefined;
  label: string;
  count?: number;
  userId?: string;
  profileId?: string;
  className?: string;
}

const ContactGrid = ({ contact, label, count, className, userId, profileId }: ContactProps) => {
  const [contactNumber, setContactNumber] = useAtom(customerContactAtom);
  const { openModal, setModalView, setModalData } = useUI();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (contact) {
      setContactNumber(contact);
    }
  }, [contact, setContactNumber]);

  function onAddOrChange() {
    setModalData({
      customerId: userId,
      profileId,
      contact,
    })
    setModalView("ADD_OR_UPDATE_CHECKOUT_CONTACT");

    return openModal();
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-5 lg:mb-6 xl:mb-7 -mt-1 xl:-mt-2">
        <div className="flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse text-lg lg:text-xl xl:text-2xl text-heading capitalize font-bold">
          {count && (
            <span className="flex items-center justify-center ltr:mr-2 rtl:ml-2">
              {count}.
            </span>
          )}
          {label}
        </div>

        <button
          className="flex items-center text-sm font-semibold text-heading transition-colors duration-200 focus:outline-none focus:opacity-70 hover:opacity-70 mt-1"
          onClick={onAddOrChange}
        >
          <PlusIcon className="w-4 h-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5 relative top-[1px]" />
          {contactNumber ? t("text-update") : t("text-add")}
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        <ContactCard
          checked={Boolean(contactNumber)}
          number={Boolean(contactNumber) ? contactNumber : t("text-no-contact")}
        />
      </div>
    </div>
  );
};

export default ContactGrid;
