import * as yup from "yup";
export const authorValidationSchema = yup.object().shape({
  name: yup.string().required("form:error-author-name-required"),
});
