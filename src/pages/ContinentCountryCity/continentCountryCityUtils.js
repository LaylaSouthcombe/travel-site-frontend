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
    fill: "var(--card-green-no-opacity)",
    stroke: "#3F3D56",
    strokeWidth: 1.5
}

const normalHoverColor = {
    fill: "#30c7b570",
    stroke: "#3F3D56",
    strokeWidth: 1.5
}

const normalClickColor = {
    fill: "#3F3D56",
    stroke: "#30c7b570",
    strokeWidth: 1.5
}

module.exports = { generateFetchUrl, generateGeoUrl, generateEndPointStart, formatCountry, defaultStyles, normalHoverColor, normalClickColor }