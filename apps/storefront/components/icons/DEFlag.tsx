export const DEFlag = ({ width = "640px", height = "480px" }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 480"
			width={width}
			height={height}
		>
			<path fill="#ffce00" d="M0 320h640v160H0z" />
			<path d="M0 0h640v160H0z" />
			<path fill="#d00" d="M0 160h640v160H0z" />
		</svg>
	);
};
