// state = store'daki nesnelerim
// action = dispatch'e gönderdiğim veri

export function reducer(state, action) {
    switch (action.type) {
        case "SET_USER":
            state.user = action.userOBJ
            return { ...state }

        default:
            return state
    }
}