import Footer from "@/components/Footer";

export default function pagesLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			{children}
			<Footer />
		</div>
	);
}
