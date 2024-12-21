"use client";
import Link from "next/link";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";

export default function BuyButton() {
	const { isAuthenticated } = useAuth();

	return (
		<>
			{isAuthenticated ? (
				<Button>Buy</Button>
			) : (
				<Link href='/connect'>
					<Button>Buy</Button>
				</Link>
			)}
		</>
	);
}
