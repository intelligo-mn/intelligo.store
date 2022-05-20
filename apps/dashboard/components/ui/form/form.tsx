import { yupResolver } from "@hookform/resolvers/yup";
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
} from "react-hook-form";

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  validationSchema?: any;
  className?: string;
  options?: UseFormProps<TFormValues>;
};

export const Form = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  onSubmit,
  className,
  children,
  options,
  validationSchema,
  ...props
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...(!!validationSchema && { resolver: yupResolver(validationSchema) }),
    ...(!!options && options),
  });
  return (
    <form
      className={className}
      onSubmit={methods.handleSubmit(onSubmit)}
      noValidate
      {...props}
    >
      {children(methods)}
    </form>
  );
};
