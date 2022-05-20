import cn from "classnames";
import { PlusIcon } from "@components/icons/plus-icon";
import { MinusIcon } from "@components/icons/minus-icon";
import { useTranslation } from "next-i18next";

type ButtonEvent = (
  e: React.MouseEvent<HTMLButtonElement | MouseEvent>
) => void;

type CounterProps = {
  value: number;
  variant?:
    | "helium"
    | "neon"
    | "argon"
    | "oganesson"
    | "single"
    | "details"
    | "pillVertical"
    | "big";
  onDecrement: ButtonEvent;
  onIncrement: ButtonEvent;
  className?: string;
  disabled?: boolean;
};

const variantClasses = {
  helium:
    "w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-accent flex-col-reverse sm:flex-row absolute sm:static bottom-3 end-3 sm:bottom-0 sm:end-0 text-light rounded",
  neon: "w-full h-7 md:h-9 bg-accent text-light rounded",
  argon:
    "w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-accent flex-col-reverse sm:flex-row text-light rounded",
  oganesson:
    "w-20 h-8 md:w-24 md:h-10 bg-accent text-light rounded-full shadow-500",
  single:
    "order-5 sm:order-4 w-9 sm:w-24 h-24 sm:h-10 bg-accent text-light rounded-full flex-col-reverse sm:flex-row absolute sm:relative bottom-0 sm:bottom-auto end-0 sm:end-auto",
  details:
    "order-5 sm:order-4 w-full sm:w-24 h-10 bg-accent text-light rounded-full",
  pillVertical:
    "flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full",
  big: "w-full h-14 rounded text-light bg-accent inline-flex justify-between",
};

const Counter: React.FC<CounterProps> = ({
  value,
  variant = "helium",
  onDecrement,
  onIncrement,
  className,
  disabled,
}) => {
  const { t } = useTranslation("common");

  return (
    <div
      className={cn("flex overflow-hidden", variantClasses[variant], className)}
    >
      <button
        onClick={onDecrement}
        className={cn(
          "cursor-pointer p-2 transition-colors duration-200 focus:outline-none hover:bg-accent-hover",
          {
            "px-3 py-3 sm:px-2": variant === "single",
            "px-5": variant === "big",
            "hover:!bg-gray-100": variant === "pillVertical",
          }
        )}
      >
        <span className="sr-only">{t("text-minus")}</span>
        <MinusIcon className="h-3 w-3 stroke-2" />
      </button>
      <div
        className={cn(
          "flex-1 flex items-center justify-center text-sm font-semibold",
          variant === "pillVertical" && "text-heading"
        )}
      >
        {value}
      </div>
      <button
        onClick={onIncrement}
        disabled={disabled}
        className={cn(
          "cursor-pointer p-2 transition-colors duration-200 focus:outline-none hover:bg-accent-hover",
          {
            "px-3 py-3 sm:px-2": variant === "single",
            "px-5": variant === "big",
            "hover:!bg-gray-100": variant === "pillVertical",
          }
        )}
        title={disabled ? t("text-out-stock") : ""}
      >
        <span className="sr-only">{t("text-plus")}</span>
        <PlusIcon className="h-3.5 w-3.5 md:h-4.5 md:w-4.5 stroke-2" />
      </button>
    </div>
  );
};

export default Counter;
