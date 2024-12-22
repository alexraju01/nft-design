import Image from "next/image";
import carouselImg from "../../public/carousel-image.png";
import artist from "../../public/carousel-artist.png";

import Label from "./Label";

export default function Trending() {
	return (
		<section className='mb-[134px] h-auto flex justify-between mt-[130px] 2xl:w-[1191px] 2xl:h-[411px] 2xl:mx-[75px]'>
			<div>
				<div>
					<div>
						<Label variant='variant4' className='mb-[27px]'>
							Trending Now
						</Label>
						<p className='text-gray-200 leading-[29.05px] text-[24px]'>Collection</p>
						<div className=' '>
							<p className='text-black text-[64px] font-extrabold leading-[77.45px]'>Night sky </p>
						</div>
					</div>
					<div className=' w-[70%] lg:w-[630px] lg:h-[106px] leading-[36.32px] mb-[20px]'>
						Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum
						dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit
						amet, consectetur adicing elit, sed do eiusmod tempo
					</div>

					<div className='flex items-center gap-[15px]'>
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
				</div>
			</div>
			<div className='relative w-full  lg:w-[437px] lg:h-[411px] '>
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
