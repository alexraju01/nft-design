"use client";

import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Header: React.FC = () => {
	const { isAuthenticated } = useAuth();
	const [isBasketOpen, setIsBasketOpen] = useState(false);

	const toggleBasket = () => {
		setIsBasketOpen(!isBasketOpen);
	};

	return (
		<>
			<header className='px-[15px] md:mx-auto max-w-[1512px] xl:px-[79px] w-full flex-col flex justify-between items-center md:flex-row'>
				<Logo />
				{isAuthenticated ? (
					<div className='relative'>
						<Button variant='variant3' className='mt-[33px]' onClick={toggleBasket}>
							Account
						</Button>
						{isBasketOpen && (
							<div className='absolute top-[16px] right-[0px]  w-[492px] h-[981px] bg-white shadow-lg rounded-[21px] border-[2px] border-[#02071D] px-[28px] py-[26px] z-20'>
								<div className='flex justify-between '>
									<div className='flex justify-between items-center gap-[5px]'>
										<div className='rounded-full w-[50px]  h-[50px] bg-[#29627F]'></div>
										<h3 className='text-lg leading-[27.02px]'>STV6Q...4Z7WD </h3>
									</div>
									<Button onClick={toggleBasket} className='rounded-full w-[25px] h-[25px]'>
										{"->"}
									</Button>
								</div>

								<div className='mt-[145px]'>
									<p className='text-[#7B7B7B] leading-[20.93px] text-[14px]'>In your wallet</p>
									<p className='font-semibold leading-[60.8px] text-[36px]'>0.129 BTC</p>
								</div>
								<div className='mt-[96px]'>
									<h4 className='text-[24px] leading-[29.05px] font-extrabold'>Yout NFTs</h4>
								</div>

								{/* nft container */}
								<div className='mt-[104px] text-center text-gray-200 text-[24px] '>
									You don&apos;t own any NFTs yet
								</div>
								<div className='flex items-center justify-center'>
									<Button variant='default' className='mt-[73px]' onClick={toggleBasket}>
										Start Shopping
									</Button>
								</div>
							</div>
						)}
					</div>
				) : (
					<Link href='/connect'>
						<Button variant='variant3' className='mt-[33px]'>
							Connect wallet
						</Button>
					</Link>
				)}
			</header>
		</>
	);
};

export default Header;
