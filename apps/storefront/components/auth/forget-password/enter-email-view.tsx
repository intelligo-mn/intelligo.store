import Button from "@components/ui/button";
import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
// import { useTranslation } from "next-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  onSubmit: (values: { email: string }) => void;
  loading: boolean;
}
const forgetPasswordSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
});

const EnterEmailView = ({ onSubmit, loading }: Props) => {
	// const { t } = useTranslation();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: yupResolver(forgetPasswordSchema)
  });

	return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center"
      noValidate
    >
      <Input
        labelKey="forms:label-email-star"
        type="email"
        variant="solid"
        className="mb-4"
        {...register("email")}
        placeholder="demo@demo.com"
        errorKey={errors.email?.message}
      />

      <Button type="submit" className="h-11 md:h-12 w-full mt-2" loading={loading} disabled={loading}>
        Submit Email
      </Button>
    </form>
	);
};

export default EnterEmailView;
