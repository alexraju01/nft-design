import NFTWallet from "@/components/NFTWallet";

export default function Page() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-[#E6E9F2]'>
			<h1 className='text-[32px] font-extrabold'>Choose the wallet to connect</h1>

			<div className='flex gap-[63px] mt-[129px]'>
				<NFTWallet />
				<NFTWallet />
				<NFTWallet />

				{/* <button className='w-[191px] h-[174px] rounded-[19px] bg-[#FAFAFA]'></button> */}
				{/* <button className='w-[191px] h-[174px] rounded-[19px] bg-[#FAFAFA]'></button> */}
				{/* <button className='w-[191px] h-[174px] rounded-[19px] bg-[#FAFAFA]'></button> */}
			</div>
		</div>
	);
}
