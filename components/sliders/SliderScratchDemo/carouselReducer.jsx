const previous = (length, current) => {
    return (current - 1 + length) % length;
}

const next = (length, current) => {
    console.log({ length, current }, ((current + 1) % length))
    return (current + 1) % length;
}

export function carouselReducer(state, action) {
    console.log(action.type)
    switch (action.type) {
        case "jump":
            return {
                ...state,
                desired: action.desired
            };
        case "next":
            console.log({ state, action })
            return {
                ...state,
                desired: next(action.length, state.active)
            };
        case "prev":
            return {
                ...state,
                desired: previous(action.length, state.active)
            };
        case "done":
            return {
                ...state,
                offset: NaN,
                active: state.desired
            };
        case "drag":
            return {
                ...state,
                offset: action.offset
            };
        default:
            return state;
    }
}