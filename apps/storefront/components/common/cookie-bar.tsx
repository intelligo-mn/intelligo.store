import cn from "classnames";

interface CookieBarProps {
	className?: string;
	title: string;
	description?: string;
	hide?: boolean;
	action?: React.ReactNode;
}

const CookieBar: React.FC<CookieBarProps> = ({
	title,
	description,
	className,
	action,
	hide,
}) => {
	return (
		<div
			className={cn(
				"text-center p-5 bg-white text-sm flex-row justify-center items-center font-medium fixed bottom-0 w-full z-30 transition-all duration-300 ease-out shadow-cookies",
				{
					transform: true,
					"translate-y-0 opacity-100": !hide,
					"translate-y-full opacity-0": hide,
				},
				className
			)}
		>
			<span className="inline-block mb:block mb-3.5 leading-6">{title}</span>
			<span className="inline-block ltr:md:ml-3 rtl:md:mr-3">{description}</span>
			{action && action}
		</div>
	);
};

export default CookieBar;
