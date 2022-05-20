import { useState } from "react";
import Button from "@components/ui/button";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useUpdateRefundMutation } from "@data/refunds/use-refund-update.mutation";
import SelectInput from "@components/ui/select-input";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import Alert from "@components/ui/alert";
import { animateScroll } from "react-scroll";
interface FormValues {
  status: any;
}

const RefundStatus = [
  {
    value: "APPROVED",
    name: "Approved",
  },
  {
    value: "PENDING",
    name: "Pending",
  },
  {
    value: "REJECTED",
    name: "Rejected",
  },
  {
    value: "PROCESSING",
    name: "Processing",
  },
];

const UpdateRefundConfirmationView = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { t } = useTranslation("common");
  const { handleSubmit, control } = useForm<FormValues>();

  const { mutate: updateRefund, isLoading: loading } =
    useUpdateRefundMutation();

  const { data: id } = useModalState();
  const { closeModal } = useModalAction();
  async function handleUpdateRefundStatus({ status }: FormValues) {
    const input = {
      status: status?.value,
    };

    updateRefund(
      {
        variables: {
          input: { id, ...input },
        },
      },
      {
        onError: (error: any) => {
          setErrorMessage(error?.response?.data?.message);
          animateScroll.scrollToTop();
        },
      }
    );
    closeModal();
  }

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
      <form onSubmit={handleSubmit(handleUpdateRefundStatus)} noValidate>
        {/* {({ register }) => ( */}
        <div className="p-5 bg-light flex flex-col m-auto max-w-sm w-full rounded sm:w-[24rem]">
          {/* <select {...register("status")}>
            {Object.keys(RefundStatus).map((status, idx) => (
              <option value={status.toLowerCase()} key={idx}>
                {status}
              </option>
            ))}
          </select> */}

          <div className="text-body font-semibold text-lg text-center mb-5">
            {t("text-update-refund")}
          </div>

          <SelectInput
            name="status"
            control={control}
            getOptionLabel={(option: any) => option.name}
            getOptionValue={(option: any) => option.value}
            options={RefundStatus}
          />

          <Button className="mt-3" loading={loading} disabled={loading}>
            {t("text-shop-approve-button")}
          </Button>
        </div>
      </form>
    </>
  );
};

export default UpdateRefundConfirmationView;
