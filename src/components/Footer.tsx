import Image from "next/image";
import logoImage from "../../public/logo-image.png";

export default function Footer() {
	return (
		<footer className='flex justify-between items-center h-[98px]  mt-[153px] px-[46px] bg-[#E6E9F2]'>
			<div className='relative w-[176px] h-[27px]'>
				<Image src={logoImage} alt='logo-image' fill />;
			</div>
			<div>
				<span>facebook</span>
				<span>tweeter</span>
				<span>discord</span>
				<span>insta</span>
			</div>
		</footer>
	);
}
