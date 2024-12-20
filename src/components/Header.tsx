import Button from "./Button";

export default function Header() {
	return (
		<header className='w-full flex-col flex justify-between items-center  md:flex-row'>
			<h1 className='flex items-baseline font-extrabold text-[32px] leading-[38.73px] mt-[47px] h-[39px] w-[255px]'>
				MARKETPLACE
				<span className='w-[5px] h-[5px] bg-black ml-1'></span>
			</h1>

			<Button variant='variant3' className='mt-[33px] '>
				Connect wallet
			</Button>
		</header>
	);
}
