"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
	isAuthenticated: boolean;
	authenticate: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const authenticate = () => {
		setIsAuthenticated(true);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, authenticate }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
