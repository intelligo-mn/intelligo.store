import React from "react";
import { useTranslation } from "next-i18next";
interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelKey?: string;
  label?: string | any;
}
export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ labelKey, label, ...rest }, ref) => {
    const { t } = useTranslation();
    return (
      <label className="group flex items-center text-heading text-sm cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
          ref={ref}
          {...rest}
        />
        <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">{labelKey ? t(labelKey) : label}</span>
      </label>
    );
  }
);
