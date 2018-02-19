export const BLACK_DIAMOND = false;

// TYPES
const INCREMENT = 'Increment';
const UNDO = 'Undo';
const REDO = 'Redo';

// ACTION BUILDERS
export function increment(num) {
    return {
        type: INCREMENT,
        num
    };
}

export function undo() {
    return { type: UNDO };
}

export function redo() {
    return { type: REDO };
}

const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
}
// REDUCER
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.num,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            };
        case UNDO:
            return {
                currentValue: state.previousValues[0],
                futureValues: [state.currentValue, ...state.futureValues],
                previousValues: state.previousValues.slice(1, state.previousValues.length)
            };
        case REDO:
            return {
                currentValue: state.futureValues[0],
                futureValues: state.futureValues.slice(1, state.futureValues.length),
                previousValues: [state.currentValue, ...state.previousValues]
            };
        default:
            return state;
    }
}
