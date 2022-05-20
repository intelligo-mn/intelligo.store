import * as yup from "yup";
export const withdrawValidationSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("form:error-amount-must-number")
    .positive("form:error-amount-must-positive")
    .required("form:error-amount-required"),
});
