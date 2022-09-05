import * as yup from "yup";
import isEmpty from "lodash/isEmpty";

yup.addMethod(yup.object, "notEmptyObject", function (errorMessage) {
  return this.test(`test-not-empty-object`, errorMessage, function (value) {
    const { path, createError } = this;
    return (
      (value && !isEmpty(value)) || createError({ path, message: errorMessage })
    );
  });
})

export const typeValidationSchema = yup.object().shape({
  name: yup.string().required("form:error-name-required"),
  images: yup
    .array()
    .min(1, 'form:add-at-least-one-image')
    .of(
      yup.object().shape({
        key: yup.object().notEmptyObject("form:text-select-layout"),
        image: yup.array().min(1, "form:error-min-one-image")
      })
    )
});
