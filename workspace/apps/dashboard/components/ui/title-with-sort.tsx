import cn from "classnames";
import { TriangleArrowDown } from "@components/icons/triangle-arrow-down";
import { TriangleArrowUp } from "@components/icons/triangle-arrow-up";

type Props = {
  title: string | React.ReactNode;
  ascending: boolean;
  isActive: boolean;
};

const TitleWithSort = ({ title, ascending, isActive = true }: Props) => {
  console.log(ascending);

  return (
    <span className="inline-flex items-center">
      <span>{title}</span>

      {ascending ? (
        <TriangleArrowUp
          width="9"
          className={cn("ml-1 flex-shrink-0 text-gray-300", {
            "!text-heading": isActive,
          })}
        />
      ) : (
        <TriangleArrowDown
          width="9"
          className={cn("ml-1 flex-shrink-0 text-gray-300", {
            "!text-heading": isActive,
          })}
        />
      )}
    </span>
  );
};

export default TitleWithSort;
