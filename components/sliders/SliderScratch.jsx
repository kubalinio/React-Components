import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Arrow = ({ direction, handleClick }) => (
    <div
        onClick={handleClick}
        className={`h-12 w-12 flex items-center justify-center absolute text-black bg-white rounded-full p-2 top-1/2 cursor-pointer transition-colors duration-200 hover:bg-gray-300 ${direction === 'right' ? 'right-6' : 'left-6'}`}
    >
        {direction === 'right' ?
            <AiOutlineArrowRight className='w-full h-full' /> :
            <AiOutlineArrowLeft className='w-full h-full' />}
    </div>
)

const Dots = ({ slides, activeIndex }) => (
    // Dots
    <div className='absolute flex items-center justify-center w-full bottom-6'>

        {slides.map((slide, i) => (
            // Dot
            <span
                key={slide}
                className={`p-2 mr-1 cursor-pointer rounded-full ${activeIndex === i ? 'bg-black' : 'bg-white'}`}
            />
        ))}

    </div>
)

const Slide = ({ content }) => {

    return (
        <div style={{ width: '25%' }}>
            <div>
                <a href="/"
                    className='relative block m-1 overflow-hidden rounded-lg before:block before:pt-[54%] bg-black'
                >
                    <span className='absolute inset-0 inline-flex items-center cursor-pointer select-none ring-inset' >

                        <img src={content} alt="" className='absolute top-0 left-0 object-cover object-left-top w-full h-full max-w-full max-h-full' />
                    </span>
                </a>
            </div>
        </div>)
}


// Function Slider

const SliderScratch = (props) => {
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        widthSlide: 0
    })


    const ref = useRef()

    const [width, setWidth] = useState(null)
    const [move, setMove] = useState(0)

    // useEffect(() => {
    //     setWidth(ref.current.offsetWidth)
    // }, [])


    useEffect(() => {
        function handleWindowResize() {
            setWidth(ref.current.offsetWidth);

            console.log(window.innerWidth)

        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);



    const { translate, transition, activeIndex } = state

    const nextSlide = () => {
        if (activeIndex === props.slides.length - 1)
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0,
                widthSlide: window.innerHeight
            })

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * width,
            widthSlide: window.innerHeight
        })

    }


    const prevSlide = () => {
        if (activeIndex === 0) return setState({
            ...state,
            translate: (props.slides.length - 1) * width,
            activeIndex: props.slides.length - 1,
            widthSlide: window.innerHeight
        })


        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width,
            widthSlide: window.innerHeight
        })

    }

    return (
        <div className='px-4'>

            <div className='relative px-4 -mx-4 overflow-hidden'>

                <div className='relative '>
                    {/* Slider Grab Div */}
                    <div className='relative flex mt-10'>
                        {/* Slider Content */}
                        <div
                            style={{
                                transform: `translateX(${-translate + move}px)`,
                                width: `${(100 * 2)}%`,
                                transition: 'all 200ms ease-out 0s'
                            }}
                            transition={transition}
                            className='flex flex-none min-w-full'

                        >

                            {props.slides.map((slide, i) => (
                                <Slide key={slide + i} content={slide} />
                            ))}

                        </div>

                        <Arrow direction='left' handleClick={prevSlide} />
                        <Arrow direction='right' handleClick={nextSlide} />

                        {/* <Dots slides={props.slides} activeIndex={activeIndex} /> */}

                    </div >
                </div>
            </div>
        </div>
    )
}

export default SliderScratch