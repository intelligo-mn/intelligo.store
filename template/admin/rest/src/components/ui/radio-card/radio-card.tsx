import React, { InputHTMLAttributes } from "react";
import { useTranslation } from "next-i18next";
import styles from "./radio-card.module.css";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  labelKey?: string;
  name: string;
  id: string;
  error?: string;
  errorKey?: string;
}

const RadioCard = React.forwardRef<HTMLInputElement, Props>(
  (
    { className, label, labelKey, name, id, src, error, errorKey, ...rest },
    ref
  ) => {
    const { t } = useTranslation();
    return (
      <div className={className}>
        <div className="flex w-full h-full">
          <input
            id={id}
            name={name}
            type="radio"
            ref={ref}
            className={styles.radio_input}
            {...rest}
          />

          <label
            htmlFor={id}
            className="w-full flex flex-col rounded cursor-pointer border border-gray-200"
          >
            <div className="p-3 pb-0 w-full max-h-72 flex items-center justify-center overflow-hidden">
              <img
                src={src ?? "/product-placeholder-borderless.svg"}
                alt={t(labelKey ? labelKey : label!)}
                className="w-auto h-full object-contain"
              />
            </div>

            <h3 className="text-body text-sm text-center font-semibold p-5 mt-auto">
              <span>{t(labelKey ? labelKey : label!)}</span>
            </h3>
          </label>
        </div>

        {errorKey && (
          <p className="my-2 text-xs text-start text-red-500">{t(errorKey)}</p>
        )}
      </div>
    );
  }
);

export default RadioCard;
