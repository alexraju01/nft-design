import Button from "./Button";

export default function Header() {
	return (
		<header className='flex justify-between items-center h-auto'>
			<h1 className='font-extrabold text-[32px] mt-[47px] h-39-[px] w-[255px] '>
				MARKETPLACE.
			</h1>
			{/* <button className='w-[203px] h-[67px]  mt-[33px] border border-[#23252B] rounded-[87px] px-[42px] '>
        Connect wallet
    </button> */}
			<Button variant='variant3'>Connect wallet</Button>
		</header>
	);
}
