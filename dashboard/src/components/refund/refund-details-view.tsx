import Card from "@components/common/card";
import Image from "next/image";
import { Table } from "@components/ui/table";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import { siteSettings } from "@settings/site.settings";
import usePrice from "@utils/use-price";
import { formatAddress } from "@utils/format-address";
import ValidationError from "@components/ui/form-validation-error";
import { useTranslation } from "next-i18next";
import SelectInput from "@components/ui/select-input";
import { useIsRTL } from "@utils/locals";
import { useUpdateRefundMutation } from "@data/refunds/use-refund-update.mutation";
import { useModalAction } from "@components/ui/modal/modal.context";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

const RefundStatus = [
  {
    value: "approved",
    name: "Approved",
  },
  {
    value: "pending",
    name: "Pending",
  },
  {
    value: "rejected",
    name: "Rejected",
  },
  {
    value: "processing",
    name: "Processing",
  },
];

type FormValues = {
  status: any;
};
export default function RefundDetailsView({
  refund,
  canChangeStatus = true,
}: any) {
  const { t } = useTranslation();
  const { query } = useRouter();
  const { alignLeft, alignRight } = useIsRTL();
  const { openModal } = useModalAction();
  const { mutate: updateRefund, isLoading: updating } =
    useUpdateRefundMutation();

  async function handleUpdateRefundStatus({ status }: any) {
    const input = {
      status: status?.value,
    };

    const id = query.refundId as string;

    updateRefund(
      {
        variables: {
          input: { id, ...input },
        },
      },
      {
        onError: (error: any) => {
          setError("status", {
            type: "manual",
            message: error?.response?.data?.message,
          });
        },
      }
    );
  }

  const handleImageClick = (idx: number) => {
    openModal("REFUND_IMAGE_POPOVER", {
      images: refund?.images,
      initSlide: idx,
    });
  };

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      status: RefundStatus.find(
        (status) => refund?.status?.toUpperCase() === status.value.toUpperCase()
      ),
    },
  });
  const { price: subtotal } = usePrice(
    refund && {
      amount: refund?.amount!,
    }
  );
  const { price: total } = usePrice(
    refund && {
      amount: refund?.order?.paid_total!,
    }
  );
  const { price: discount } = usePrice(
    refund && {
      amount: refund?.order?.discount!,
    }
  );
  const { price: delivery_fee } = usePrice(
    refund && {
      amount: refund?.order?.delivery_fee!,
    }
  );
  const { price: sales_tax } = usePrice(
    refund && {
      amount: refund?.order?.sales_tax!,
    }
  );

  const columns = [
    {
      dataIndex: "image",
      key: "image",
      width: 70,
      render: (image: any) => (
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
      <div className="flex flex-col lg:flex-row items-center">
        <h3 className="text-2xl font-semibold text-heading text-center lg:text-start w-full lg:w-1/3 mb-8 lg:mb-0 whitespace-nowrap">
          {t("common:text-refund-id")} - {refund?.id} (
          <span className="lowercase first-letter:uppercase inline-block">
            {refund?.status}
          </span>
          )
        </h3>

        {refund?.status && canChangeStatus && (
          <form
            onSubmit={handleSubmit(handleUpdateRefundStatus)}
            className="flex flex-col sm:flex-row sm:justify-end ms-auto w-full lg:w-2/3 xl:w-1/2"
          >
            <div className="w-full lg:max-w-[280px] me-5 z-20">
              <SelectInput
                name="status"
                control={control}
                getOptionLabel={(option: any) => option.name}
                getOptionValue={(option: any) => option.value}
                options={RefundStatus}
                placeholder={t("common:text-refund-status")}
                rules={{
                  required: t("common:text-status-required"),
                }}
              />
              <ValidationError
                message={
                  errors?.status?.message &&
                  t(`common:${errors?.status?.message}`)
                }
              />
            </div>
            <Button
              loading={updating}
              className="w-full sm:w-auto mt-2 sm:mt-0"
            >
              <span>{t("form:button-label-change-status")}</span>
            </Button>
          </form>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between my-10">
        <div className="flex flex-col sm:items-end flex-shrink-0 order-1 md:order-2">
          <p className="flex flex-col sm:flex-row sm:items-center text-sm text-sub-heading mb-5 sm:mb-3">
            <span className="font-semibold min-w-[180px] md:min-w-[110px] mb-2 sm:mb-0">
              {t("common:text-refund-created")}
            </span>
            <span className="hidden sm:block mx-2">: </span>
            <span className="capitalize">
              {dayjs
                .utc(refund?.order?.created_at)
                .tz(dayjs.tz.guess())
                .format("DD MMMM YYYY")}
            </span>
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center text-sm text-sub-heading mb-5 sm:mb-3">
            <span className="font-semibold min-w-[180px] md:min-w-[110px] mb-2 sm:mb-0">
              {t("common:text-order-created")}
            </span>
            <span className="hidden sm:block mx-2">: </span>
            <span className="capitalize">
              {dayjs
                .utc(refund?.order?.created_at)
                .tz(dayjs.tz.guess())
                .format("DD MMMM YYYY")}
            </span>
          </p>
        </div>

        <div className="flex flex-col order-2 md:order-1">
          <p className="flex flex-col sm:flex-row sm:items-center text-sm text-sub-heading mb-5 sm:mb-3">
            <span className="font-semibold min-w-[180px] mb-2 sm:mb-0">
              {t("table:table-item-tracking-number")}
            </span>
            <span className="hidden sm:block mx-2">: </span>
            <span>{refund?.order?.tracking_number}</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center text-sm text-sub-heading mb-5 sm:mb-3">
            <span className="font-semibold min-w-[180px] mb-2 sm:mb-0">
              {t("common:text-order-status")}
            </span>
            <span className="hidden sm:block mx-2">: </span>
            <span>{refund?.order?.status?.name}</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center text-sm text-sub-heading mb-5 sm:mb-3">
            <span className="font-semibold min-w-[180px] mb-2 sm:mb-0">
              {t("common:text-customer-email")}
            </span>
            <span className="hidden sm:block mx-2">: </span>
            <span>{refund?.customer?.email}</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center text-sm text-sub-heading mb-5 sm:mb-3">
            <span className="font-semibold min-w-[180px] mb-2 sm:mb-0">
              {t("form:input-label-contact")}
            </span>
            <span className="hidden sm:block mx-2">: </span>
            <span>{refund?.order?.customer_contact}</span>
          </p>
        </div>
      </div>

      {/* Reason with description */}
      <div className="flex flex-col mb-10">
        <p className="flex flex-col text-sub-heading mb-7">
          <span className="font-semibold mb-2">{t("common:text-reason")}</span>
          <span className="text-sm">{refund?.title}</span>
        </p>
        <p className="flex flex-col text-sub-heading mb-7">
          <span className="font-semibold mb-2">
            {t("form:input-description")}
          </span>
          <span className="text-sm">{refund?.description}</span>
        </p>

        <div className="flex flex-col">
          <span className="font-semibold text-sub-heading mb-4">
            {t("common:text-images")}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 3xl:grid-cols-8 gap-5">
            {refund?.images?.map((img: any, idx: number) => (
              <div
                key={img?.id}
                className="cursor-pointer bg-gray-100 rounded-lg"
                onClick={() => handleImageClick(idx)}
              >
                <Image
                  src={img?.original ?? "/"}
                  alt={refund?.title!}
                  layout="responsive"
                  width={400}
                  height={400}
                  objectFit="contain"
                  className="rounded overflow-hidden"
                />
              </div>
            ))}
            {!refund?.images?.length && (
              <span className="text-sm text-gray-400">
                {t("common:text-no-image-found")}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <span className="flex font-semibold text-sub-heading w-56 mb-4 overflow-hidden">
          {t("common:text-order-details")}
        </span>
        {refund?.order ? (
          <Table
            //@ts-ignore
            columns={columns}
            emptyText={t("table:empty-table-data")}
            //@ts-ignore
            data={refund?.order?.products!}
            rowKey="id"
            scroll={{ x: 300, y: 320 }}
          />
        ) : (
          <span>{t("common:no-order-found")}</span>
        )}

        <div className="border-t-4 border-double border-border-200 flex flex-col w-full sm:w-1/2 md:w-1/3 ms-auto sm:px-4 py-4 space-y-2">
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
            <span>{refund?.order?.customer?.name}</span>
            {refund?.order?.billing_address && (
              <span>{formatAddress(refund.order.billing_address)}</span>
            )}
            {refund?.order?.customer_contact && (
              <span>{refund?.order?.customer_contact}</span>
            )}
          </div>
        </div>

        <div className="w-full sm:w-1/2 sm:ps-8">
          <h3 className="text-heading text-start font-semibold sm:text-end mb-3 pb-2 border-b border-border-200">
            {t("common:shipping-address")}
          </h3>

          <div className="text-sm text-body text-start sm:text-end flex flex-col items-start sm:items-end space-y-1">
            <span>{refund?.order?.customer?.name}</span>
            {refund?.order?.shipping_address && (
              <span>{formatAddress(refund.order.shipping_address)}</span>
            )}
            {refund?.order?.customer_contact && (
              <span>{refund?.order?.customer_contact}</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
