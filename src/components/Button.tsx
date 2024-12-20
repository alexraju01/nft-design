import { ButtonProps } from "@/types/buttonProps";
import { variants } from "@/utils/const";

export default function Button({ children, variant = "default", className = "" }: ButtonProps) {
	return <button className={`${variants[variant]} ${className}`}>{children}</button>;
}
