import NFTCard from "./NFTCard";

export default function NFTS() {
	return (
		<section>
			<h2 className='mb-[54px]'>Collections</h2>

			<div className='flex gap-[40px]'>
				<NFTCard />
				<NFTCard />
				<NFTCard />
			</div>
		</section>
	);
}
