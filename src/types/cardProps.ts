import { StaticImageData } from "next/image";

export type CardProps = {
	title: string;
	artist?: string;
	img: StaticImageData;
	cardImage: StaticImageData;
};
