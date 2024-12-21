import { labelVartiants } from "@/utils/variants";

export type LabelProps = {
	children: React.ReactNode;
	variant?: keyof typeof labelVartiants;
	className?: string;
};
