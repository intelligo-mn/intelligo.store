import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "@components/ui/link";
import Badge from "@components/ui/badge/badge";

type ShopCardProps = {
  shop: any;
};

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  const { t } = useTranslation();

  const isNew = false;

  return (
    <Link href={`/${shop?.slug}`}>
      <div className="flex items-center p-5 bg-light border border-gray-200 rounded cursor-pointer relative">
        {isNew && (
          <span className="text-xs text-light px-2 py-1 rounded bg-blue-500 absolute top-2 end-2">
            {t("common:text-new")}
          </span>
        )}
        <div className="w-16 h-16 relative flex flex-shrink-0 border border-gray-100 items-center justify-center bg-gray-300 rounded-full overflow-hidden">
          <Image
            alt={t("common:text-logo")}
            src={
              shop?.logo?.thumbnail! ?? "/product-placeholder-borderless.svg"
            }
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col ms-4">
          <span className="text-lg font-semibold text-heading mb-2">
            {shop?.name}
          </span>
          <span>
            <Badge
              textKey={
                shop?.is_active ? "common:text-active" : "common:text-inactive"
              }
              color={shop?.is_active ? "bg-accent" : "bg-red-500"}
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
