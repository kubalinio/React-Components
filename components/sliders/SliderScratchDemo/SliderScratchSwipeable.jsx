import React from "react";

import { useCarousel } from './carouselHook';
import { makeIndices } from './utils';

const CarouselItem = ({ gutters, children }) => {
    const slideMargin = {
        marginLeft: `${gutters}px`,
        marginRight: `${gutters}px`,
    };

    return <div className="w-full" style={slideMargin}>{children}</div>
}

const SliderScratchSwipeable = ({ children, slidesPresented = 1, edges = [0, 0] }, gutters = 0) => {
    const slides = React.Children.toArray(children);
    const length = slides.length;
    const numActive = Math.min(length, slidesPresented);
    const { active, setActive, handlers, style } = useCarousel(length, { slidesPresented: numActive });
    const beforeIndices = makeIndices(slides.length - 1, -1, numActive);
    const afterIndices = makeIndices(0, +1, numActive);

    const beforeSlides = beforeIndices.map(i => (
        <CarouselItem key={i} gutters={gutters}>
            <img src="https://cdn.pixabay.com/photo/2018/05/09/19/29/beech-3385957_960_720.jpg" alt="" />
        </CarouselItem>
    ));

    const actualSlides = slides.map((slide, index) => (
        <CarouselItem key={i} gutters={gutters}>
            <img src="https://cdn.pixabay.com/photo/2018/05/09/19/29/beech-3385957_960_720.jpg" alt="" />
        </CarouselItem>
    ));

    const afterSlides = afterIndices.map(i => (
        <CarouselItem key={i} gutters={gutters}>
            <img src="https://cdn.pixabay.com/photo/2018/05/09/19/29/beech-3385957_960_720.jpg" alt="" />
        </CarouselItem>
    ));

    const carouselEdges = {
        paddingLeft: `${edges[0]}px`,
        paddingRight: `${edges[1]}px`,
    };

    return (

        <div className="relative overflow-hidden" style={carouselEdges}>
            {/* <ol className={carouselIndicators}>
          {slides.map((_, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={`${active === index ? 'active' : ''} ${carouselIndicator}`}
            />
          ))}
        </ol> */}
            <div className="relative flex flex-row overflow-hidden flex-nowrap" {...handlers} style={style}>
                <li className="carousel__item">
                    <img src='https://picsum.photos/200' alt='' />
                </li>
                <li className="carousel__item">
                    <img src='https://picsum.photos/201' alt='' />
                </li>
                <li className="carousel__item">
                    <img src='https://picsum.photos/202' alt='' />
                </li>
                <li className="carousel__item">
                    <img src='https://picsum.photos/203' alt='' />
                </li>

            </div>
        </div>

    );
};



export default SliderScratchSwipeable