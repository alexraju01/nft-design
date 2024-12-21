import CarouseIndicator from "@/components/CarouseIndicator";
import Carousel from "@/components/Carousel";
import Collection from "@/components/Collection";
import Header from "@/components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<CarouseIndicator />
			<Carousel />
			<Collection />
		</>
	);
}
