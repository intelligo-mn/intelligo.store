import cn from "classnames";
type Props = {
  className?: string;
  [key: string]: unknown;
};
const Card: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn("p-5 md:p-8 bg-light shadow rounded", className)}
      {...props}
    />
  );
};

export default Card;
