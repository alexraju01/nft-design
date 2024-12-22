import NFTCard from "./NFTCard";

import nftImage from "../../public/card-image1.png";
import nftImage2 from "../../public/carousel-image.png";
import nftImage3 from "../../public/nft-card3.png";
import nftImage4 from "../../public/nft-card4.png";
import nftImage5 from "../../public/nft-card5.png";
import nftImage6 from "../../public/nft-card6.png";

export default function NFTS() {
	return (
		<section>
			<h2 className='mb-[54px] leading-[29.05px] text-[24px] font-extrabold'>NFTs</h2>

			<div className='grid mx-5 gap-[40px] sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3'>
				<NFTCard title='Night is coming' cardImage={nftImage} />
				<NFTCard title='With the stars' cardImage={nftImage2} />
				<NFTCard title='Summer' cardImage={nftImage3} />
				<NFTCard title='Quiet' cardImage={nftImage4} />
				<NFTCard title='Travel' cardImage={nftImage5} />
				<NFTCard title='The rain' cardImage={nftImage6} />
			</div>
		</section>
	);
}
