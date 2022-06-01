import Image from "next/image";
import Text from "@components/ui/text";
import * as socialIcons from "react-share";
import { formatAddress } from "@lib/format-address";
import { getIcon } from "@lib/get-icon";
import { useTranslation } from "next-i18next";
import isEmpty from "lodash/isEmpty";
import cn from "classnames";
import { productPlaceholder } from "@lib/placeholders";

interface ShopSidebarProps {
  data: any;
  className?: string;
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({ data, className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn("flex flex-col pt-10 lg:pt-14 px-6", className)}>
      <div className="text-center w-full border-b border-gray-300 pb-8">
        <div className="w-32 lg:w-auto h-32 lg:h-auto mx-auto">
          <Image
            src={data?.logo?.original! ?? productPlaceholder}
            alt={data?.name}
            width={180}
            height={180}
            className="rounded-xl"
          />
        </div>
        <Text variant="heading" className="mt-6 mb-1.5">
          {data?.name}
        </Text>
        <Text>{data?.description}</Text>
        <div className="flex items-center flex-wrap justify-center space-x-2 rtl:space-x-reverse pt-4 mt-0.5">
          {data?.settings?.socials?.map((item: any, index: number) => (
            <a
              key={index}
              href={item?.url}
              target="_blank"
              rel="noreferrer"
              className={`text-muted focus:outline-none ltr:last:mr-0 rtl:last:ml-0 transition-colors duration-300 hover:${item.hoverClass}`}
            >
              {getIcon({
                iconList: socialIcons,
                iconName: item?.icon,
                size: 25,
                round: "round",
                className: "transition-all hover:opacity-90",
              })}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-6 py-7">
        {/* Address */}
        <div className="block">
          <h4 className="text-heading font-semibold text-sm mb-1.5">
            {t("text-address-colon")}
          </h4>
          {!isEmpty(formatAddress(data?.address)) ? (
            <Text>{formatAddress(data?.address)}</Text>
          ) : (
            t("common:text-no-address")
          )}
        </div>

        {/* Contact */}
        <div className="block">
          <h4 className="text-heading font-semibold text-sm mb-1.5">Phone:</h4>
          <div className="flex items-center justify-between">
            {data?.settings?.contact ? (
              <>
                <Text>{data?.settings?.contact}</Text>
                <button className="font-semibold text-sm text-heading transition-all hover:opacity-80 flex-shrink-0">
                  {t("text-call-now")}
                </button>
              </>
            ) : (
              t("text-no-contact")
            )}
          </div>
        </div>

        {/* Website */}
        {data?.settings?.website && (
          <div className="block">
            <h4 className="text-heading font-semibold text-sm mb-1.5">
              {t("text-website-colon")}
            </h4>
            <div className="flex items-center justify-between">
              <Text>{data?.settings?.website}</Text>
              <a
                href={`https://${data?.settings?.website}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-sm text-heading transition-all hover:opacity-80 flex-shrink-0"
              >
                {t("text-visit-site")}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopSidebar;
