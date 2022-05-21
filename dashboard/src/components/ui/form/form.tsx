import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  validationSchema?: any;
};

export const Form = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  onSubmit,
  children,
  validationSchema,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...(!!validationSchema && { resolver: yupResolver(validationSchema) }),
  });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
