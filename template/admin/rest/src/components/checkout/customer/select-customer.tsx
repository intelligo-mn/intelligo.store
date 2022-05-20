import { useModalAction } from "@components/ui/modal/modal.context";
import { customerAtom } from "@contexts/checkout";
import { useAtom } from "jotai";
import { useTranslation } from "next-i18next";
import AsyncSelect from "react-select/async";
import { selectStyles } from "@components/ui/select/select.styles";
import { fetchUsers } from "@data/user/use-users.query";
import { QueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { json } from "stream/consumers";

const AddOrUpdateCheckoutCustomer = () => {
  const { closeModal } = useModalAction();
  const { t } = useTranslation("common");
  const [selectedCustomer, setCustomer] = useAtom(customerAtom);
  function onCustomerUpdate(customer: any) {
    setCustomer(customer);
    closeModal();
  }

  async function fetchAsyncOptions(inputValue: string) {
    const queryClient = new QueryClient();
    const data = await queryClient.fetchQuery(
      [API_ENDPOINTS.USERS, { text: inputValue, page: 1 }],
      fetchUsers
    );

    return data?.users?.data?.map((user: any) => ({
      value: user.id,
      label: user.name,
    }));
  }
  return (
    <div className="p-5 sm:p-8 bg-light w-screen max-w-sm md:rounded-xl min-h-screen flex flex-col justify-center md:min-h-0">
      <h1 className="text-heading font-semibold text-sm text-center mb-5 sm:mb-6">
        {selectedCustomer ? t("text-update") : t("text-select")}{" "}
        {t("text-customer")}
      </h1>
      <div>
        <AsyncSelect
          styles={selectStyles}
          cacheOptions
          loadOptions={fetchAsyncOptions}
          defaultOptions
          onChange={onCustomerUpdate}
        />
      </div>
    </div>
  );
};

export default AddOrUpdateCheckoutCustomer;
