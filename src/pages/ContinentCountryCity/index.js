import React, {useState} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import './style.css'

import backgroundWorld from '../../images/backgroundWorld.png'

import {continentInfo} from '../../utilities/continentCountries'
import {article} from '../../utilities/article'
import {formatWord} from '../../utilities/formatWord'

import {NavBar, BottomMenu} from '../../layout'
import {ThreeCardsRow, GoogleAd, ArticlesTabSection, HeroArticleSection, CountryBreadCrumbMenu} from '../../components'


const ContinentCountryCity = () => {

    const location = useLocation();
    let navigate = useNavigate();
    
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowSize(window.innerWidth)
        setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    let geoUrl
    const continent = location.pathname.split("/")[1]

    if(continent === 'australia-oceania'){
        geoUrl =`https://raw.githubusercontent.com/deldersveld/topojson/master/continents/${'oceania'}.json`
    } else {
        geoUrl =`https://raw.githubusercontent.com/deldersveld/topojson/master/continents/${continent}.json`
    }
    
    let {country} = useParams();

    if (country === "united-kingdom" || country === "wales" || country === "scotland" || country === "northern-ireland"){
        country = "england"
    }

    const [summaryInfo, setSummaryInfo] = useState({name: continentInfo[continent].name, summary: continentInfo[continent].summary})

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

    const [hoverColors, setHoverColors] = useState({})
    const [clickColors, setClickColors] = useState({})
    
    const handleCountryClick = (country) => {
        if (country === "england" || country === "wales" || country === "scotland" || country === "northernireland"){
            navigate("united-kingdom")
        } else if(continentInfo[continent].countries[country].popularCities.length){
            navigate(country)
        }
    }

    const tabHeadings = ["All", "Relaxation", "Luxury", "Nature", "Food", "City Break", "Budget Friendly", "Art & Culture", "Adventure"]
    

    const tabArticles =
        [article, article, article, article, article,article, article, article, article, article, article]

    const defaultStyles = {
        fill: "var(--card-green-no-opacity)",
        stroke: "#3F3D56",
        strokeWidth: 1.5
    }

    const checkAndSetSumamryInfo = (countryName) => {
        setClickColors(defaultStyles)
        setHoverColors(defaultStyles)
        if(continentInfo[continent].countries[countryName].name !== "Europe"){
           setHoverColors(normalHoverColor) 
           setClickColors(normalClickColor)
        }
        setSummaryInfo({name: continentInfo[continent].countries[countryName].name, summary: continentInfo[continent].countries[countryName].summary})
    }

    return(
        <>
            <NavBar/>
            {country === undefined ? 
            <>
                <div className="continentSummarySection">
                    <div className="continentSummary">
                        <h2>{formatWord(continent)}</h2>
                        {summaryInfo.name !== 'Europe' ? <p className="countryName">{summaryInfo.name}</p> : null}
                        <p>{summaryInfo.summary}</p>
                    </div>
                    {windowSize >= 768 ?
                    <div className="interactiveMap">
                        <ComposableMap
                            width={600}
                            height={600}
                            projection="geoAzimuthalEquidistant"
                            projectionConfig={continentInfo[continent].geoInfo}
                            >
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => 
                                        checkAndSetSumamryInfo(geo.properties.geounit.toLowerCase())
                                    }
                                    onMouseLeave={() => {
                                        setSummaryInfo({name: continentInfo[continent].name, summary: continentInfo[continent].summary})
                                    }}
                                    onClick={() => handleCountryClick(geo.properties.geounit.toLowerCase())}
                                    style={{
                                        default: defaultStyles,
                                        hover: hoverColors,
                                        pressed: clickColors
                                    }}
                                    />
                                ))
                                }
                            </Geographies>
                        </ComposableMap>
                        </div> : 
                    <div className="backgroundWorld">
                        <img src={backgroundWorld} alt="" />
                    </div>}
                </div>
            </>
            :
            <>
                <CountryBreadCrumbMenu/>
                <HeroArticleSection article={article}/>
            </>
            }
            <ThreeCardsRow articles={[article,article,article]}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            
            <ArticlesTabSection tabArticles={tabArticles} tabHeadings={tabHeadings}/>

            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default ContinentCountryCity;