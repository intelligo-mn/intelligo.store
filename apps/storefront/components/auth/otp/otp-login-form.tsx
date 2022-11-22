import Button from "@components/ui/button";
import {
  useOtpLoginMutation,
  useSendOtpCodeMutation,
} from "@framework/auth/auth.query";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Alert from "@components/ui/alert";
import MobileOtpInput from "react-otp-input";
import Label from "@components/ui/label";
import { useTranslation } from "next-i18next";
import "react-phone-input-2/lib/bootstrap.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "@components/ui/input";
import { Controller } from "react-hook-form";
import { getDirection } from "@utils/get-direction";
import { useRouter } from "next/router";

interface OTPProps {
  onLoginSuccess: (token: string) => void;
}

const defaultValues = {
  name: "",
  email: "",
  code: "",
};

const otpLoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("forms:error-email-format")
    .when("isContactExist", {
      is: false,
      then: yup.string().required("forms:error-email-required"),
    }),
  name: yup.string().when("isContactExist", {
    is: false,
    then: yup.string().required("forms:error-name-required"),
  }),
  code: yup
    .string()
    .required("forms:error-code-required")
    .min(6, "forms:error-min-code"),
});

export const OTPLoginForm: React.FC<OTPProps> = ({ onLoginSuccess }) => {
  const { t } = useTranslation("common");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hasOTP, setHasOTP] = useState(false);
  const [otpId, setOtpId] = useState("");
  const [number, setNumber] = useState("");
  const [isContactExist, setIsContactExist] = useState(false);
  const { mutate: sendOtpCode, isLoading: loading } = useSendOtpCodeMutation();
  const { mutate: otpLogin, isLoading: otpLoginLoading } =
    useOtpLoginMutation();

  const router = useRouter();
	const dir = getDirection(router.locale);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...defaultValues,
      isContactExist,
    },
    resolver: yupResolver(otpLoginFormSchema),
    shouldUnregister: true,
  });

  function onSendCodeSubmission() {
    sendOtpCode(
      {
        phone_number: number,
      },
      {
        onSuccess: (data: any) => {
          if (data?.success) {
            setErrorMessage(null);
            setIsContactExist(data?.is_contact_exist);
            setHasOTP(true);
            setOtpId(data?.sendOtpCode?.id!);

            // Update isContactExist value for update validation
            setValue("isContactExist", !!data?.is_contact_exist);
          }
          if (!data?.success) {
            setErrorMessage(data?.message);
          }
        },
        onError: (error: any) => {
          setErrorMessage(error?.response?.data?.message);
        },
      }
    );
  }

  function onOtpLoginSubmission(values: any) {
    otpLogin(
      {
        ...values,
        phone_number: number,
        otp_id: otpId,
      },
      {
        onSuccess: (data) => {
          if (data?.token && data?.permissions?.length) {
            onLoginSuccess(data?.token);
          }

          if (!data?.token) {
            setErrorMessage("text-otp-verify-failed");
          }
        },
        onError: (error: any) => {
          console.log("Error", error);
          setErrorMessage(error?.response?.data?.message);
        },
      }
    );
  }
  return (
    <>
      {errorMessage && (
        <Alert
          variant="error"
          message={t(errorMessage)}
          className="mb-4"
          closeable={true}
          onClose={() => setErrorMessage(null)}
        />
      )}

      {!hasOTP ? (
        <div className={`flex items-center ${dir === 'rtl' ? 'rtl-view': 'ltr-view'}`}>
          <PhoneInput
            country={"us"}
            value={number}
            onChange={(phone) => setNumber(`+${phone}`)}
            inputClass="!p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-gray-300 ltr:!border-r-0 rtl:!border-l-0 !rounded ltr:!rounded-r-none rtl:!rounded-l-none focus:!border-black !h-12"
            dropdownClass="focus:!ring-0 !border !border-gray-300 !shadow-350"
          />
          <Button
            loading={loading}
            disabled={loading}
            onClick={onSendCodeSubmission}
            className="ltr:!rounded-l-none rtl:!rounded-r-none flex-shrink-0 capitalize !h-12 !px-6"
          >
            {t("text-send-otp")}
          </Button>
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row md:items-center md:space-x-5">
          <form onSubmit={handleSubmit(onOtpLoginSubmission)}>
            <div className="flex flex-col space-y-4">
              {!isContactExist && (
                <>
                  <Input
                    labelKey="forms:label-name-star"
                    type="text"
                    variant="solid"
                    {...register("name")}
                    errorKey={errors.name?.message}
                  />
                  <Input
                    labelKey="forms:label-email-star"
                    type="email"
                    variant="solid"
                    {...register("email")}
                    errorKey={errors.email?.message}
                  />
                </>
              )}

              <div>
                <Label>{t("text-otp-code")}</Label>

                <Controller
                  control={control}
                  render={({
                    field: { onChange, onBlur: _, value },
                    fieldState: { error },
                  }) => (
                    <>
                      <MobileOtpInput
                        value={value}
                        onChange={onChange}
                        numInputs={6}
                        separator={
                          <span className="hidden sm:inline-block sm:mx-2">
                            -
                          </span>
                        }
                        containerStyle="justify-center space-x-2 sm:space-x-0 mb-5 md:mb-0"
                        inputStyle="flex items-center justify-center !w-full sm:!w-11 appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-gray-100 rounded focus:border-heading h-12"
                        disabledStyle="!bg-gray-100"
                      />
                      {error && (
                        <p className="my-2 text-xs text-red-500">
                          {/* @ts-ignore */}
                          {t(error?.message)}
                        </p>
                      )}
                    </>
                  )}
                  name="code"
                  defaultValue=""
                />
              </div>

              <div className="relative">
                <Button
                  type="submit"
                  loading={otpLoginLoading}
                  disabled={otpLoginLoading}
                  className="h-11 md:h-12 w-full mt-1.5"
                >
                  {t("common:text-login")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
