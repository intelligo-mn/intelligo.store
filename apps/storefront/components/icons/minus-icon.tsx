const MinusIcon = ({
	color = "currentColor",
	width = "10px",
	height = "2px",
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 12 1.5"
		>
			<rect
				data-name="Rectangle 970"
				width={width}
				height={height}
				fill={color}
			/>
		</svg>
	);
};

export default MinusIcon;
