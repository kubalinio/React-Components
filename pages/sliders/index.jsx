import Link from 'next/link';
import React from 'react';

const SlidersPage = () => {
	return (
		<section className='section'>
			<h1>All Sliders</h1>

			<ul>
				<Link href={'/sliders/slider-frame-motion'}>
					<li>Slider Framer Motion</li>
				</Link>
				<Link href={'/sliders/slider-ecommerce'}>
					<li>Slider Ecommerce by XKom</li>
				</Link>
				{/* <Link href={'/sidebars/sidebar3'}>
					<li>Sidebar Type 3</li>
				</Link> */}
			</ul>
		</section>
	);
};

export default SlidersPage;
