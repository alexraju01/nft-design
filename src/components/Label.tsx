import { LabelProps } from "@/types/labelProps";
import { labelVartiants } from "@/utils/variants";

export default function Label({ children, variant = "default", className }: LabelProps) {
	return <p className={`${labelVartiants[variant]} ${className}`}>{children}</p>;
}
