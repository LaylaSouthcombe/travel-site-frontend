import { article } from '../utilities/article'
import { countriesInfo } from '../utilities/countriesInfo'
import { tripStylesShowing } from '../utilities/tripStylesShowing'


const initialState = {
    articles: [],
    filters: {countries: [], tripStyles: []},
    countriesInfo: countriesInfo,
    tripStylesShowing: tripStylesShowing,
    queryParams: {
        continent: "",
        country: "",
        city: "",
        category: ""
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_ARTICLES":
            return { ...state, articles: action.payload }
        case "UPDATE_FILTERS":
            return { ...state, filters: action.payload }
        case "UPDATE_COUNTRIES_INFO":
            return { ...state, countriesInfo: action.payload }
        case "UPDATE_TRIP_STYLE_SHOWING":
            return { ...state, tripStylesShowing: action.payload }
        case "UPDATE_QUERY_PARAMS":
            return { ...state, queryParams: action.payload }
        default:
            return initialState
    }
}

export default reducer;
