import { BanUser } from "@components/icons/ban-user";
import EditIcon from "@components/icons/edit";
import Trash from "@components/icons/trash";
import { Eye } from "@components/icons/eye-icon";
import { WalletPointsIcon } from "@components/icons/wallet-point";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";
import { CheckMarkCircle } from "@components/icons/checkmark-circle";
import { useModalAction } from "@components/ui/modal/modal.context";
import { CloseFillIcon } from "@components/icons/close-fill";

type Props = {
  id: string;
  deleteModalView?: string | any;
  editUrl?: string;
  detailsUrl?: string;
  isUserActive?: boolean;
  userStatus?: boolean;
  isShopActive?: boolean;
  approveButton?: boolean;
  showAddWalletPoints?: boolean;
};

const ActionButtons = ({
  id,
  deleteModalView,
  editUrl,
  detailsUrl,
  userStatus = false,
  isUserActive = false,
  isShopActive,
  approveButton = false,
  showAddWalletPoints = false,
}: Props) => {
  const { t } = useTranslation();
  const { openModal } = useModalAction();
  function handleDelete() {
    openModal(deleteModalView, id);
  }
  function handleUserStatus(type: string) {
    openModal("BAN_CUSTOMER", { id, type });
  }
  function handleAddWalletPoints() {
    openModal("ADD_WALLET_POINTS", id);
  }
  function handleShopStatus(status: boolean) {
    if (status === true) {
      openModal("SHOP_APPROVE_VIEW", id);
    } else {
      openModal("SHOP_DISAPPROVE_VIEW", id);
    }
  }
  return (
    <div className="space-s-5 inline-flex items-center w-auto">
      {showAddWalletPoints && (
        <button
          onClick={handleAddWalletPoints}
          className="text-accent transition duration-200 hover:text-accent-hover focus:outline-none"
          title={t("text-delete")}
        >
          <WalletPointsIcon width={22} />
        </button>
      )}
      {deleteModalView && (
        <button
          onClick={handleDelete}
          className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none"
          title={t("text-delete")}
        >
          <Trash width={16} />
        </button>
      )}
      {approveButton &&
        (!isShopActive ? (
          <button
            onClick={() => handleShopStatus(true)}
            className="text-accent transition duration-200 hover:text-accent-hover focus:outline-none"
            title={t("text-approve-shop")}
          >
            <CheckMarkCircle width={20} />
          </button>
        ) : (
          <button
            onClick={() => handleShopStatus(false)}
            className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none"
            title={t("text-disapprove-shop")}
          >
            <CloseFillIcon width={20} />
          </button>
        ))}
      {userStatus && (
        <>
          {isUserActive ? (
            <button
              onClick={() => handleUserStatus("ban")}
              className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none"
              title={t("text-ban-user")}
            >
              <BanUser width={20} />
            </button>
          ) : (
            <button
              onClick={() => handleUserStatus("active")}
              className="text-accent transition duration-200 hover:text-accent focus:outline-none"
              title={t("text-activate-user")}
            >
              <CheckMarkCircle width={20} />
            </button>
          )}
        </>
      )}

      {editUrl && (
        <Link
          href={editUrl}
          className="text-base transition duration-200 hover:text-heading"
          title={t("text-edit")}
        >
          <EditIcon width={16} />
        </Link>
      )}
      {detailsUrl && (
        <Link
          href={detailsUrl}
          className="ml-2 text-base transition duration-200 hover:text-heading"
          title={t("text-view")}
        >
          <Eye width={24} />
        </Link>
      )}
    </div>
  );
};

export default ActionButtons;
