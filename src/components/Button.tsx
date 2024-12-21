import { ButtonProps } from "@/types/buttonProps";
import { btnVariants } from "@/utils/variants";
// import { variants } from "@/utils/variants";

export default function Button({ children, variant = "default", className = "" }: ButtonProps) {
	return <button className={`${btnVariants[variant]} ${className}`}>{children}</button>;
}
