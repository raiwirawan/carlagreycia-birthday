export default function CircleIcon({
	size = 24,
	color = "#000000",
	className = "",
}) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="10" fill={color} />
		</svg>
	);
}
