import * as yup from "yup";
export const typeValidationSchema = yup.object().shape({
  name: yup.string().required("form:error-name-required"),
  banners: yup
    .array()
    .min(1, "form:error-min-one-banner")
    .of(
      yup.object().shape({
        title: yup.string().required("form:error-title-required"),
      })
    ),
});
