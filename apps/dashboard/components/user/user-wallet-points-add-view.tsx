import { Form } from "@components/ui/form/form";
import Button from "@components/ui/button";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import Input from "@components/ui/input";
import { useTranslation } from "next-i18next";
import { useAddWalletPointsMutation } from "@data/user/use-add-wallet-points.mutation";
type FormValues = {
  points: number;
};

const UserWalletPointsAddView = () => {
  const { t } = useTranslation();
  const { mutate: addWalletPoints, isLoading: loading } =
    useAddWalletPointsMutation();

  const { data: customerId } = useModalState();
  const { closeModal } = useModalAction();

  function onSubmit({ points }: FormValues) {
    addWalletPoints({
      variables: {
        input: {
          customer_id: customerId as string,
          points: points,
        },
      },
    });
    closeModal();
  }
  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ register, formState: { errors } }) => (
        <div className="p-5 bg-light flex flex-col m-auto max-w-sm w-full rounded sm:w-[24rem]">
          <Input
            label={t("form:input-label-add-wallet-points")}
            {...register("points", {
              required: "You must need to set wallet points",
            })}
            // defaultValue="10"
            variant="outline"
            className="mb-4"
            error={t(errors.points?.message!)}
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

export default UserWalletPointsAddView;
