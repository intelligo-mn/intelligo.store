const CartIcon = ({
	color = "currentColor",
	width = "18px",
	height = "18px",
	className = "md:w-4 xl:w-5 md:h-4 xl:h-5",
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 20 20"
			className={className}
		>
			<path
				d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z"
				transform="translate(-2 -2)"
				fill={color}
				fillRule="evenodd"
			/>
		</svg>
	);
};

export default CartIcon;
