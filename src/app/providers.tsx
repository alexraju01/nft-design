"use client"; // Required for using hooks like useState or context APIs

import { AuthProvider } from "@/context/AuthContext";
import { BasketProvider } from "@/context/BasketContext";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<AuthProvider>
			<BasketProvider>{children}</BasketProvider>
		</AuthProvider>
	);
};

export default Providers;
