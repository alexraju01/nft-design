import { ButtonProps } from "@/types/buttonProps";
import { btnVariants } from "@/utils/variants";
// import { variants } from "@/utils/variants";

export default function Button({
	children,
	variant = "default",
	className = "",
	...rest // Spread operator for other native button props
}: ButtonProps) {
	return (
		<button
			{...rest} // Pass down native button attributes
			className={`${btnVariants[variant]} ${className}`}>
			{children}
		</button>
	);
}
