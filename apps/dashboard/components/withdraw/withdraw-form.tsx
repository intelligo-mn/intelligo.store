import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import TextArea from "@components/ui/text-area";
import Card from "@components/common/card";
import Description from "@components/ui/description";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { withdrawValidationSchema } from "./withdraw-validation-schema";
import { useState } from "react";
import Alert from "@components/ui/alert";
import { animateScroll } from "react-scroll";
import { Withdraw } from "@ts-types/generated";
import { useShopQuery } from "@data/shop/use-shop.query";
import { useCreateWithdrawMutation } from "@data/withdraw/use-withdraw-create.mutation";

type FormValues = {
  amount: number;
  payment_method: string;
  details: string;
  note: string;
};

type IProps = {
  initialValues?: Withdraw | null;
};
export default function CreateOrUpdateWithdrawForm({ initialValues }: IProps) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    query: { shop },
  } = router;
  const { t } = useTranslation();
  const { data: shopData } = useShopQuery(shop as string);
  const shopId = shopData?.shop?.id!;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    //@ts-ignore
    defaultValues: initialValues,
    resolver: yupResolver(withdrawValidationSchema),
  });

  const { mutate: createWithdraw, isLoading: creating } =
    useCreateWithdrawMutation();

  const onSubmit = (values: FormValues) => {
    const input = {
      amount: +values.amount,
      shop_id: Number(shopId),
      details: values.details,
      payment_method: values.payment_method,
      note: values.note,
    };

    createWithdraw(
      {
        variables: {
          input,
        },
      },
      {
        onError: (error: any) => {
          setErrorMessage(error?.response?.data?.message);
          animateScroll.scrollToTop();
        },
      }
    );
  };

  return (
    <>
      {errorMessage ? (
        <Alert
          message={t(`common:${errorMessage}`)}
          variant="error"
          closeable={true}
          className="mt-5"
          onClose={() => setErrorMessage(null)}
        />
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap my-5 sm:my-8">
          <Description
            title={t("form:input-label-description")}
            details={`${
              initialValues
                ? t("form:item-description-edit")
                : t("form:item-description-add")
            } ${t("form:withdraw-description-helper-text")}`}
            className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8 "
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <Input
              label={t("form:input-label-amount")}
              {...register("amount")}
              error={t(errors.amount?.message!)}
              variant="outline"
              className="mb-5"
            />
            <Input
              label={t("form:input-label-payment-method")}
              {...register("payment_method")}
              error={t(errors.payment_method?.message!)}
              variant="outline"
              className="mb-5"
            />

            <TextArea
              label={t("form:input-label-details")}
              {...register("details")}
              variant="outline"
              className="mb-5"
            />
            <TextArea
              label={t("form:input-label-note")}
              {...register("note")}
              variant="outline"
              className="mb-5"
            />
          </Card>
        </div>
        <div className="mb-4 text-end">
          {initialValues && (
            <Button
              variant="outline"
              onClick={router.back}
              className="me-4"
              type="button"
            >
              {t("form:button-label-back")}
            </Button>
          )}

          <Button loading={creating}>
            {initialValues
              ? t("form:button-label-update-withdraw")
              : t("form:button-label-add-withdraw")}
          </Button>
        </div>
      </form>
    </>
  );
}
