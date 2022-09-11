const SearchIcon = ({
	color = "currentColor",
	width = "17px",
	height = "18px",
	className = "md:w-4 xl:w-5 md:h-4 xl:h-5",
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 18.942 20"
			className={className}
		>
			<path
				d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
				transform="translate(-367.297 -371.285)"
				fill={color}
				fillRule="evenodd"
			/>
		</svg>
	);
};

export default SearchIcon;
