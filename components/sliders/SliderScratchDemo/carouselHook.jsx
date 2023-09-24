import React, { useReducer, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import { carouselReducer } from './carouselReducer';
import { swipingHandler, swipeHandler } from './carouselSwipingActions';

const initialCarouselState = {
  offset: 0,
  desired: 0,
  active: 0
};

export const useCarousel = (length) => {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);
  const transitionTime = 400;

  const handlers = useSwipeable({
    onSwiping: (e) => swipingHandler(e, dispatch),
    onSwipedLeft: (e) => swipeHandler(e, dispatch, length, 1),
    onSwipedRight: (e) => swipeHandler(e, dispatch, length, -1),
    trackMouse: true,
    trackTouch: true
  });

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "done" }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const style = {
    transform: 'translateX(0)',
    width: `${100 * (length + 2)}%`,
    left: `-${(state.active + 1) * 100}%`,
  };

  const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
  const smooth = `transform ${transitionTime}ms ease`;

  if (state.desired !== state.active) {
    const dist = Math.abs(state.active - state.desired);
    const pref = Math.sign(state.offset || 0);
    const dir = (dist > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active);
    const shift = (100 * (pref || dir)) / (length + 2);
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (!isNaN(state.offset)) {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  return {
    active: state.active,
    setActive: n => dispatch({ type: 'jump', desired: n }),
    handlers,
    style
  };

};

export function makeIndices(start, delta, num) {
  const indices = [];

  while (indices.length < num) {
    indices.push(start);
    start += delta;
  }

  return indices;
}