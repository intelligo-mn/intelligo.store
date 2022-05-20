import cn from 'classnames';

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...rest
}) => {
  return (
    <label
      className={cn(
        'block text-body-dark font-semibold text-sm leading-none mb-3',
        className
      )}
      {...rest}
    />
  );
};

export default Label;
