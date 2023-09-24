const threshold = (target) => {
    const width = target.clientWidth;
    return (15 * width) / 100;
}

export const swipeHandler = (e, dispatch, length, direction) => {
    const t = threshold(e.event.target);
    const d = Math.abs(e.deltaX);

    console.log({ e, direction, t, d })

    if (d >= t) {
        dispatch({
            type: direction > 0 ? 'next' : 'prev',
            length,
        });
    } else {
        dispatch({
            type: 'drag',
            offset: 0,
        });
    }
}

export const swipingHandler = (e, dispatch) => {
    dispatch({
        type: "drag",
        offset: e.deltaX
    });
}