import { StaticImageData } from "next/image";

export type NFT = {
	title: string;
	cardImage: StaticImageData;
};

export interface BasketContextType {
	basket: NFT[];
	addToBasket: (nft: NFT) => void;
}
