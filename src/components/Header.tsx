"use client";
import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useBasket } from "@/context/BasketContext";
import Image from "next/image";
import { NFT } from "@/types/NFTTypes";

const Header: React.FC = () => {
	const { isAuthenticated } = useAuth();
	const [isBasketOpen, setIsBasketOpen] = useState(false);
	const { basket } = useBasket();

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
							<div className='absolute px-0 w-full top-0 md:top-[16px] md:right-[0px] md:w-[400px] lg:w-[492px] max-h-[981px] bg-white shadow-lg rounded-[21px] border-[2px] border-[#02071D] 2xl:px-[28px] py-[26px] z-20 '>
								<div className='flex justify-between items-center px-[28]'>
									<div className='flex items-center gap-[5px]'>
										<div className='rounded-full w-[50px]  h-[50px] bg-[#29627F]'></div>
										<h3 className='text-lg leading-[27.02px]'>STV6Q...4Z7WD</h3>
									</div>
									<Button onClick={toggleBasket} className='rounded-full w-6 h-6'>
										{"->"}
									</Button>
								</div>

								<div className='mt-[145px]'>
									<h4 className='text-[24px] leading-[29.05px] font-extrabold mb-[20px]'>
										Your NFTs
									</h4>
									{basket.length > 0 ? (
										<div className='max-h-[500px] overflow-y-auto space-y-[10px]'>
											<ul className='space-y-[10px] px-[32px]'>
												{basket.map(({ title, cardImage }: NFT, index) => (
													<li
														key={index}
														className='relative h-[150px] 2xl:w-[391px] 2xl:h-[227px]'>
														<Image
															src={cardImage}
															alt={title}
															fill
															className='object-cover rounded-[30px]'
														/>
													</li>
												))}
											</ul>
										</div>
									) : (
										<div className='mt-[104px] text-center text-gray-200 text-[24px]'>
											You don&apos;t own any NFTs yet
										</div>
									)}
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
