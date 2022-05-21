import cn from "classnames";
import { LabelHTMLAttributes } from "react";

export interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <label
      className={cn(
        "block text-body-dark font-semibold text-sm leading-none mb-3",
        className
      )}
      {...rest}
    />
  );
};

export default Label;
