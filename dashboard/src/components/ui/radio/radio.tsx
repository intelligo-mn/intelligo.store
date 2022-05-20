import React, { InputHTMLAttributes } from "react";
import { useTranslation } from "next-i18next";
import styles from "./radio.module.css";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  labelKey?: string;
  name: string;
  id: string;
  error?: string;
  errorKey?: string;
}

const Radio = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, labelKey, name, id, error, errorKey, ...rest }, ref) => {
    const { t } = useTranslation();
    return (
      <div className={className}>
        <div className="flex items-center">
          <input
            id={id}
            name={name}
            type="radio"
            ref={ref}
            className={styles.radio_input}
            {...rest}
          />

          <label htmlFor={id} className="text-body text-sm">
            {t(labelKey ? labelKey : label!)}
          </label>
        </div>

        {errorKey && (
          <p className="my-2 text-xs text-start text-red-500">{t(errorKey)}</p>
        )}
      </div>
    );
  }
);

export default Radio;
