import MinusIcon from "@components/icons/minus-icon";
import { CounterPlusIcon } from "@components/icons/counter-plus-icon";
import cn from "classnames";
type CounterProps = {
  quantity: number;
  onDecrement: (e: any) => void;
  onIncrement: (e: any) => void;
  disableIncrement?: boolean;
  disableDecrement?: boolean;
  variant?: "default" | "dark";
  className?: string;
};
const Counter: React.FC<CounterProps> = ({
  quantity,
  onDecrement,
  onIncrement,
  disableIncrement = false,
  disableDecrement = false,
  variant = "default",
}) => {
  const size = variant !== "dark" ? "12px" : "10px";
  return (
    <div
      className={cn(
        "group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0",
        {
          "border h-11 md:h-12 border-gray-300": variant === "default",
          "h-8 md:h-9 shadow-navigation bg-heading": variant === "dark",
        }
      )}
    >
      <button
        onClick={onDecrement}
        className={cn(
          "flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none",
          {
            "w-10 md:w-12 text-heading ltr:border-r rtl:border-l border-gray-300 hover:text-white hover:bg-heading":
              variant === "default",
            "w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none":
              variant === "dark",
          }
        )}
        disabled={disableDecrement}
      >
        <MinusIcon width={size} />
      </button>

      <span
        className={cn(
          "font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0",
          {
            "text-base text-heading w-12  md:w-20 xl:w-24":
              variant === "default",
            "text-sm text-white w-8 md:w-10 ": variant === "dark",
          }
        )}
      >
        {quantity}
      </span>

      <button
        onClick={onIncrement}
        className={cn(
          "flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none",
          {
            "w-10 md:w-12 text-heading ltr:border-l rtl:border-r border-gray-300 hover:text-white hover:bg-heading":
              variant === "default",
            "w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none":
              variant === "dark",
          }
        )}
        disabled={disableIncrement}
      >
        <CounterPlusIcon width={size} height={size} />
      </button>
    </div>
  );
};
export default Counter;
