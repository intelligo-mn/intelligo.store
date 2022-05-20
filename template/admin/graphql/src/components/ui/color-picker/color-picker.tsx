import cn from "classnames";
import React, { InputHTMLAttributes } from "react";
import styles from "./color-picker.module.css";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
}

const ColorPicker = React.forwardRef<HTMLInputElement, Props>(
  (
    { className, label, name, error, inputClassName, children, ...rest },
    ref
  ) => {
    return (
      <div className={className}>
        <label
          htmlFor={name}
          className="block text-body-dark font-semibold text-sm leading-none mb-3"
        >
          {label}
        </label>
        <div className="flex items-center">
          <input
            id={name}
            name={name}
            type="color"
            ref={ref}
            className={cn(styles.color_picker, inputClassName)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            aria-invalid={error ? "true" : "false"}
            {...rest}
          />
          {children}
        </div>
        {error && <p className="my-2 text-xs text-end text-red-500">{error}</p>}
      </div>
    );
  }
);

export default ColorPicker;
