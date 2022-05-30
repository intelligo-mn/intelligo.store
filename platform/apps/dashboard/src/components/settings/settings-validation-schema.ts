import * as yup from "yup";
export const settingsValidationSchema = yup.object().shape({
  currency: yup.object().nullable().required("form:error-currency-required"),
  minimumOrderAmount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .moreThan(-1, "form:error-sale-price-must-positive"),
  deliveryTime: yup
    .array()
    .min(1, "add-at-least-one-delivery-time")
    .of(
      yup.object().shape({
        title: yup.string().required("form:error-title-required"),
      })
    ),
});
