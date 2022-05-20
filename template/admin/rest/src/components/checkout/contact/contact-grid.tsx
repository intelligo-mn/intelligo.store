import { useEffect } from "react";
import { useAtom } from "jotai";
import { customerContactAtom } from "@contexts/checkout";
import { useModalAction } from "@components/ui/modal/modal.context";
import ContactCard from "@components/ui/contact-card";
import { PlusIcon } from "@components/icons/plus-icon";
import { useTranslation } from "next-i18next";

interface ContactProps {
  contact: string | undefined;
  label: string;
  count?: number;
  className?: string;
}

const ContactGrid = ({ contact, label, count, className }: ContactProps) => {
  const [contactNumber, setContactNumber] = useAtom(customerContactAtom);
  const { openModal } = useModalAction();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (contact) {
      setContactNumber(contact);
    }
  }, [contact, setContactNumber]);

  function onAddOrChange() {
    openModal("ADD_OR_UPDATE_CHECKOUT_CONTACT");
  }
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-5 md:mb-8">
        <div className="flex items-center space-s-3 md:space-s-4">
          {count && (
            <span className="rounded-full w-8 h-8 bg-accent flex items-center justify-center text-base lg:text-xl text-light">
              {count}
            </span>
          )}
          <p className="text-lg lg:text-xl text-heading capitalize">{label}</p>
        </div>

        <button
          className="flex items-center text-sm font-semibold text-accent transition-colors duration-200 focus:outline-none focus:text-accent-hover hover:text-accent-hover"
          onClick={onAddOrChange}
        >
          <PlusIcon className="w-4 h-4 stroke-2 me-0.5" />
          {contactNumber ? t("text-update") : t("text-add")}
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {Boolean(contactNumber) ? (
          <ContactCard
            checked={Boolean(contactNumber)}
            number={contactNumber}
          />
        ) : (
          <span className="relative px-5 py-6 text-base text-center bg-gray-100 rounded border border-border-200">
            {t("text-no-contact")}
          </span>
        )}
      </div>
    </div>
  );
};

export default ContactGrid;
