import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

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

const SliderSplide = () => {

	return (
		<div className='w-72 h-72'>

			<Splide aria-label="My Favorite Images">
				<SplideSlide>
					<img src="https://cdn.pixabay.com/photo/2020/11/26/15/28/woman-5779323_960_720.jpg" alt="Image 1" />
				</SplideSlide>
				<SplideSlide>
					<img src="https://cdn.pixabay.com/photo/2020/11/26/15/28/woman-5779323_960_720.jpg" alt="Image 2" />
				</SplideSlide>
			</Splide>

		</div>
	);
};

export default SliderSplide;
