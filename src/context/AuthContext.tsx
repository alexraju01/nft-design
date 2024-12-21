"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the AuthContextType interface
interface AuthContextType {
	isAuthenticated: boolean;
	authenticate: () => void;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the props for the AuthProvider component
interface AuthProviderProps {
	children: ReactNode;
}

// AuthProvider component
export function AuthProvider({ children }: AuthProviderProps) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Function to handle authentication
	const authenticate = () => {
		setIsAuthenticated(true);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, authenticate }}>
			{children}
		</AuthContext.Provider>
	);
}

// Custom hook to consume the AuthContext
export function useAuth(): AuthContextType {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
