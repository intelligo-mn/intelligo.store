import cn from 'classnames';

type AttributeProps = {
  title?: string;
  value?: string;
  active?: boolean;
  className?: string;
  color?: string;
  [key: string]: unknown;
};

const BoxedAttribute: React.FC<AttributeProps> = ({
  title,
  value,
  active,
  className,
  color,
  ...props
}) => {
  return (
    <div
      className={cn(
        'h-full py-2 px-5 flex flex-col rounded items-center justify-center border border-gray-200 bg-gray-50 cursor-pointer text-body font-semibold',
        {
          '!border-accent !border-2 !text-accent': active,
        }
      )}
      {...props}
    >
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default BoxedAttribute;
