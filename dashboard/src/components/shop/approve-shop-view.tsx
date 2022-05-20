import { Form } from "@components/ui/form/form";
import Button from "@components/ui/button";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import Input from "@components/ui/input";
import { useApproveShopMutation } from "@graphql/shops.graphql";
import { getErrorMessage } from "@utils/form-error";
import { useTranslation } from "next-i18next";
type FormValues = {
  admin_commission_rate: number;
};

const ApproveShopView = () => {
  const { t } = useTranslation();
  const [approveShopMutation, { loading }] = useApproveShopMutation({
    onCompleted: () => {
      closeModal();
    },
    onError: (error) => {
      closeModal();
      getErrorMessage(error);
    },
  });

  const { data: shopId } = useModalState();
  const { closeModal } = useModalAction();

  function onSubmit({ admin_commission_rate }: FormValues) {
    approveShopMutation({
      variables: {
        input: {
          id: shopId as string,
          admin_commission_rate: Number(admin_commission_rate),
        },
      },
    });
  }
  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ register, formState: { errors } }) => (
        <div className="p-5 bg-light flex flex-col m-auto max-w-sm w-full rounded sm:w-[24rem]">
          <Input
            label={t("form:input-label-admin-commission-rate")}
            {...register("admin_commission_rate", {
              required: "form:error-admin-commission",
            })}
            defaultValue="10"
            variant="outline"
            className="mb-4"
            error={t(errors.admin_commission_rate?.message!)}
          />
          <Button
            type="submit"
            loading={loading}
            disabled={loading}
            className="ms-auto"
          >
            {t("form:button-label-submit")}
          </Button>
        </div>
      )}
    </Form>
  );
};

export default ApproveShopView;
