import { Form } from "@components/ui/form/form";
import Button from "@components/ui/button";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import Input from "@components/ui/input";
import { useTranslation } from "next-i18next";
import { useAddPointsMutation } from "@graphql/user.graphql";
import * as Yup from "yup";

type FormValues = {
  points: number;
};

const addPointsValidationSchema = Yup.object().shape({
  points: Yup.number()
    .typeError("wallet points must be a number")
    .positive("wallet points must be positive")
    .required("You must need to set wallet points"),
});
const UserWalletPointsAddView = () => {
  const { t } = useTranslation();
  const [addWalletPoints, { loading }] = useAddPointsMutation({
    refetchQueries: ["Customers"],
    onCompleted: () => {
      closeModal();
    },
  });

  const { data: customerId } = useModalState();
  const { closeModal } = useModalAction();

  function onSubmit({ points }: FormValues) {
    addWalletPoints({
      variables: {
        input: {
          customer_id: customerId as string,
          points: Number(points),
        },
      },
    });
  }
  return (
    <Form<FormValues>
      onSubmit={onSubmit}
      validationSchema={addPointsValidationSchema}
    >
      {({ register, formState: { errors } }) => (
        <div className="p-5 bg-light flex flex-col m-auto max-w-sm w-full rounded sm:w-[24rem]">
          <Input
            label={t("form:input-label-add-wallet-points")}
            {...register("points")}
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
