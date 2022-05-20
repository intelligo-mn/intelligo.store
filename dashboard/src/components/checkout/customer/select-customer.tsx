import { useApolloClient } from "@apollo/client";
import { useModalAction } from "@components/ui/modal/modal.context";
import { customerAtom } from "@contexts/checkout";
import { CustomersDocument } from "@graphql/customers.graphql";
import { useAtom } from "jotai";
import { useTranslation } from "next-i18next";
import AsyncSelect from "react-select/async";
import { selectStyles } from "@components/ui/select/select.styles";
import { User } from "__generated__/__types__";

const AddOrUpdateCheckoutCustomer = () => {
  const { closeModal } = useModalAction();
  const { t } = useTranslation("common");
  const [selectedCustomer, setCustomer] = useAtom(customerAtom);
  const client = useApolloClient();
  function onCustomerUpdate(customer: any) {
    setCustomer(customer);
    closeModal();
  }

  function fetchAsyncOptions(inputValue: string) {
    return client
      .query({
        query: CustomersDocument,
        variables: {
          text: `%${inputValue}%`,
        },
      })
      .then(({ data }) => {
        const res = data?.users?.data?.map((user: User) => ({
          value: user.id,
          label: user.name,
        }));
        return res || [];
      });
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
