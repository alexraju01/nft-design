import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import Label from "./Label";
import { NFTTypes } from "@/types/NFTTypes";

export default function NFTCard({ title, cardImage }: NFTTypes) {
	return (
		<div className='  w-full  h-[498px] 2xl:w-[424px]  shadow-dark-200 rounded-[47px] p-[16.5px] flex flex-col hover:scale-110 hover:shadow-dark-500 transition-all duration-300'>
			<div className='relative w-full h-[345px] group'>
				{/* Dark overlay that take the entire image shape applied on hover*/}
				<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-[30px] z-10'></div>

				<Image src={cardImage} alt={title} fill className='object-cover rounded-[30px] z-0' />

				{/* Button */}
				<div className='absolute inset-0  z-20 pointer-events-none group-hover:pointer-events-auto'>
					<Link href='/collection'>
						<Button
							variant='variant5'
							className='opacity-0 absolute inset-0 m-auto group-hover:opacity-100 transition-opacity duration-300'>
							Buy →
						</Button>
					</Link>
				</div>
			</div>
			<div className='mt-[45px] flex items-center justify-between '>
				<h2 className='text-[24px] font-bold'>{title}</h2>
				<div className='flex-shrink-0'>
					<Label variant='variant6' className='lg:px-[10px] 2xl:px-[35px] whitespace-nowrap'>
						0.12 BTC
					</Label>
				</div>
			</div>
		</div>
	);
}
