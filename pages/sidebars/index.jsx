import Link from 'next/link';
import React from 'react';

const allSidebarsPage = () => {
	return (
		<section className='section'>
			<h1>All Sidebars</h1>
			<ul>
				<Link href={'/sidebars/sidebar'}>
					<li>Sidebar Twitter</li>
				</Link>
				<Link href={'/sidebars/sidebar5'}>
					<li>Sidebar Type 5</li>
				</Link>
				<Link href={'/sidebars/sidebar3'}>
					<li>Sidebar Type 3</li>
				</Link>
			</ul>
		</section>
	);
};

export default allSidebarsPage;
