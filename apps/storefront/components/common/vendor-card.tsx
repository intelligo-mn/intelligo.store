import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { useTranslation } from "next-i18next";
import Link from "@components/ui/link";
import Image from "next/image";
import cn from "classnames";
import { Shop } from "@framework/types";
import { formatAddress } from "@lib/format-address";
import isEmpty from "lodash/isEmpty";

type VendorCardProps = {
  shop: Shop;
  variant?: "list" | "grid";
};

const VendorCard: React.FC<VendorCardProps> = ({ shop, variant = "list" }) => {
  const { t } = useTranslation();
  const placeholderImage = `/assets/placeholder/products/product-grid.svg`;
  const { name, slug, address, logo, is_active } = shop;
  return (
    <Link
      href={`shops/${slug}`}
      className={cn(
        "flex items-center px-5 lg:px-6 rounded-md shadow-vendorCard cursor-pointer relative bg-white transition-all hover:shadow-vendorCardHover",
        {
          "pt-10 lg:pt-12 pb-9 lg:pb-11 flex-col text-center":
            variant === "grid",
          "py-7 lg:py-8": variant === "list",
        }
      )}
    >
      {is_active && (
        <span className="text-[10px] xl:text-xs font-semibold text-white uppercase px-2 py-1 xl:py-[5px] rounded bg-[#2B78C6] absolute top-2 ltr:right-2 rtl:left-2">
          New
        </span>
      )}

      <div
        className={cn(
          "border border-gray-100 relative flex flex-shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden",
          {
            "w-24 h-24 lg:w-28 lg:h-28": variant === "grid",
            "w-16 h-16": variant === "list",
          }
        )}
      >
        <Image
          alt={t("common:text-logo")}
          src={logo?.thumbnail ?? placeholderImage}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div
        className={cn("flex flex-col", {
          "mb-1 pt-4 md:pt-5 lg:pt-6": variant === "grid",
          "ltr:ml-4 rtl:mr-4": variant === "list",
        })}
      >
        <h4
          className={cn(
            "text-heading font-semibold text-sm leading-5 sm:leading-6 lg:leading-7 md:text-base xl:text-lg",
            {
              "2xl:text-xl mb-1.5": variant === "grid",
              "mb-1 md:mb-0.5": variant === "list",
            }
          )}
        >
          {name}
        </h4>
        <p
          className={cn("text-[13px] leading-5 flex items-start", {
            "text-sm": variant === "grid",
          })}
        >
          <span className="inline-block ltr:mr-1 rtl:ml-1 text-[#6B7280] relative top-1">
            <FaMapMarkerAlt />
          </span>
          {!isEmpty(formatAddress(address))
            ? formatAddress(address)
            : t("text-no-address")}
        </p>
      </div>
    </Link>
  );
};

export default VendorCard;
