const generateFetchUrl = (country, continent) => {
    if(country === undefined && continent !== undefined){
        return `http://localhost:3000/articles/continent/${continent}`
    } else if(country !== undefined && continent !== undefined){
        return `http://localhost:3000/articles/country/${country}`
    }
}

const generateEndPointStart = (country, continent) => {
    if(continent !== undefined && country === undefined){
        return `/articles/continent=${continent}`
    } else if(continent !== undefined && country !== undefined){
        return`/articles/country=${country}`
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

module.exports = { generateFetchUrl, generateEndPointStart, defaultStyles, normalHoverColor, normalClickColor }