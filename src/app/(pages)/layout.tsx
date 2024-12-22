import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function pagesLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			<main className='w-full px-[15px] md:mx-auto max-w-[1512px] xl:px-[79px]'>{children}</main>
			<Footer />
		</div>
	);
}
