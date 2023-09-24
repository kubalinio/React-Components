// Style of Dots Added to globals


// import Image from 'next/image';

// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";

// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'



// const slides = [
//     {
//         name: 'Sprzęt gamingowy taniej do 1000',
//         img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
//         imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
//         link: '/',
//     },
//     {
//         name: 'Sprzęt gamingowy taniej do 1000',
//         img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
//         imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,862de5396d9049e7a7541b1e0c60bcd9.jpg?filters=trim',
//         link: '/',
//     },
//     {
//         name: 'Sprzęt gamingowy taniej do 1000',
//         img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
//         imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
//         link: '/',
//     },
//     {
//         name: 'Sprzęt gamingowy taniej do 1000',
//         img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
//         imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,862de5396d9049e7a7541b1e0c60bcd9.jpg?filters=trim',
//         link: '/',
//     },
//     {
//         name: 'Sprzęt gamingowy taniej do 1000',
//         img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
//         imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
//         link: '/',
//     },
// ];


// function SampleNextArrow(props) {
//     const { onClick } = props;
//     return (
//         <div
//             className='absolute hidden lg:flex bg-white rounded-full right-2 bottom-[42%] shadow-sm shadow-gray-600 cursor-pointer transition-all duration-200 hover:bg-gray-300 hover:shadow-md hover:shadow-gray-700'
//             onClick={onClick}>
//             <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowRight /></span>
//         </div>
//     );
// }

// function SamplePrevArrow(props) {
//     const { onClick } = props;
//     return (
//         <div
//             className='absolute hidden lg:flex bg-white rounded-full left-2 bottom-[42%] shadow-sm shadow-gray-600 cursor-pointer z-10 transition-all duration-200 hover:bg-gray-300 hover:shadow-md hover:shadow-gray-700 '
//             onClick={onClick}>
//             <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowLeft /></span>
//         </div>
//     );
// }


// const settings = {
//     dots: true,
//     arrows: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,

//     customPaging: i => {
//         return (
//             <button className='w-full' >
//                 {slides[i].name}
//             </button>
//         )
//     },
//     responsive: [
//         {
//             breakpoint: 1080,
//             settings: {
//                 className: "center",
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 variableWidth: false,
//                 arrows: true,
//             }
//         },


//         {
//             breakpoint: 900,
//             settings: {
//                 className: "center",
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: false,
//                 variableWidth: false,
//                 arrows: false,
//                 dots: false,

//             }
//         },

//         {
//             breakpoint: 768,
//             settings: {
//                 dots: false,
//                 arrows: false,
//                 swipeToSlide: true,
//                 infinite: true,
//                 centerMode: true,
//                 slidesToShow: 1,
//                 centerPadding: "5px",
//                 variableWidth: true,

//             }
//         }
//     ]
// };


// const SliderEcommerce = () => {
//     // const [currentSlide, setCurrentSlide] = useState(null)

//     // console.log(currentSlide)

//     return (
//         <div className='w-full mt-20' >

//             <Slider {...settings} >

//                 {slides.map((slide, i) => (

//                     <div key={slide.name + i} style={{ width: 325 }} className='w-full px-3 lg:px-6' >

//                         <a key={slide.name + i} href={slide.link} className='relative w-full h-full mx-2 overflow-hidden' >

//                             <span className='md:hidden'>

//                                 <Image loading='lazy' width={800} height={255} src={slide.img} alt={slide.name} className='object-cover w-full h-full rounded-2xl max-md:max-h-[175px] max-md:max-w-[325px]' />
//                             </span>

//                             {/* Large Screen */}
//                             <span className='hidden w-full h-full md:block'>
//                                 <Image loading='lazy' width={1200} height={500} src={slide.imgLarge} alt={slide.name} className='object-cover w-full h-full min-h-[250px] rounded-3xl ' />
//                             </span>
//                         </a>
//                     </div>

//                 ))}
//             </Slider>

//         </div>
//     );

// };

// export default SliderEcommerce;
