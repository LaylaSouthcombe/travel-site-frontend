import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

import {NavBar, BottomMenu} from '../../layout'
import {ThreeCardsRow, GoogleAd, ArticlesTabSection, HeroArticleSection, CountryBreadCrumbMenu, TakeMeHomeButton, NoArticlesFound} from '../../components'

import backgroundWorld from '../../images/HeroImages/backgroundWorld.png'

import {continentCountries} from '../../utilities/continentCountries'
import {article} from '../../utilities/article'
import {formatWord} from '../../utilities/formatWord'
import { generateFetchUrl, generateEndPointStart, defaultStyles, normalHoverColor, normalClickColor } from './continentCountryCityUtils'

import './style.css'

const ContinentCountryCity = () => {

    const location = useLocation()
    let navigate = useNavigate()

    const tabHeadings = ["All", "Relaxation", "Luxury", "Nature", "Food", "City Break", "Budget Friendly", "Art & Culture", "Adventure"]
    const [tabArticles, setTabArticles] = useState([article, article, article, article, article, article, article, article, article, article, article, article])

    const [loaded, setLoaded] = useState(false)
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    
    const [hoverColors, setHoverColors] = useState({})
    const [clickColors, setClickColors] = useState({})

    const continent = location.pathname.split("/")[1]
    
    let {country} = useParams()
    
    let endPointStart = generateEndPointStart(country, continent)
    
    const [summaryInfo, setSummaryInfo] = useState({name: continentCountries[continent].name, summary: continentCountries[continent].summary})

    const handleResize = () => {
        setWindowSize(window.innerWidth)
        setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    const fetchArticles = async (url) => {
        await axios.get(url).then((response) => {
            setTabArticles(response.data)
            setLoaded(true)
        });
    }

    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.remove("fixedBody")
        window.scrollTo(0, 0)
        let url = generateFetchUrl(country, continent)
        fetchArticles(url)
    }, [country, continent])
    
    const handleCountryClick = (country) => {
        if (country === "england" || country === "wales" || country === "scotland" || country === "northernireland"){
            navigate("united-kingdom")
        } else if(continentCountries[continent].countries[country].popularCities.length){
            navigate(continentCountries[continent].countries[country].url)
        }
    }

    const checkAndSetSummaryInfo = (countryName) => {
        setClickColors(defaultStyles)
        setHoverColors(defaultStyles)
        if(continentCountries[continent].countries[countryName].name !== "Europe"){
           setHoverColors(normalHoverColor) 
           setClickColors(normalClickColor)
        }
        setSummaryInfo({name: continentCountries[continent].countries[countryName].name, summary: continentCountries[continent].countries[countryName].summary})
    }

    return (
        <>
            <NavBar/>
            {country === undefined ? 
            <>
                <div className="continentSummarySection">
                    <div className="continentSummary">
                        <h2>{formatWord(continent)}</h2>
                        <p className="countryName">{summaryInfo.name !== 'Europe' ? summaryInfo.name : null}</p>
                        <p>{summaryInfo.summary}</p>
                    </div>
                    {windowSize >= 768 ?
                    <>
                        <div className="interactiveMap">
                            <ComposableMap
                                width={600}
                                height={600}
                                projection="geoAzimuthalEquidistant"
                                projectionConfig={continentCountries[continent].geoInfo}
                                >
                                <Geographies geography='/europeTopo.json'>
                                    {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => 
                                            checkAndSetSummaryInfo(geo.properties.name.toLowerCase())
                                        }
                                        onMouseLeave={() => {
                                            setSummaryInfo({name: continentCountries[continent].name, summary: continentCountries[continent].summary})
                                        }}
                                        onTouchStart={() => 
                                            checkAndSetSummaryInfo(geo.properties.name.toLowerCase())
                                        }
                                        onTouchEnd={() => {
                                            setSummaryInfo({name: continentCountries[continent].name, summary: continentCountries[continent].summary})
                                        }}
                                        onClick={() => handleCountryClick(geo.properties.name.toLowerCase())}
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
                        </div> 
                    </>
                    :
                    <>
                        <div className="backgroundWorld">
                            <img src={backgroundWorld} alt="" />
                        </div>
                    </>
                    }
                </div>
            </>
            :
            <>
            {loaded ? 
                <>
                    <CountryBreadCrumbMenu/>
                    <HeroArticleSection article={tabArticles[0]} loaded={loaded}/>
                </>
                : null}
            </>
            }
            <>
                {loaded ? 
                <>
                    {tabArticles.length ? 
                    <>
                        <ThreeCardsRow articles={[tabArticles[1], tabArticles[2], tabArticles[3]]} loaded={loaded}/>
                        <GoogleAd dataAdSlot={"1136657549"}/>
                    </>
                    : null}
                </>
                :
                <>
                    <ThreeCardsRow articles={[tabArticles[1], tabArticles[2], tabArticles[3]]} loaded={false}/>
                </>
                }
            </>
            <>
                {loaded ? 
                <>
                    {tabArticles.length  ? 
                        <>
                            <ArticlesTabSection tabArticles={tabArticles} tabHeadings={tabHeadings} loaded={loaded} endPointStart={endPointStart} page={"countryCity"}/>
                        </>
                    : 
                    <>
                        <div className="noArticlesFound">
                            <div className="noArticlesFoundText">
                                <p>Oops!</p>
                                <p>No articles were found, try the search bar to find what you are looking for, or use the home button to navigate to the home page</p>
                                <TakeMeHomeButton/>
                            </div> 
                            <NoArticlesFound/>
                        </div> 
                    </>}
                </>
                :
                <>
                    <ArticlesTabSection tabArticles={tabArticles} tabHeadings={tabHeadings} loaded={false} endPointStart={endPointStart} page={"countryCity"}/>
                </>
                }
            </>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default ContinentCountryCity