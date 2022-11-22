import PlusIcon from "@components/icons/plus-icon";
import ContactCard from "@components/ui/contact-card";
import { useTranslation } from "next-i18next";
import { useUI } from "@contexts/ui.context";

interface Props {
  userId: string;
  profileId: string;
  contact: string;
}

const ProfileContactNumber = ({ userId, profileId, contact }: Props) => {
  const { openModal, setModalView, setModalData } = useUI();
  const { t } = useTranslation("common");

  function onAdd() {
    setModalData({
      customerId: userId,
      profileId,
      contact,
    });
    setModalView("ADD_OR_UPDATE_PROFILE_CONTACT");

    return openModal();
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between mb-5 lg:mb-8">
        <p className="flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse text-lg lg:text-xl xl:text-2xl text-heading capitalize font-bold">
          {t("text-contact-number")}
        </p>

        {onAdd && (
          <button
            className="flex items-center text-sm font-semibold text-heading transition-colors duration-200 focus:outline-none focus:opacity-70 hover:opacity-70 mt-1"
            onClick={onAdd}
          >
            <PlusIcon className="w-4 h-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5" />
            {Boolean(contact) ? t("text-update") : t("text-add")}
          </button>
        )}
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ContactCard
          number={Boolean(contact) ? contact : t("text-no-contact")}
        />
      </div>
    </div>
  );
};

export default ProfileContactNumber;
