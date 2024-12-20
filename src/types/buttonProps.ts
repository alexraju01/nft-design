import { variants } from "@/utils/const";

export type ButtonProps = {
	children: React.ReactNode;
	variant?: keyof typeof variants;
	className?: string;
};
