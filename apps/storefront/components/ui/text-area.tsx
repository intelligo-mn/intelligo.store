import React, { TextareaHTMLAttributes } from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	inputClassName?: string;
	labelKey?: string;
	name: string;
	placeholderKey?: string;
	errorKey?: string;
	shadow?: boolean;
	variant?: "normal" | "solid" | "outline";
}

const variantClasses = {
	normal:
		"bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body",
	solid:
		"bg-gray-100 border border-gray-100 focus:bg-white focus:border-primary",
	outline: "border border-gray-300 focus:border-primary",
};

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
	const { t } = useTranslation();
	const {
		className,
		labelKey,
		name,
		placeholderKey,
		errorKey,
		variant = "normal",
		shadow = false,
		inputClassName,
		...rest
	} = props;
	return (
		<div className={className}>
			{labelKey && (
				<label
					htmlFor={name}
					className="block text-gray-600 font-semibold text-sm leading-none mb-3"
				>
					{t(labelKey)}
				</label>
			)}
			<textarea
				id={name}
				name={name}
				className={cn(
					"px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0",
					shadow && "focus:shadow",
					variantClasses[variant],
					inputClassName
				)}
				autoComplete="off"
				spellCheck="false"
				rows={4}
				ref={ref}
				// @ts-ignore
				placeholder={t(placeholderKey)}
				{...rest}
			/>
			{errorKey && <p className="my-2 text-xs text-red-500">{t(errorKey)}</p>}
		</div>
	);
});

export default TextArea;
