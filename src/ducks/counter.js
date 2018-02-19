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

export function undo(num) {
    return {
        type: UNDO,
        num
    };
}

export function redo(num) {
    return {
        type: REDO,
        num
    };
}

let initialState = {
    value: 0,
    undo: [],
    redo: []
}
// REDUCER
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case INCREMENT:
            let newVal = action.num + state.value;
            return Object.assign({}, state, { value: newVal });
        case UNDO :
            let undo = [...state.undo, action.num];
            return Object.assign({}, state, {undo});
        case REDO :
            let redo = [...state.redo, action.num];
            return Object.assign({}, state, {redo});
        default :
            return state;
    }
}
