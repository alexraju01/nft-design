"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const NFTWallet: React.FC = () => {
	const { isAuthenticated, authenticate } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.push("/home");
		}
	}, [isAuthenticated, router]);

	return (
		<button className='w-[191px] h-[174px] rounded-[19px] bg-[#FAFAFA]' onClick={authenticate} />
	);
};

export default NFTWallet;
