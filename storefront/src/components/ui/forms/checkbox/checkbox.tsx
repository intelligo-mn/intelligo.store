import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name: string;
  error?: string;
  theme?: 'primary' | 'secondary';
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, name, error, theme = 'primary', ...rest }, ref) => {
    return (
      <div className={className}>
        <div className="flex items-center">
          <input
            id={name}
            name={name}
            type="checkbox"
            ref={ref}
            className="checkbox"
            {...rest}
          />

          <label
            htmlFor={name}
            className={classNames('text-body text-sm', {
              primary: theme === 'primary',
              secondary: theme === 'secondary',
            })}
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
