import * as yup from "yup";
export const taxValidationSchema = yup.object().shape({
  name: yup.string().required("form:error-name-required"),
  rate: yup
    .number()
    .typeError("form:error-rate-must-number")
    .positive("form:error-rate-must-positive")
    .integer("form:error-rate-must-integer")
    .required("form:error-rate-required"),
});
