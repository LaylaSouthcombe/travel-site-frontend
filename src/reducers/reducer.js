const initialState = {
    searchQuery: ""
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_SEARCH_QUERY":
            return { ...state, searchQuery: action.payload }
        default:
            return initialState
    }
}

export default reducer;
