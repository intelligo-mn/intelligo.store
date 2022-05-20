import { useState } from "react";
import Input from "@components/ui/input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import { useVerifyCouponMutation } from "@graphql/coupons.graphql";
import { useTranslation } from "next-i18next";
import { couponAtom } from "@contexts/checkout";
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
  const [verifyCoupon, { loading }] = useVerifyCouponMutation({
    onCompleted: (data) => {
      if (data?.verifyCoupon?.is_valid) {
        //@ts-ignore
        applyCoupon(data?.verifyCoupon?.coupon);
        setHasCoupon(false);
        return;
      }
      if (!data?.verifyCoupon?.is_valid) {
        setError("code", {
          type: "manual",
          message: "error-invalid-coupon",
        });
      }
    },
  });

  if (!hasCoupon && !coupon) {
    return (
      <p
        role="button"
        className="text-xs font-bold text-body transition duration-200 hover:text-accent"
        onClick={() => setHasCoupon(true)}
      >
        {t("text-have-coupon")}
      </p>
    );
  }
  function onSubmit({ code }: { code: string }) {
    verifyCoupon({
      variables: {
        code,
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full flex flex-col sm:flex-row sm:items-center"
    >
      <Input
        {...register("code", { required: "text-coupon-required" })}
        placeholder={t("text-enter-coupon")}
        variant="outline"
        className="mb-4 sm:mb-0 sm:me-4 flex-1"
        dimension="small"
        error={t(errors?.code?.message!)}
      />
      <Button
        loading={loading}
        disabled={loading}
        size="small"
        className="w-full sm:w-40 lg:w-auto"
      >
        {t("text-apply")}
      </Button>
    </form>
  );
};

export default Coupon;
