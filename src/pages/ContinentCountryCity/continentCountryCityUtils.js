const generateFetchUrl = (country, continent) => {
    if(country === undefined && continent !== undefined){
        return `http://localhost:3000/articles/continent/${continent}`
    } else if(country !== undefined && continent !== undefined){
        return `http://localhost:3000/articles/country/${country}`
    }
}

const generateGeoUrl = (continent) => {
    if(continent === 'australia-oceania'){
        return `https://raw.githubusercontent.com/deldersveld/topojson/master/continents/oceania.json`
    } else {
        return `https://raw.githubusercontent.com/deldersveld/topojson/master/continents/${continent}.json`
    }
}

const generateEndPointStart = (country, continent) => {
    if(continent !== undefined && country === undefined){
        return `/articles/continent=${continent}`
    } else if(continent !== undefined && country !== undefined){
        return`/articles/country=${country}`
    }
}

const formatCountry = (country) => {
    if (country === "united-kingdom" || country === "wales" || country === "scotland" || country === "northern-ireland"){
        return "england"
    } else {
        return country
    }
}

const defaultStyles = {
    fill: "var(--main-light-purple)",
    stroke: "var(--main-purple)",
    strokeWidth: 1.5
}

const normalHoverColor = {
    fill: "var(--main-medium-purple)",
    stroke: "var(--main-medium-purple)",
    strokeWidth: 1.5
}

const normalClickColor = {
    fill: "var(--main-purple)",
    stroke: "var(--main-purple)",
    strokeWidth: 1.5
}

module.exports = { generateFetchUrl, generateGeoUrl, generateEndPointStart, formatCountry, defaultStyles, normalHoverColor, normalClickColor }