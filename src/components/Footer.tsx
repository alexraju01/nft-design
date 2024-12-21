import Image from "next/image";
import logoImage from "../../public/logo-image.png";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className='flex justify-between items-center h-[98px]  mt-[153px] px-[46px] bg-[#E6E9F2]'>
			<div className='relative w-[176px] h-[27px]'>
				<Image src={logoImage} alt='logo-image' fill />;
			</div>
			<div className='flex gap-[42px]'>
				<span>
					<FaFacebookF className='text-[26px]' />
				</span>
				<span className='h-[26px]'>
					<TiSocialTwitter className='text-[26px]' />
				</span>
				<span>
					<IoLogoDiscord className='text-[26px]' />
				</span>
				<span>
					<FaInstagram className='text-[26px]' />
				</span>
			</div>
		</footer>
	);
}
