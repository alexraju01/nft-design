import { variants } from "@/utils/const";

export default function Button({ children, variant, className = "" }) {
	return (
		<button className={variant ? variants[variant] : variants["default"]}>
			{children}
		</button>
	);
}

// return (
// 	<button
// 		{...props}
// 		className={`${
// 			props.variant ? variants[props.variant] : variants["default"]
// 		}  ${props.className}`}></button>
// );
