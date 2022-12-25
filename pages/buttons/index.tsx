import Link from 'next/link';

const ButtonsPage = () => {
	return (
		<section className='section'>
			<h1>All Projects</h1>
			<ul>
				<Link href={`/buttons/dropdownButton`}>
					<li>Dropdown Button</li>
				</Link>
				<Link href={`/buttons/dropdownButton2`}>
					<li>Dropdown Button 2</li>
				</Link>
				<Link href={`/buttons/deletingButton`}>
					<li>Deleting Button</li>
				</Link>
				<Link href={`/buttons/deletingButton2`}>
					<li>Deleting Button 2</li>
				</Link>
				<Link href={`/buttons/sendButton`}>
					<li>Send Button</li>
				</Link>
				<Link href={`/buttons/paymentButton`}>
					<li>Payment Button</li>
				</Link>
			</ul>
		</section>
	);
};

export default ButtonsPage;
