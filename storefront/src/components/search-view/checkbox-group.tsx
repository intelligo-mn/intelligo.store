import React, { useCallback } from 'react';

interface Props {
  values: string[];
  onChange: (value: string[]) => void;
}
interface EnrichedChildren {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  checked: boolean;
  value: string;
  children?: React.ReactNode;
}
const CheckboxGroup: React.FC<Props> = ({ children, values, onChange }) => {
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const newValues = values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value];
      onChange(newValues);
    },
    [values, onChange]
  );

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<EnrichedChildren>(child)) {
          return child;
        }
        return React.cloneElement(child, {
          onChange: onChangeHandler,
          checked: values.includes(child.props.value),
        });
      })}
    </>
  );
};

export default CheckboxGroup;
