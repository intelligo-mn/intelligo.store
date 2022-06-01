import cn from "classnames";
import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: "normal" | "outline" | "custom";
	size?: "big" | "medium" | "small";
	active?: boolean;
	loading?: boolean;
	disabled?: boolean;
}
const classes = {
	root: "text-sm xl:text-[15px] 2xl:text-base inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-0 focus:bg-opacity-80",
	normal:
		"bg-accent text-light border border-transparent hover:bg-accent-hover",
	custom: "border border-transparent",
	outline:
		"border border-border-400 bg-transparent text-body hover:text-light hover:bg-accent hover:border-accent",
	loading:
		"h-4 w-4 ms-2 rounded-full border-2 border-transparent border-t-2 animate-spin",
	disabled:
		"border border-border-base bg-gray-300 border-border-400 text-body cursor-not-allowed",
	disabledOutline: "border border-border-base text-muted cursor-not-allowed",
	small: "px-3 py-0 h-9 text-sm h-10",
	medium: "px-5 py-0 h-12",
	big: "px-10 py-0 h-14",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			className,
			variant = "normal",
			size = "medium",
			children,
			active,
			loading = false,
			disabled = false,
			...rest
		} = props;
		const classesName = cn(
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
			<button
				aria-pressed={active}
				data-variant={variant}
				ref={ref}
				className={classesName}
				disabled={disabled}
				{...rest}
			>
				{children}
				{loading && (
					<span
						className={classes.loading}
						style={{
							borderTopColor:
								variant === "outline" ? "currentColor" : "#ffffff",
						}}
					/>
				)}
			</button>
		);
	}
);

export default Button;
