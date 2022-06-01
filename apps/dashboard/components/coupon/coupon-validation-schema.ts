import * as yup from "yup";
export const couponValidationSchema = yup.object().shape({
  code: yup.string().required("Coupon Code is required"),
  amount: yup
    .number()
    .typeError("form:error-amount-number")
    .positive("form:error-amount-must-positive")
    .required("form:error-amount-required"),
  expire_at: yup.string().required("form:error-expire-date-required"),
  active_from: yup.string().required("form:error-active-date-required"),
});
