import * as yup from "yup";
export const manufacturerValidationSchema = yup.object().shape({
  name: yup.string().required("form:error-manufacturer-name-required"),
  type: yup.object().nullable().required("form:error-type-required"),
});
