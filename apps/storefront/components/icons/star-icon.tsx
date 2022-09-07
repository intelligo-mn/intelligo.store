const StarIcon = ({
	color = "#FFC107",
	width = "16.5px",
	height = "16px",
	className= '',
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 16.696 16"
			className={className}
		>
      <path id="star" d="M16.652,6.538a.886.886,0,0,0-.764-.61L11.07,5.49,9.164,1.03a.887.887,0,0,0-1.632,0L5.627,5.49l-4.82.438A.888.888,0,0,0,.3,7.48l3.642,3.194L2.872,15.406a.886.886,0,0,0,1.32.959L8.348,13.88,12.5,16.365a.887.887,0,0,0,1.32-.959L12.75,10.675l3.642-3.194a.888.888,0,0,0,.26-.943Zm0,0" transform="translate(0 -0.491)" fill={color}/>
		</svg>
	);
};

export default StarIcon;
