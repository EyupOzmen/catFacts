export function reducer(state, action) {
    switch (action.type) {
        case "INCREASE_COUNTER":
            state.counter = state.counter + 1
            return { ...state }

        case "DECREASE_COUNTER":
            state.counter = state.counter - 1
            return { ...state }

        case "SET_USER":
            state.user = action.userObj
            return { ...state }

        default:
            break;
    }
}
