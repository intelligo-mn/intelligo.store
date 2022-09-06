import * as yup from "yup";
export const categoryValidationSchema = yup.object().shape({
  name: yup.string().required("form:error-name-required")
});
