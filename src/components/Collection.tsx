import Card from "./Card";
import artist1 from "../../public/carousel-artist.png";
import artist2 from "../../public/artist2.png";
import artist3 from "../../public/artist3.png";
import cardImage from "../../public/card-image1.png";
import cardImage2 from "../../public/card-image2.png";
import cardImage3 from "../../public/card-image3.png";

export default function Collection() {
	return (
		<section className='mt-[121px]  w-full sm:px-[25px]'>
			<h2 className='text-[24px] font-extrabold mb-[41px]'>Collection</h2>
			<div className='grid gap-[40px] place-items-center w-full sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
				<Card title='Night Sky' artist='Léa Jacquot' img={artist1} cardImage={cardImage} />
				<Card title='Future' artist='Léa Jacquot' img={artist2} cardImage={cardImage2} />
				<Card title='Mother nature' artist='Maria ' img={artist3} cardImage={cardImage3} />
			</div>
		</section>
	);
}
