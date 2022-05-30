import NextLink, { LinkProps as NextLinkProps } from "next/link";
import cn from "classnames";

const classes = {
  root: "inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow",
  normal:
    "bg-accent text-light border border-transparent hover:bg-accent-hover",
  outline:
    "border border-border-400 bg-transparent hover:text-light hover:bg-accent hover:border-accent",
  disabled:
    "border border-border-base bg-gray-300 border-border-400 text-body cursor-not-allowed",
  disabledOutline: "border border-border-base text-muted cursor-not-allowed",
  small: "px-3 py-0 h-9 text-sm h-10",
  medium: "px-5 py-0 h-12",
  big: "px-10 py-0 h-14",
};

export interface ButtonProps {
  className?: string;
  variant?: "normal" | "outline";
  size?: "big" | "medium" | "small";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const LinkButton: React.FC<NextLinkProps & ButtonProps> = ({
  href,
  children,
  className,
  variant = "normal",
  size = "medium",
  active,
  disabled = false,
  ...props
}) => {
  const rootClassName = cn(
    classes.root,
    {
      [classes.normal]: !disabled && variant === "normal",
      [classes.disabled]: disabled && variant === "normal",
      [classes.outline]: !disabled && variant === "outline",
      [classes.disabledOutline]: disabled && variant === "outline",
      [classes.small]: size === "small",
      [classes.medium]: size === "medium",
      [classes.big]: size === "big",
    },
    className
  );

  return (
    <NextLink href={href}>
      <a {...props} className={cn(rootClassName, className)}>
        {children}
      </a>
    </NextLink>
  );
};

export default LinkButton;
