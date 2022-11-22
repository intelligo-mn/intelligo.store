import ShopLayout from "@components/layouts/shop";
import LinkButton from "@components/ui/link-button";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useRouter } from "next/router";
import { MapPin } from "@components/icons/map-pin";
import { PhoneIcon } from "@components/icons/phone";
import Loader from "@components/ui/loader/loader";
import dayjs from "dayjs";
import { CheckMarkFill } from "@components/icons/checkmark-circle-fill";
import { CloseFillIcon } from "@components/icons/close-fill";
import EditIcon from "@components/icons/edit";
import { formatAddress } from "@utils/format-address";
import {
  adminAndOwnerOnly,
  adminOwnerAndStaffOnly,
  getAuthCredentials,
  hasAccess,
} from "@utils/auth-utils";
import ErrorMessage from "@components/ui/error-message";
import usePrice from "@utils/use-price";
import { useTranslation } from "next-i18next";
import isEmpty from "lodash/isEmpty";
import { useShopQuery } from "@data/shop/use-shop.query";
import { GetStaticPaths } from "next";
import { CubeIcon } from "@components/icons/shops/cube";
import { OrdersIcon } from "@components/icons/sidebar";
import { PriceWalletIcon } from "@components/icons/shops/price-wallet";
import { PercentageIcon } from "@components/icons/shops/percentage";
import { DollarIcon } from "@components/icons/shops/dollar";
import ReadMore from "@components/ui/truncate";

export default function ShopPage() {
  const { t } = useTranslation();
  const { permissions } = getAuthCredentials();
  const {
    query: { shop },
    locale,
  } = useRouter();
  const { data, isLoading: loading, error } = useShopQuery(shop!.toString());
  const { price: totalEarnings } = usePrice(
    data && {
      amount: data?.shop?.balance?.total_earnings!,
    }
  );
  const { price: currentBalance } = usePrice(
    data && {
      amount: data?.shop?.balance?.current_balance!,
    }
  );
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  const {
    name,
    is_active,
    logo,
    cover_image,
    description,
    products_count,
    orders_count,
    balance,
    address,
    created_at,
    settings,
    slug,
  } = data?.shop! ?? {};

  return (
    <div className="grid grid-cols-12 gap-6">
      {!is_active && (
        <div className="col-span-12 bg-red-500 text-sm text-light px-5 py-4 rounded-lg">
          {t("common:text-permission-message")}
        </div>
      )}
      {/* about Shop */}
      <div className="order-2 xl:order-1 col-span-12 sm:col-span-6 xl:col-span-4 3xl:col-span-3">
        <div className="py-8 px-6 bg-white rounded flex flex-col items-center">
          <div className="w-36 h-36 relative rounded-full mb-5">
            <div className="w-full h-full relative overflow-hidden flex items-center justify-center border border-gray-100 rounded-full">
              <Image
                src={logo?.thumbnail ?? "/avatar-placeholder.svg"}
                layout="fill"
                objectFit="contain"
              />
            </div>

            {is_active ? (
              <div className="w-5 h-5 rounded-full overflow-hidden bg-light absolute bottom-4 end-2">
                <CheckMarkFill width={20} className="me-2 text-accent" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full overflow-hidden bg-light absolute bottom-4 end-2">
                <CloseFillIcon width={20} className="me-2 text-red-500" />
              </div>
            )}
          </div>

          <h1 className="text-xl font-semibold text-heading mb-2">{name}</h1>
          <p className="text-sm text-body text-center">
            <ReadMore character={70}>{description!}</ReadMore>
          </p>

          <div className="flex w-full justify-start mt-5">
            <span className="text-muted-light mt-0.5 me-2">
              <MapPin width={16} />
            </span>

            <address className="text-body text-sm not-italic">
              {!isEmpty(formatAddress(address!))
                ? formatAddress(address!)
                : t("common:text-no-address")}
            </address>
          </div>

          <div className="flex w-full justify-start mt-3">
            <span className="text-muted-light mt-0.5 me-2">
              <PhoneIcon width={16} />
            </span>
            <a href={`tel:${settings?.contact}`} className="text-body text-sm">
              {settings?.contact
                ? settings?.contact
                : t("common:text-no-contact")}
            </a>
          </div>

          <div className="grid grid-cols-1 w-full mt-7">
            <a
              href={`${process.env.NEXT_PUBLIC_SHOP_URL}/${locale}/shops/${slug}`}
              target="_blank"
              className="inline-flex items-center justify-center flex-shrink-0 leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 !bg-gray-100 hover:!bg-accent !text-heading hover:!text-light !font-normal px-5 py-0 h-12"
            >
              {t("common:text-visit-shop")}
            </a>
          </div>
        </div>
      </div>

      {/* Cover Photo */}
      <div className="order-1 xl:order-2 col-span-12 xl:col-span-8 3xl:col-span-9 rounded h-full overflow-hidden relative bg-light min-h-[400px]">
        <Image
          src={cover_image?.original ?? "/product-placeholder-borderless.svg"}
          layout="fill"
          objectFit="contain"
        />

        {hasAccess(adminAndOwnerOnly, permissions) && (
          <LinkButton
            size="small"
            className="absolute top-3 end-3 bg-blue-500 hover:bg-blue-600 shadow-sm"
            href={`/${shop}/edit`}
          >
            <EditIcon className="w-4 me-2" /> {t("common:text-edit-shop")}
          </LinkButton>
        )}
      </div>

      {/* Mini Dashboard */}
      <div className="order-4 xl:order-3 col-span-12 xl:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-light p-4 rounded h-full">
          <div className="space-y-3">
            <h2 className="text-heading text-lg font-semibold">
              {t("common:text-products")}
            </h2>

            <div className="border border-gray-100">
              <div className="flex items-center py-3 px-4 border-b border-gray-100">
                <div className="p-3 rounded-full w-11 h-11 flex items-center justify-center bg-[#FC9EC6] text-light">
                  <CubeIcon width={18} />
                </div>

                <div className="ml-3">
                  <p className="text-lg font-semibold text-sub-heading mb-0.5">
                    {products_count}
                  </p>
                  <p className="text-sm text-muted mt-0">
                    {t("common:text-total-products")}
                  </p>
                </div>
              </div>

              <div className="flex items-center py-3 px-4">
                <div className="p-3 rounded-full w-11 h-11 flex items-center justify-center bg-[#6EBBFD] text-light">
                  <OrdersIcon width={16} />
                </div>

                <div className="ml-3">
                  <p className="text-lg font-semibold text-sub-heading mb-0.5">
                    {orders_count}
                  </p>
                  <p className="text-sm text-muted mt-0">
                    {t("common:text-total-orders")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-heading text-lg font-semibold">
              {t("common:text-revenue")}
            </h2>

            <div className="border border-gray-100">
              <div className="flex items-center py-3 px-4 border-b border-gray-100">
                <div className="p-3 rounded-full w-11 h-11 flex items-center justify-center bg-[#C7AF99] text-light">
                  <PriceWalletIcon width={16} />
                </div>

                <div className="ml-3">
                  <p className="text-lg font-semibold text-sub-heading mb-0.5">
                    {totalEarnings}
                  </p>
                  <p className="text-sm text-muted mt-0">
                    {t("common:text-gross-sales")}
                  </p>
                </div>
              </div>

              <div className="flex items-center py-3 px-4">
                <div className="p-3 rounded-full w-11 h-11 flex items-center justify-center bg-[#FFA7AE] text-light">
                  <DollarIcon width={12} />
                </div>

                <div className="ml-3">
                  <p className="text-lg font-semibold text-sub-heading mb-0.5">
                    {currentBalance}
                  </p>
                  <p className="text-sm text-muted mt-0">
                    {t("common:text-current-balance")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-heading text-lg font-semibold">
              {t("common:text-others")}
            </h2>

            <div className="border border-gray-100">
              <div className="flex items-center py-3 px-4 border-b border-gray-100">
                <div className="p-3 rounded-full w-11 h-11 flex items-center justify-center bg-[#D59066] text-light">
                  <PercentageIcon width={16} />
                </div>

                <div className="ml-3">
                  <p className="text-lg font-semibold text-sub-heading mb-0.5">
                    {`${balance?.admin_commission_rate ?? 0} %` ?? "Not Set"}
                  </p>
                  <p className="text-sm text-muted mt-0">
                    {t("common:text-commission-rate")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Misc. Information */}
      <div className="order-3 xl:order-4 bg-light rounded col-span-12 sm:col-span-6 xl:col-span-3">
        <div className="flex flex-col p-6 2xl:p-7 border-b border-gray-200">
          <span className="text-muted text-sm mb-2">
            {t("common:text-registered-since")}
          </span>
          <span className="text-sm font-semibold text-sub-heading">
            {dayjs(created_at).format("MMMM D, YYYY")}
          </span>
        </div>

        <div className="flex flex-col p-6 2xl:p-7">
          <span className="text-sub-heading text-lg font-semibold mb-4">
            {t("common:text-payment-info")}
          </span>

          <div className="flex flex-col space-y-3">
            <p className="text-sm text-sub-heading">
              <span className="text-muted block w-full">
                {t("common:text-name")}:
              </span>{" "}
              <span className="font-semibold">
                {balance?.payment_info?.name}
              </span>
            </p>
            <p className="text-sm text-sub-heading">
              <span className="text-muted block w-full">
                {t("common:text-email")}:
              </span>{" "}
              <span className="font-semibold">
                {balance?.payment_info?.email}
              </span>
            </p>
            <p className="text-sm text-sub-heading">
              <span className="text-muted block w-full">
                {t("common:text-bank")}:
              </span>{" "}
              <span className="font-semibold">
                {balance?.payment_info?.bank}
              </span>
            </p>
            <p className="text-sm text-sub-heading">
              <span className="text-muted block w-full">
                {t("common:text-account-no")}:
              </span>{" "}
              <span className="font-semibold">
                {balance?.payment_info?.account}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
ShopPage.Layout = ShopLayout;
ShopPage.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common", "table"])),
  },
});
export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};
