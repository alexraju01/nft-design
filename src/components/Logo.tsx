import Link from "next/link";

export default function Logo() {
	return (
		<Link href='/home'>
			<p className='flex items-baseline font-extrabold text-[32px] leading-[38.73px] mt-[47px] h-[39px] w-[255px]'>
				MARKETPLACE
				<span className='w-[5px] h-[5px] bg-black ml-1'></span>
			</p>
		</Link>
	);
}
