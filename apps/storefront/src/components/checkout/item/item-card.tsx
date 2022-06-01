import usePrice from "@lib/use-price";
import Image from "next/image";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { productPlaceholderThumbnail } from "@lib/placeholders";

interface Props {
  item: any;
  notAvailable?: boolean;
}

const ItemCard = ({ item, notAvailable }: Props) => {
  const { t } = useTranslation("common");
  const { price } = usePrice({
    amount: item.itemTotal,
  });
  return (
    <div
      className={cn("flex justify-between items-center py-2.5")}
      key={item.id}
    >
      <div className="w-[60px] h-[60px] ltr:mr-4 rtl:ml-4 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item?.image ?? productPlaceholderThumbnail}
          width={60}
          height={60}
          quality={100}
          className="bg-gray-100 object-cover"
        />
      </div>
      <p className="flex items-center justify-between text-base ltr:pr-1.5 ltr:pl-1.5 ltr:mr-auto rtl:ml-auto">
        <span
          className={cn("text-sm", notAvailable ? "text-red-500" : "text-body")}
        >
          <span
            className={cn(
              "text-sm font-bold",
              notAvailable ? "text-red-500" : "text-heading"
            )}
          >
            {item.quantity}
          </span>
          <span className="mx-2">x</span>
          <span>{item.name}</span> | <span>{item.unit}</span>
        </span>
      </p>
      <span
        className={cn(
          "text-sm font-semibold ",
          notAvailable ? "text-red-500" : "text-heading"
        )}
      >
        {!notAvailable ? price : t("text-unavailable")}
      </span>
    </div>
  );
};

export default ItemCard;
