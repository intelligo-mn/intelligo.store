import { useModalAction } from "@components/ui/modal/modal.context";
import { RadioGroup } from "@headlessui/react";
import { useAtom, WritableAtom } from "jotai";
import { useEffect } from "react";
import AddressCard from "@components/address/address-card";
import { AddressHeader } from "@components/address/address-header";
import { useTranslation } from "next-i18next";
import { Address } from "__generated__/__types__";

interface AddressesProps {
  addresses: Address[] | undefined;
  label: string;
  atom: WritableAtom<Address | null, Address>;
  className?: string;
  userId: string;
  count: number;
  type: string;
}

export const AddressGrid: React.FC<AddressesProps> = ({
  addresses,
  label,
  atom,
  className,
  userId,
  count,
  type,
}) => {
  const { t } = useTranslation("common");
  const [selectedAddress, setAddress] = useAtom(atom);
  const { openModal } = useModalAction();

  useEffect(() => {
    if (addresses?.length) {
      if (selectedAddress?.id) {
        const index = addresses.findIndex((a) => a.id === selectedAddress.id);
        setAddress(addresses[index]);
      } else {
        setAddress(addresses?.[0]);
      }
    }
  }, [addresses, addresses?.length, selectedAddress?.id, setAddress]);
  function onAdd() {
    openModal("ADD_OR_UPDATE_ADDRESS", { customerId: userId, type });
  }
  return (
    <div className={className}>
      <AddressHeader onAdd={onAdd} count={count} label={label} />

      {addresses && addresses?.length ? (
        <RadioGroup value={selectedAddress} onChange={setAddress}>
          <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {addresses?.map((address) => (
              <RadioGroup.Option value={address} key={address.id}>
                {({ checked }) => (
                  <AddressCard
                    checked={checked}
                    address={address}
                    userId={userId}
                  />
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          <span className="relative px-5 py-6 text-base text-center bg-gray-100 rounded border border-border-200">
            {t("text-no-address")}
          </span>
        </div>
      )}
    </div>
  );
};
export default AddressGrid;
