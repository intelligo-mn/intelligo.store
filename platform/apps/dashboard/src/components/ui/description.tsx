type Props = {
	className?: string;
	title?: string;
	details?: string | JSX.Element;
	[key: string]: unknown;
};

const Description: React.FC<Props> = ({
	title,
	details,
	className,
	...props
}) => {
	return (
		<div className={className} {...props}>
			{title && (
				<h4 className="text-base font-semibold text-accent mb-2">{title}</h4>
			)}
			{details && <p className="text-sm text-body">{details}</p>}
		</div>
	);
};

export default Description;
