// state = store'daki nesnelerim
// action = dispatch'e gönderdiğim veri

export function reducer(state, action) {
    switch (action.type) {
        case "SET_USER":
            state.user = action.userOBJ
            return { ...state }

        case "SET_CATS":
            state.catFacts = action.catFactsARR
            return { ...state }

        case "FILTER_CATS":
            const filteredData = state.catFacts.filter(x => x.upvotes == action.vote)
            state.filteredCats = filteredData
            return { ...state }

        default:
            return state
    }
}