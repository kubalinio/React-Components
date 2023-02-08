import Image from 'next/image';

import "slick-carousel/slick/slick.css";

import Slider from 'react-slick'
import { useState } from 'react';

const slides = [
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
        link: '/',
    },
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
        link: '/',
    },
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
        link: '/',
    },
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
        link: '/',
    },
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
        link: '/',
    },
];



const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,

    customPaging: i => {
        return (
            <button className='w-full' >
                {slides[i].name}
            </button>
        )
    },
    responsive: [

        {
            breakpoint: 900,
            settings: {

                className: "center",
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                variableWidth: false,
                arrows: false,
                dots: false,

            }
        },

        {
            breakpoint: 768,
            settings: {

                dots: false,
                arrows: false,
                swipeToSlide: true,
                infinite: true,
                centerMode: true,
                slidesToShow: 1,
                centerPadding: "5px",
                variableWidth: true,

            }
        }
    ]
};


const SliderEcommerce = () => {
    // const [currentSlide, setCurrentSlide] = useState(null)

    // console.log(currentSlide)

    return (
        <div className='w-full mt-20'>

            <Slider {...settings} >

                {slides.map((slide, i) => (

                    <div style={{ width: 325 }} className='w-full px-4' >

                        <a key={slide.name + i} href={slide.link} className='relative w-full h-full mx-2 overflow-hidden' >

                            <span className='md:hidden'>

                                <Image loading='lazy' width={800} height={255} src={slide.img} alt={slide.name} className='object-cover w-full h-full rounded-lg max-md:max-h-[175px] max-md:max-w-[325px]' />
                            </span>

                            {/* Large Screen */}
                            <span className='hidden w-full h-full md:block'>
                                <Image loading='lazy' width={1200} height={500} src={slide.imgLarge} alt={slide.name} className='object-cover w-full h-full min-h-[250px] rounded-lg ' />
                            </span>
                        </a>
                    </div>

                ))}
            </Slider>

        </div>
    );

};

export default SliderEcommerce;
