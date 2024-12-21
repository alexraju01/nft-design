import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
	return (
		<header className='w-full flex-col flex justify-between items-center  md:flex-row'>
			<Logo />
			<Button variant='variant3' className='mt-[33px] '>
				Connect wallet
			</Button>
		</header>
	);
}
