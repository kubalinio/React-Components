import { useReducer, useEffect } from 'react';
import { useSwipeable, SwipeableHandlers, SwipeEventData } from 'react-swipeable';

function previous(length: number, current: number) {
  return (current - 1 + length) % length;
}

function next(length: number, current: number) {
  return (current + 1) % length;
}

function threshold(target: EventTarget) {
  const width = (target as HTMLElement).clientWidth;
  return width / 3;
}

const transitionTime = 400;
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
const smooth = `transform ${transitionTime}ms ease`;

interface CarouselState {
  offset: number;
  desired: number;
  active: number;
}

const initialCarouselState: CarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
};

interface CarouselNextAction {
  type: 'next';
  length: number;
}

interface CarouselPrevAction {
  type: 'prev';
  length: number;
}

interface CarouselJumpAction {
  type: 'jump';
  desired: number;
}

interface CarouselDoneAction {
  type: 'done';
}

interface CarouselDragAction {
  type: 'drag';
  offset: number;
}

type CarouselAction =
  | CarouselJumpAction
  | CarouselNextAction
  | CarouselPrevAction
  | CarouselDragAction
  | CarouselDoneAction;

function carouselReducer(state: CarouselState, action: CarouselAction): CarouselState {

  switch (action.type) {
    case 'jump':
      return {
        ...state,
        desired: action.desired,
      };
    case 'next':
      return {
        ...state,
        desired: next(action.length, state.active),
      };
    case 'prev':
      return {
        ...state,
        desired: previous(action.length, state.active),
      };
    case 'done':
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      };
    case 'drag':
      return {
        ...state,
        offset: action.offset,
      };
    default:
      return state;
  }
}

function swiped(e: any, dispatch: React.Dispatch<CarouselAction>, length: number, dir: 1 | -1) {
  const t = threshold(e.event.target);
  const d = dir * e.deltaX;

  if (d >= t) {
    dispatch({
      type: dir > 0 ? 'next' : 'prev',
      length,
    });
  } else {
    dispatch({
      type: 'drag',
      offset: 0,
    });
  }
}

export function useCarousel(
  length: number,
  interval: number,
): [number, (n: number) => void, SwipeableHandlers, React.CSSProperties] {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);
  const handlers = useSwipeable({
    onSwiping(e) {
      dispatch({
        type: 'drag',
        offset: -e.deltaX,
      });
    },
    onSwipedLeft(e) {
      swiped(e, dispatch, length, 1);
    },
    onSwipedRight(e) {
      swiped(e, dispatch, length, -1);
    },
    trackMouse: true,
    trackTouch: true,
  });

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'next', length }), interval);
    return () => clearTimeout(id);
  }, [state.offset, state.active]);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'done' }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const style: React.CSSProperties = {
    transform: 'translateX(0)',
    width: `${100 * (length + 2)}%`,
    left: `-${(state.active + 1) * 100}%`,
  };

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

  return [state.active, n => dispatch({ type: 'jump', desired: n }), handlers, style];
}