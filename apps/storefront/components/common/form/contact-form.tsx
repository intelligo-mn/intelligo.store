import Input from "@components/ui/input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import TextArea from "@components/ui/text-area";
import { useTranslation } from "next-i18next";
import { ContactFormValues, useContactMutation } from "@framework/contact/contact.mutation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const contactFormSchema = yup.object().shape({
  name: yup.string().required('forms:error-name-required'),
  email: yup
    .string()
    .email('forms:error-email-format')
    .required('forms:error-email-required'),
  subject: yup.string().required('forms:error-subject-required'),
  description: yup.string().required('forms:error-description-required'),
});

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  description: ""
};

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { mutate, isLoading: loading } = useContactMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
    defaultValues
  });

  async function onSubmit(values: ContactFormValues) {
    await mutate(values, {
      onSuccess: (data) => {
        if (data?.success){
          toast.success(t('contact-success-message'));
        }else {
          toast.error(t(data?.message!));
        }
      }
    });
  }

  return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full mx-auto flex flex-col justify-center "
			noValidate
		>
			<div className="flex flex-col space-y-5">
				<div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
					<Input
						labelKey="forms:label-name-required"
						placeholderKey="forms:placeholder-name"
						{...register("name")}
						className="w-full md:w-1/2 "
						errorKey={t(errors.name?.message!)}
						variant="solid"
					/>
					<Input
						labelKey="forms:label-email-required"
						type="email"
						placeholderKey="forms:placeholder-email"
						{...register("email")}
						className="w-full md:w-1/2 ltr:md:ml-2.5 ltr:lg:ml-5 rtl:md:mr-2.5 rtl:lg:mr-5 mt-2 md:mt-0"
						errorKey={t(errors.email?.message!)}
						variant="solid"
					/>
				</div>
				<Input
					labelKey="forms:label-subject-star"
					{...register("subject")}
					className="relative"
					placeholderKey="forms:placeholder-subject"
					errorKey={t(errors.subject?.message!)}
					variant="solid"
				/>
				<TextArea
					labelKey="forms:label-message-star"
					{...register("description")}
					className="relative mb-4"
					placeholderKey="forms:placeholder-message"
          errorKey={t(errors.description?.message!)}
				/>
				<div className="relative">
					<Button
            loading={loading}
						type="submit"
						className="h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
					>
						{t("common:button-send-message")}
					</Button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
