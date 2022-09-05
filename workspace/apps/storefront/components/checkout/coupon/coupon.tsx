import { useState } from "react";
import Input from "@components/ui/formatted-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import { useVerifyCouponMutation } from "@framework/coupons/coupons.query";
import { useTranslation } from "next-i18next";
import { couponAtom } from "@store/checkout";
import { useAtom } from "jotai";

const Coupon = () => {
  const { t } = useTranslation("common");
  const [hasCoupon, setHasCoupon] = useState(false);
  const [coupon, applyCoupon] = useAtom(couponAtom);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const { mutate: verifyCoupon, isLoading: loading } =
    useVerifyCouponMutation();
  if (!hasCoupon && !coupon) {
    return (
      <p
        role="button"
        className="text-[13px] font-bold text-heading transition duration-200 hover:text-accent"
        onClick={() => setHasCoupon(true)}
      >
        {t("text-have-coupon")}
      </p>
    );
  }
  function onSubmit({ code }: { code: string }) {
    verifyCoupon(
      {
        code,
      },
      {
        onSuccess: (data) => {
          if (data.is_valid) {
            applyCoupon(data.coupon);
            setHasCoupon(false);
          } else {
            setError("code", {
              type: "manual",
              message: "error-invalid-coupon",
            });
          }
        },
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full flex flex-col sm:flex-row items-start justify-end"
    >
      <Input
        {...register("code", { required: "text-coupon-required" })}
        placeholder={t("text-enter-coupon")}
        variant="outline"
        className="mb-4 sm:mb-0 ltr:sm:mr-2.5 ltr:lg:mr-4 rtl:sm:ml-2.5 rtl:lg:ml-4 flex-1 w-full"
        dimension="small"
        error={t(errors?.code?.message!)}
      />
      <Button
        loading={loading}
        disabled={loading}
        variant="custom"
        className="w-full sm:w-40 lg:w-auto h-[46px] lg:px-5 bg-heading text-white hover:bg-gray-600"
      >
        {t("text-apply")}
      </Button>
    </form>
  );
};

export default Coupon;
