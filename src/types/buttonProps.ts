import { btnVariants } from "@/utils/variants";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: keyof typeof btnVariants;
	className?: string;
}
