import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  labelClassName?: string;
  label?: string;
  name: string;
  id: string;
  error?: string;
  theme?: 'primary' | 'secondary';
}

const Radio = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      labelClassName,
      label,
      name,
      id,
      error,
      theme = 'primary',
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        <div className="flex items-center">
          <input
            id={id}
            name={name}
            type="radio"
            ref={ref}
            className="radio-input"
            {...rest}
          />

          <label
            htmlFor={id}
            className={cn(
              'text-body text-sm',
              {
                primary: theme === 'primary',
                secondary: theme === 'secondary',
              },
              labelClassName
            )}
          >
            {label}
          </label>
        </div>

        {error && (
          <p className="my-2 text-xs ltr:text-right rtl:text-left text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
export default Radio;
