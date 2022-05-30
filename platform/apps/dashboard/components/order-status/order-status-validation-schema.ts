import * as yup from "yup";
export const orderStatusValidationSchema = yup.object().shape({
  name: yup.string().required("form:error-name-required"),
  serial: yup
    .number()
    .typeError("form:error-specify-number")
    .positive("form:error-serial-must-positive")
    .integer("form:error-serial-must-integer")
    .required("form:error-serial-required"),
  color: yup.string().required("form:error-color-required"),
});
