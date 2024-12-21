"use client";

import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import { useAuth } from "@/context/AuthContext";

const Header: React.FC = () => {
	const { isAuthenticated } = useAuth();

	return (
		<header className='w-full flex-col flex justify-between items-center md:flex-row'>
			<Logo />
			{isAuthenticated ? (
				<Button variant='variant3' className='mt-[33px]'>
					Connected
				</Button>
			) : (
				<Link href='/connect'>
					<Button variant='variant3' className='mt-[33px]'>
						Connect wallet
					</Button>
				</Link>
			)}
		</header>
	);
};

export default Header;
