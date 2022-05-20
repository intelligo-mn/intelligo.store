type ReadMoreProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText?: string;
  character: number;
  children: string;
  hideButton?: boolean;
};

const Truncate: React.FC<ReadMoreProps> = ({
  children,
  onClick,
  character = 200,
  buttonText = "See More",
  hideButton = false,
}) => {
  if (!children) return null;

  return (
    <>
      {children && children.length < character
        ? children
        : children.substring(0, character) + "..."}
      {!hideButton && children.length > character && (
        <>
          ...
          <button
            className="ms-1 text-sm font-semibold text-accent hover:text-accent-hover outline-none focus:outline-none"
            onClick={onClick}
          >
            {buttonText}
          </button>
        </>
      )}
    </>
  );
};

export default Truncate;
