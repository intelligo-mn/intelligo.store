import cn from "classnames";
import { CloseIcon } from "@components/icons/close-icon";

type AlertProps = {
  message: string | undefined | null;
  variant?:
    | "info"
    | "warning"
    | "error"
    | "success"
    | "infoOutline"
    | "warningOutline"
    | "errorOutline"
    | "successOutline";
  closeable?: boolean;
  onClose?: () => void;
  className?: string;
};

const variantClasses = {
  info: "bg-blue-100 text-blue-600",
  warning: "bg-yellow-100 text-yellow-600",
  error: "bg-red-100 text-red-500",
  success: "bg-green-100 text-primary",
  infoOutline: "border border-blue-200 text-blue-600",
  warningOutline: "border border-yellow-200 text-yellow-600",
  errorOutline: "border border-red-200 text-red-600",
  successOutline: "border border-green-200 text-green-600",
};

const Alert: React.FC<AlertProps> = ({
  message = "",
  closeable = false,
  variant = "info",
  className,
  onClose,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between relative rounded py-4 px-5 shadow-sm",
        variantClasses[variant],
        className
      )}
      role="alert"
    >
      <p className="text-sm">{message}</p>
      {closeable && (
        <button
          data-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
          title="Close alert"
          className="ltr:-mr-0.5 rtl:-ml-0.5 -mt-3 flex items-center justify-center rounded-full flex-shrink-0 w-6 h-6 text-red-500 absolute ltr:right-3 rtl:left-3 top-1/2 transition-colors duration-200 hover:bg-gray-200 hover:bg-opacity-50 focus:outline-none focus:bg-gray-200 focus:bg-opacity-50"
        >
          <span aria-hidden="true">
            <CloseIcon className="w-3.5 h-3.5" />
          </span>
        </button>
      )}
    </div>
  );
};

export default Alert;
