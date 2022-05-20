import Card from "@components/common/card";
import Layout from "@components/layouts/admin";
import Image from "next/image";
import { Table } from "@components/ui/table";
import ProgressBox from "@components/ui/progress-box/progress-box";
import { useOrderQuery, useUpdateOrderMutation } from "@graphql/orders.graphql";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useOrderStatusesQuery } from "@graphql/order_status.graphql";
import Button from "@components/ui/button";
import ErrorMessage from "@components/ui/error-message";
import { siteSettings } from "@settings/site.settings";
import usePrice from "@utils/use-price";
import { formatAddress } from "@utils/format-address";
import Loader from "@components/ui/loader/loader";
import ValidationError from "@components/ui/form-validation-error";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SelectInput from "@components/ui/select-input";
import { useIsRTL } from "@utils/locals";
import { adminOnly } from "@utils/auth-utils";
import { toast } from "react-toastify";
import {
  Attachment,
  QueryOrderStatusesOrderByColumn,
  SortOrder,
} from "__generated__/__types__";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePdf from "@components/order/invoice-pdf";
import { DownloadIcon } from "@components/icons/download-icon";
import { useSettings } from "@contexts/settings.context";

type FormValues = {
  order_status: any;
};
export default function OrderDetailsPage() {
  const { t } = useTranslation();
  const { query } = useRouter();
  const settings = useSettings();
  const { alignLeft, alignRight } = useIsRTL();

  const [updateOrder, { loading: updating }] = useUpdateOrderMutation({
    onCompleted: () => {
      toast.success(t("common:successfully-updated"));
    },
  });
  const { data: orderStatusData } = useOrderStatusesQuery({
    variables: {
      first: 100,
      orderBy: [
        {
          column: QueryOrderStatusesOrderByColumn.Serial,
          order: SortOrder.Asc,
        },
      ],
    },
  });

  const { data, loading, error } = useOrderQuery({
    variables: {
      id: query.orderId as string,
    },
  });

  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { order_status: data?.order?.status ?? "" },
  });

  const ChangeStatus = ({ order_status }: FormValues) => {
    updateOrder({
      variables: {
        input: {
          id: data?.order?.id as string,
          status: order_status?.id as string,
        },
      },
    });
  };
  const { price: subtotal } = usePrice(
    data && {
      amount: data?.order?.amount!,
    }
  );
  const { price: total } = usePrice(
    data && {
      amount: data?.order?.paid_total!,
    }
  );
  const { price: discount } = usePrice(
    data && {
      amount: data?.order?.discount!,
    }
  );
  const { price: delivery_fee } = usePrice(
    data && {
      amount: data?.order?.delivery_fee!,
    }
  );
  const { price: sales_tax } = usePrice(
    data && {
      amount: data?.order?.sales_tax!,
    }
  );

  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  const columns = [
    {
      dataIndex: "image",
      key: "image",
      width: 70,
      render: (image: Attachment) => (
        <Image
          src={image?.thumbnail ?? siteSettings.product.placeholder}
          alt="alt text"
          layout="fixed"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: t("table:table-item-products"),
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      render: (name: string, item: any) => (
        <div>
          <span>{name}</span>
          <span className="mx-2">x</span>
          <span className="font-semibold text-heading">
            {item.pivot.order_quantity}
          </span>
        </div>
      ),
    },
    {
      title: t("table:table-item-total"),
      dataIndex: "price",
      key: "price",
      align: alignRight,
      render: (_: any, item: any) => {
        const { price } = usePrice({
          amount: item.pivot.subtotal,
        });
        return <span>{price}</span>;
      },
    },
  ];

  return (
    <Card>
      <div className="flex w-full">
        <PDFDownloadLink
          className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 text-light border border-transparent px-5 py-0 h-12 ms-auto mb-5 bg-blue-500 hover:bg-blue-600"
          document={
            <InvoicePdf
              subtotal={subtotal}
              total={total}
              discount={discount}
              delivery_fee={delivery_fee}
              sales_tax={sales_tax}
              settings={settings}
              order={data?.order}
            />
          }
          fileName="invoice.pdf"
        >
          {({ loading }: any) =>
            loading ? (
              t("common:text-loading")
            ) : (
              <>
                <DownloadIcon className="h-4 w-4 me-3" />
                {t("common:text-download")} {t("common:text-invoice")}
              </>
            )
          }
        </PDFDownloadLink>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        <h3 className="text-2xl font-semibold text-heading text-center lg:text-start w-full lg:w-1/3 mb-8 lg:mb-0 whitespace-nowrap">
          {t("form:input-label-order-id")} - {data?.order?.tracking_number}
        </h3>

        <form
          onSubmit={handleSubmit(ChangeStatus)}
          className="flex items-start ms-auto w-full lg:w-2/4"
        >
          <div className="w-full me-5 z-20">
            <SelectInput
              name="order_status"
              control={control}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
              options={orderStatusData?.orderStatuses?.data!}
              placeholder={t("form:input-placeholder-order-status")}
              rules={{
                required: "Status is required",
              }}
            />

            <ValidationError message={errors?.order_status?.message} />
          </div>
          <Button loading={updating}>
            <span className="hidden sm:block">
              {t("form:button-label-change-status")}
            </span>
            <span className="block sm:hidden">
              {t("form:form:button-label-change")}
            </span>
          </Button>
        </form>
      </div>

      <div className="my-5 lg:my-10 flex justify-center items-center">
        <ProgressBox
          data={orderStatusData?.orderStatuses?.data}
          status={data?.order?.status?.serial!}
        />
      </div>

      <div className="mb-10">
        {data?.order ? (
          <Table
            //@ts-ignore
            columns={columns}
            emptyText={t("table:empty-table-data")}
            //@ts-ignore
            data={data?.order?.products!}
            rowKey="id"
            scroll={{ x: 300 }}
          />
        ) : (
          <span>{t("common:no-order-found")}</span>
        )}

        <div className="border-t-4 border-double border-border-200 flex flex-col w-full sm:w-1/2 md:w-1/3 ms-auto px-4 py-4 space-y-2">
          <div className="flex items-center justify-between text-sm text-body">
            <span>{t("common:order-sub-total")}</span>
            <span>{subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-body">
            <span>{t("common:order-tax")}</span>
            <span>{sales_tax}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-body">
            <span>{t("common:order-delivery-fee")}</span>
            <span>{delivery_fee}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-body">
            <span>{t("common:order-discount")}</span>
            <span>{discount}</span>
          </div>
          <div className="flex items-center justify-between text-body font-semibold">
            <span>{t("common:order-total")}</span>
            <span>{total}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="w-full sm:w-1/2 sm:pe-8 mb-10 sm:mb-0">
          <h3 className="text-heading font-semibold mb-3 pb-2 border-b border-border-200">
            {t("common:billing-address")}
          </h3>

          <div className="text-sm text-body flex flex-col items-start space-y-1">
            <span>{data?.order?.customer?.name}</span>
            {data?.order?.billing_address && (
              <span>{formatAddress(data.order.billing_address)}</span>
            )}
            {data?.order?.customer_contact && (
              <span>{data?.order?.customer_contact}</span>
            )}
          </div>
        </div>

        <div className="w-full sm:w-1/2 sm:ps-8">
          <h3 className="text-heading text-start font-semibold sm:text-end mb-3 pb-2 border-b border-border-200">
            {t("common:shipping-address")}
          </h3>

          <div className="text-sm text-body text-start sm:text-end flex flex-col items-start sm:items-end space-y-1">
            <span>{data?.order?.customer?.name}</span>
            {data?.order?.shipping_address && (
              <span>{formatAddress(data.order.shipping_address)}</span>
            )}
            {data?.order?.customer_contact && (
              <span>{data?.order?.customer_contact}</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
OrderDetailsPage.authenticate = {
  permissions: adminOnly,
};
OrderDetailsPage.Layout = Layout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "form", "table"])),
  },
});
