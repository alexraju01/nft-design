import { btnVariants } from "@/utils/variants";

export type ButtonProps = {
	children: React.ReactNode;
	variant?: keyof typeof btnVariants;
	className?: string;
};
