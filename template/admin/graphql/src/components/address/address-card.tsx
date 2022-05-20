import { CloseIcon } from "@components/icons/close-icon";
import { PencilIcon } from "@components/icons/pencil-icon";
import { useModalAction } from "@components/ui/modal/modal.context";
import { formatAddress } from "@utils/format-address";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

interface AddressProps {
  address: any;
  checked: boolean;
  userId: string;
}
const AddressCard: React.FC<AddressProps> = ({ checked, address, userId }) => {
  const { t } = useTranslation();
  const { openModal } = useModalAction();

  function onEdit() {
    openModal("ADD_OR_UPDATE_ADDRESS", { customerId: userId, address });
  }
  function onDelete() {
    openModal("DELETE_ADDRESS", { customerId: userId, addressId: address.id });
  }
  return (
    <div
      className={classNames(
        "relative p-4 h-full rounded border cursor-pointer group hover:border-accent",
        {
          "border-accent shadow-sm": checked,
          "bg-gray-100 border-transparent": !checked,
        }
      )}
    >
      <p className="text-sm text-heading font-semibold mb-3 capitalize">
        {address.title}
      </p>
      <p className="text-sm text-sub-heading">
        {formatAddress(address.address)}
      </p>
      <div className="absolute top-4 end-4 flex space-s-2 opacity-0 group-hover:opacity-100">
        {onEdit && (
          <button
            className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-light"
            onClick={onEdit}
          >
            <span className="sr-only">{t("text-edit")}</span>
            <PencilIcon className="w-3 h-3" />
          </button>
        )}
        {onDelete && (
          <button
            className="flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-light"
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
