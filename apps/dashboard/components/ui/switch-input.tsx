import { Control, Controller, FieldErrors } from "react-hook-form";
import { Switch } from "@headlessui/react";
import ValidationError from "./form-validation-error";
import { useTranslation } from "next-i18next";

interface Props {
  control: Control<any>;
  errors?: FieldErrors;
  label?: string;
  name: string;
  [key: string]: unknown;
}

const SwitchInput = ({ control, label, name, errors, ...rest }: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      {label && <div>{label}</div>}
      <Controller
        name={name}
        control={control}
        {...rest}
        render={({ field: { onChange, value } }) => (
          <Switch
            checked={value}
            onChange={onChange}
            className={`${
              value ? "bg-accent" : "bg-gray-300"
            } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none`}
          >
            <span className="sr-only">Enable {label}</span>
            <span
              className={`${
                value ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transition-transform transform bg-light rounded-full`}
            />
          </Switch>
        )}
      />
      <ValidationError message={t(errors?.[name]?.message)} />
    </div>
  );
};

export default SwitchInput;
