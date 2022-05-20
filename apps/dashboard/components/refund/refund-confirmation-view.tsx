import Button from "@components/ui/button";
import { Form } from "@components/ui/form/form";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useUpdateRefundMutation } from "@graphql/refunds.graphql";
import SelectInput from "@components/ui/select-input";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";

interface FormValues {
  status: any;
}
// enum RefundStatus {
//   APPROVED = "approved",
//   PENDING = "pending",
//   REJECTED = "rejected",
//   PROCESSING = "processing",
// }

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
  const { t } = useTranslation("common");
  const { handleSubmit, control } = useForm<FormValues>();

  const [updateRefund, { loading }] = useUpdateRefundMutation({
    onCompleted: () => {
      toast.success(t("common:update-success"));
    },
  });

  const { data: id } = useModalState();
  const { closeModal } = useModalAction();
  async function handleUpdateRefundStatus({ status }: FormValues) {
    const input = {
      status: status?.value,
    };

    updateRefund({
      variables: {
        input: { id, ...input },
      },
    });
    closeModal();
  }

  return (
    // <Form<FormValues> onSubmit={handleUpdateRefundStatus}>
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
      {/* )} */}
    </form>
    // </Form>
  );
};

export default UpdateRefundConfirmationView;
