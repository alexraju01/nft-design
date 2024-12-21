import Image from "next/image";
import cardImage1 from "../../public/card-image1.png";
import Label from "./Label";
export default function Card() {
	return (
		<div className='w-[424px] h-[529px] bg-[pink] shadow-dark-100 rounded-[47px] py-[17px] px-[16.5px]'>
			<div className='relative 2xl:w-[391px] h-[227px] '>
				<Image src={cardImage1} alt='summer-image' fill className='object-cover rounded-[30px]' />
			</div>

			<div className='px-[29px]'>
				<div className='mt-[43px]  flex justify-between'>
					<h2 className='text-[24px] font-bold'>Night Sky</h2>
					<Label variant='variant5'>120 NFT</Label>
				</div>

				<div className='mt-[29px]'>
					<p className='text-[#617587] leading-[16.94px]'>Price Range : 0.12BTC - 0.18BTC</p>
					<p className=''>
						Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...
					</p>
				</div>
			</div>
		</div>
	);
}
