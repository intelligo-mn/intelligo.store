import cn from "classnames";
import React, { InputHTMLAttributes } from "react";
import { useTranslation } from "next-i18next";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  labelKey?: string;
  placeholderKey?: string;
  name: string;
  errorKey?: string;
  type?: string;
  shadow?: boolean;
  variant?: "normal" | "solid" | "outline";
}
const classes = {
  root: "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs md:text-[13px] lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out",
  normal:
    "bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary",
  solid:
    "bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12",
  outline: "border-gray-300 focus:border-heading focus-visible:outline-none",
  shadow: "focus:shadow",
};
const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className = "block",
      labelKey,
      name,
      errorKey,
      placeholderKey,
      variant = "normal",
      shadow = false,
      type = "text",
      inputClassName,
      ...rest
    },
    ref
  ) => {
    const rootClassName = cn(
      classes.root,
      {
        [classes.normal]: variant === "normal",
        [classes.solid]: variant === "solid",
        [classes.outline]: variant === "outline",
      },
      {
        [classes.shadow]: shadow,
      },
      inputClassName
    );
    const { t } = useTranslation();
    return (
      <div className={className}>
        {labelKey && (
          <label
            htmlFor={name}
            className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
          >
            {t(labelKey)}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          // @ts-ignore
          placeholder={t(placeholderKey)}
          className={rootClassName}
          autoComplete="off"
          spellCheck="false"
          aria-invalid={errorKey ? "true" : "false"}
          {...rest}
        />
        {errorKey && <p className="my-2 text-xs text-red-500">{t(errorKey)}</p>}
      </div>
    );
  }
);

export default Input;
