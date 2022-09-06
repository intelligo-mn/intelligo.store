import * as yup from "yup";

export const attributeValidationSchema = yup.object().shape({
  name: yup.string().required("form:error-name-required"),
  values: yup
    .array()
    .min(1, 'form:add-at-least-one-image')
    .of(
      yup.object().shape({
        value: yup.string().required("form:error-value-required"),
      })
    )
});
