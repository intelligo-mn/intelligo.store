import MailchimpSubscribe from "react-mailchimp-subscribe";
import React, {useEffect, useState} from "react";
import Input from "@components/ui/input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "next-i18next";
import * as yup from "yup";
import { useUI } from "@contexts/ui.context";

type FormValues = {
  subscribe_email: string;
};

const defaultValues = {
  subscribe_email: "",
};

// Yup validation
const subscriptionFormSchema = yup.object().shape({
  subscribe_email: yup
    .string()
    .email("forms:email-error")
    .required("forms:email-required"),
});

type CustomFormProps = {
  status: "error" | "sending" | "success" | null;
  message: string | Error | null;
  onValidated: any;
  layout: "subscribe" | "newsletter";
};

const CustomForm: React.FC<CustomFormProps> = ({
  status,
  message,
  onValidated,
  layout,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(subscriptionFormSchema),
  });
  const { t } = useTranslation();
  const { closeModal } = useUI();
  const [responseMessage, setResponseMessage]: any = useState("");

  useEffect(() => {
    setResponseMessage(message);

    // Disappear message after 2 second
    const interval = setInterval(() => {
      setResponseMessage("");
    }, 3000)

    return () => {
      clearInterval(interval);
    }
  }, [message])

  async function onSubmit(input: FormValues) {
    await onValidated({ EMAIL: input.subscribe_email });

    // Reset the form
    reset({subscribe_email: "",})

    // If layout newsletter then close the model
    if (layout === "newsletter") {
      closeModal();
    }
  }

  // Generate layout className
  const layoutClassName = {
    ...(layout === "newsletter"
      ? {
          formClassName: "pt-8 sm:pt-10 md:pt-14 mb-1 sm:mb-0",
          divClassName: "",
          inputClassName: "px-4 lg:px-7 h-12 lg:h-14 text-center bg-gray-50",
          buttonClassName: "w-full h-12 lg:h-14 mt-3 sm:mt-4",
          buttonTextClassName: "lg:py-0.5",
        }
      : {
          formClassName: "flex-shrink-0 w-full sm:w-96 md:w-[545px] z-10 relative",
          divClassName: "flex flex-col sm:flex-row items-start justify-end",
          inputClassName: "px-4 lg:px-7 h-12 lg:h-14 text-center ltr:sm:text-left rtl:sm:text-right bg-white",
          buttonClassName:
            "mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-full flex-shrink-0",
          buttonTextClassName: "lg:py-0.5",
        }),
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={layoutClassName.formClassName}
    >
      <div className={layoutClassName.divClassName}>
        <Input
          placeholderKey="forms:placeholder-email-subscribe"
          type="email"
          variant="solid"
          className="w-full"
          inputClassName={layoutClassName.inputClassName}
          {...register("subscribe_email")}
          errorKey={errors.subscribe_email?.message}
        />
        <Button
          className={layoutClassName.buttonClassName}
          loading={status === "sending"}
        >
          <span className={layoutClassName.buttonTextClassName}>
            {t(`common:button-subscribe`)}
          </span>
        </Button>
      </div>

      {/* Status Message */}
      {status === "success" && (
        <div
          className="my-2 text-xs text-green-600"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: responseMessage }}
        />
      )}
      {status === "error" && (
        <div
          className="my-2 text-xs text-red-500"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: responseMessage }}
        />
      )}
    </form>
  );
};

type MailchimpFormProps = {
  layout: "subscribe" | "newsletter";
};

const MailchimpForm: React.FC<MailchimpFormProps> = ({
  layout = "newsletter",
}) => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={url as string}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          layout={layout}
          onValidated={(formData: any) => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailchimpForm;
