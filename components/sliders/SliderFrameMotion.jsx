import classes from './SliderFrameMotion.module.scss';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const images = [
	{
		src: 'https://cdn.pixabay.com/photo/2020/11/26/15/28/woman-5779323_960_720.jpg',
	},
	{
		src: 'https://cdn.pixabay.com/photo/2022/12/30/10/52/mountain-7686642_960_720.jpg',
	},
	{
		src: 'https://cdn.pixabay.com/photo/2022/12/30/10/40/red-sky-7686623_960_720.jpg',
	},
	{
		src: 'https://cdn.pixabay.com/photo/2022/12/02/18/37/middle-spotted-woodpecker-7631440_960_720.jpg',
	},
	{
		src: 'https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_960_720.jpg',
	},
	{
		src: 'https://cdn.pixabay.com/photo/2018/05/09/19/29/beech-3385957_960_720.jpg',
	},
];

const SliderFrameMotion = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		// Oblicza szerokość karuzeli dla kart
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<div className={classes.box}>
			<motion.div ref={carousel} className={classes.carousel} whileTap={{ cursor: 'grabbing' }}>
				<motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className={classes.inner}>
					{images.map(image => (
						<motion.div className={classes.item} key={image}>
							<img src={image.src} alt='' />
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default SliderFrameMotion;
