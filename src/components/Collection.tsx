import Card from "./Card";

export default function Collection() {
	return (
		<section className='mt-[121px]  w-full sm:px-[25px]'>
			<h2 className='text-[24px] font-extrabold mb-[41px]'>Collection</h2>
			<div className='grid gap-[40px] place-items-center w-full sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
				<Card title='Night Sky' artist='Léa Jacquot' />
				<Card title='Future' artist='Léa Jacquot' />
				<Card title='Mother nature' artist='Maria ' />
			</div>
		</section>
	);
}
