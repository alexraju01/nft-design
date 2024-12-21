import Image from "next/image";
import Label from "./Label";
import { CardProps } from "@/types/cardProps";
import Button from "./Button";

export default function Card({ title, artist, img, cardImage }: CardProps) {
	return (
		<div className='w-full 2xl:w-[424px] 2xl:h-[529px] bg-[#FAFAFA] shadow-dark-200 rounded-[47px] p-[16.5px] flex flex-col hover:scale-110 hover:shadow-dark-500 transition-all duration-300'>
			{/* Card Image */}
			<div className='relative w-full h-[227px] group'>
				{/* Dark overlay */}
				<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-[30px] z-10'></div>

				<Image
					src={cardImage}
					alt='summer-image'
					fill
					className='object-cover rounded-[30px] z-0'
				/>

				{/* Button */}
				<div className='absolute inset-0  z-20 pointer-events-none group-hover:pointer-events-auto'>
					<Button
						variant='variant5'
						className='opacity-0 absolute inset-0 m-auto group-hover:opacity-100 transition-opacity duration-300'>
						Go to collection {"-->"}
					</Button>
				</div>
			</div>

			{/* Card Content */}
			<div className='flex-1 flex flex-col px-[15px] xl:px-[29px]'>
				{/* Title and Label */}
				<div className='mt-[43px] flex items-center justify-between'>
					<h2 className='text-[24px] font-bold'>{title}</h2>
					<div className='flex-shrink-0'>
						<Label variant='variant5' className='lg:px-[10px] 2xl:px-[35px] whitespace-nowrap'>
							120 NFT
						</Label>
					</div>
				</div>

				{/* Description */}
				<div className='mt-[29px] flex-1'>
					<p className='text-[#617587] leading-[16.94px]'>Price Range: 0.12BTC - 0.18BTC</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
				</div>

				{/* Artist Info */}
				<div className='flex mt-[14px] items-center gap-[15px]'>
					<div className='relative w-[68px] h-[68px]'>
						<Image
							src={img}
							quality={100}
							alt='carousel-image'
							fill
							className='object-cover rounded-full'
						/>
					</div>
					<div>
						<p className='text-gray-200'>Artist</p>
						<p>{artist}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
