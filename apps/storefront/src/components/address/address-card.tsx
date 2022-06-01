import { CloseIcon } from "@components/icons/close-icon";
import { PencilIcon } from "@components/icons/pencil-icon";
import { formatAddress } from "@lib/format-address";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useUI } from "@contexts/ui.context";
import { AddressType } from "@framework/utils/constants";

interface AddressProps {
  address: any;
  checked: boolean;
  userId: string;
}

const AddressCard: React.FC<AddressProps> = ({ checked, address, userId }) => {
  const { t } = useTranslation();
  const { setModalView, setModalData, openModal } = useUI();

  function onEdit() {
    setModalData({
      customerId: userId,
      type: AddressType.Billing,
      address: address,
    });
    setModalView("ADDRESS_FORM_VIEW");
    return openModal();
  }

  function onDelete() {
    setModalData({
      customerId: userId,
      type: AddressType.Billing,
      address: address,
    });
    setModalView("ADDRESS_DELETE_VIEW");
    return openModal();
  }

  return (
    <div
      className={classNames(
        "relative p-4 lg:p-5 xl:p-6 h-full rounded border cursor-pointer group hover:border-accent",
        {
          "border-2 border-heading": checked,
          "bg-gray-200 border-gray-100": !checked,
        }
      )}
    >
      <p className="text-base text-heading font-semibold mb-2 md:mb-3 capitalize">
        {address.title}
      </p>
      <p className="text-sm text-body leading-6">
        {formatAddress(address.address)}
      </p>
      <div className="absolute top-4 ltr:right-4 rtl:left-4 flex space-x-2 rtl:space-x-reverse opacity-0 group-hover:opacity-100">
        {onEdit && (
          <button
            className="flex items-center justify-center w-5 h-5 rounded-full bg-heading hover:bg-gray-600 text-white"
            onClick={onEdit}
          >
            <span className="sr-only">{t("text-edit")}</span>
            <PencilIcon className="w-3 h-3" />
          </button>
        )}
        {onDelete && (
          <button
            className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F34459] text-white"
            onClick={onDelete}
          >
            <span className="sr-only">{t("text-delete")}</span>
            <CloseIcon className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
