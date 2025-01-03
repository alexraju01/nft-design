import Image from "next/image";
import carouselImg from "../../../public/carousel-image.png";
import artist from "../../../public/carousel-artist.png";

import Label from "../Label";
import Button from "../Button";
import BuyButton from "../BuyButton";
import Link from "next/link";
export default function Carousel() {
	return (
		<section className='mt-[16px]  px-[20px] h-auto flex justify-between 2xl:px-[75px] 2xl:w-[1352px] 2xl:h-[518px] bg-[#E6E9F2] rounded-[30px]'>
			<div>
				<div className='mt-[71px] '>
					<Label variant='variant4'>Trending now</Label>
					<div className='mt-[20px] 2xl:mt-[37px]'>
						<p className='text-gray-200 text-[24px]'>Night sky collection</p>
						<p className='text-black font-extrabold text-[55px] 2xl:text-[64px] md:leading-[50px] leading-[77.45px]'>
							With the stars
						</p>
					</div>
					<div className='flex mt-[14px] items-center gap-[15px]'>
						<div className=' relative  size-[68px]'>
							<Image
								src={artist}
								quality={100}
								alt='carousel-image'
								fill
								className='object-cover rounded-full'
							/>
						</div>
						<div className=''>
							<p className='text-gray-200'>Artist</p>
							<p>Léa Jacquot</p>
						</div>
					</div>
					<div className='flex gap-[16px] flex-col 2xl:flex-row  2xl:mt-[44px]'>
						<BuyButton />
						<Link href='/collection'>
							<Button variant='variant3'>See Collection</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className='relative  w-[437px] h-[411px] my-[53px]'>
				<Image
					src={carouselImg}
					quality={100}
					alt='carousel-image'
					fill
					className='object-cover rounded-[52px]'
				/>
			</div>
		</section>
	);
}
