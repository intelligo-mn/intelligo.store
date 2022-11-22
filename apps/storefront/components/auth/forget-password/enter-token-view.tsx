import Button from "@components/ui/button";
import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useTranslation } from "next-i18next";

interface Props {
  onSubmit: (values: { token: string }) => void;
  loading: boolean;
}

const passwordTokenSchema = yup.object().shape({
  token: yup.string().required("Token is required"),
});

const EnterTokenView = ({ onSubmit, loading }: Props) => {
	// const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ token: string }>({
    resolver: yupResolver(passwordTokenSchema)
  });


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center"
      noValidate
    >
      <Input
        labelKey="Put your token you got from email"
        variant="solid"
        className="mb-4"
        {...register("token")}
        errorKey={errors.token?.message}
      />

      <Button type="submit" className="h-11 md:h-12 w-full mt-2" loading={loading} disabled={loading}>
        Submit Token
      </Button>
    </form>
	);
};

export default EnterTokenView;
