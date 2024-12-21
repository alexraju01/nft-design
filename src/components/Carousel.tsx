import Image from "next/image";
import img from "../../public/carousel-image.png";
import Label from "./Label";
export default function Carousel() {
	return (
		<section className='mt-[16px] w-full px-[20px] h-auto flex justify-between 2xl:px-[75px] 2xl:w-[1352px] 2xl:h-[518px] bg-[#E6E9F2] rounded-[30px]'>
			<div>
				<div>
					{/* <p>Trending now</p> */}
					<Label variant='variant4'>Trending now</Label>
					<div>
						<p>Night sky collection</p>
						<p>With the stars</p>
					</div>
					<div>
						<span>icons</span>
						<div>
							<p>Artist</p>
							<p>Léa Jacquot</p>
						</div>
					</div>
				</div>
			</div>
			<div className='relative  w-[437px] h-[411px] my-[53px]'>
				{/* <img src={img} alt='carousel-image' className='object-cover' /> */}
				<Image
					src={img}
					quality={100}
					alt='carousel-image'
					fill
					className='object-cover rounded-[52px]'
				/>
			</div>
		</section>
	);
}
// }
// import img from "../../public/carousel-image.png";

// export default function Carousel() {
// 	return (
// 		<div className='mt-[16px] w-full h-[200px] 2xl:w-[1352px] 2xl:h-[518px] bg-[#E6E9F2] rounded-[30px]'>
// 			<div>
// 				<div>
// 					<p>Trending now</p>
// 				</div>
// 				<div className='w-[437px] h-[411px]'>
// 					<img src={img.src} alt='carousel-image' className='w-full h-full object-cover ' />
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
