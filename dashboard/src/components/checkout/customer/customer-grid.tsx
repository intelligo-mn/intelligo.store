import { useAtom } from "jotai";
import { customerAtom } from "@contexts/checkout";
import { useModalAction } from "@components/ui/modal/modal.context";
import { PlusIcon } from "@components/icons/plus-icon";
import { useTranslation } from "next-i18next";

interface CustomerProps {
  label: string;
  count?: number;
  className?: string;
}

const CustomerGrid = ({ label, count, className }: CustomerProps) => {
  const [customer] = useAtom(customerAtom);
  const { openModal } = useModalAction();
  const { t } = useTranslation("common");

  function onAddOrChange() {
    openModal("SELECT_CUSTOMER");
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
          {customer?.value ? t("text-update") : t("text-add")}
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {/* {customerId && <div>{customerId}</div>} */}

        {customer?.value ? (
          <div className="relative p-4 h-full rounded border cursor-pointer group hover:border-accent border-accent shadow-sm bg-light">
            <p className="text-sm text-heading font-semibold capitalize">
              {customer.label}
            </p>
          </div>
        ) : (
          <span className="relative px-5 py-6 text-base text-center bg-gray-100 rounded border border-border-200">
            {t("text-no-customer")}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomerGrid;
