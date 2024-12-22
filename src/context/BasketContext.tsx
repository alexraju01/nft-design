"use client";

import { BasketContextType, NFT } from "@/types/NFTTypes";
import { createContext, useContext, useState } from "react";

const BasketContext = createContext<BasketContextType | null>(null);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [basket, setBasket] = useState<NFT[]>([]);

	const addToBasket = (nft: NFT) => {
		// Prevent duplicates by checking if the NFT already exists
		const isAlreadyInBasket = basket.some((item) => item.title === nft.title);

		if (!isAlreadyInBasket) {
			setBasket((prevBasket) => [...prevBasket, nft]);
		} else {
			return;
		}
	};

	return (
		<BasketContext.Provider value={{ basket, addToBasket }}>{children}</BasketContext.Provider>
	);
};

export const useBasket = () => useContext(BasketContext);
