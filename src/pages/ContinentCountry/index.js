import React, {useState} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import './style.css'

import backgroundWorld from '../../images/backgroundWorld.png'

import {continentInfo} from '../../data/continentCountries'

import {NavBar, BottomMenu, NoNestDropMenu} from '../../layout'
import {ArticleGridStyle3, ArticleGridStyle4, ArticleGridStyle5, ArticleTabSelectorList, ExploreMoreButton, GoogleAd} from '../../components'

const ContinentCountry = () => {
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
    // let formattedCountry
    const {country, city, articleid} = useParams();

    let currentWebLocation

    if(country === undefined){
        currentWebLocation = continent
    } else {
        currentWebLocation = country
    }

    const formatWord = (word) => {
        if(word !== undefined){
        word = word.split('-').map((x, i) => {
            return (
                x = x[0].toUpperCase() + x.slice(1)
            )
        }).join(" ")
        }
        return word
    }

    const [summaryInfo, setSummaryInfo] = useState({name: continentInfo[continent].name, summary: continentInfo[continent].summary})

    const normalHoverColor = {
        fill: "#30c7b5ad",
        stroke: "#3F3D56"
    }

    const normalClickColor = {
        fill: "#3F3D56",
        stroke: "#30c7b5ad"
    }

    const [hoverColors, setHoverColors] = useState({})
    const [clickColors, setClickColors] = useState({})
    
    const handleCountryClick = (country) => {
        if(continentInfo[continent].countries[country].popularCities.length){
            setClickColors(normalClickColor)
            navigate(country)
        } else {
            setClickColors({
                fill: "rgb(227, 227, 227)",
                stroke: "#3F3D56"
            })
        }
    }

    const tabHeadings = ["Relaxation", "Luxury", "Nature", "Food", "City Break", "Budget Friendly", "Art & Culture", "Adventure"]
    
    const checkAndSetSumamryInfo = (countryName) => {
        setHoverColors({
            fill: "rgb(227, 227, 227)",
            stroke: "#3F3D56"
        })
        if(continentInfo[continent].countries[countryName].name !== "Europe"){
           setHoverColors(normalHoverColor) 
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
                        <p>{summaryInfo.name}</p>
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
                                        default: {
                                            fill: "rgb(227, 227, 227)",
                                            stroke: "#3F3D56"
                                        },
                                        hover: hoverColors,
                                        pressed: clickColors,
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
                <div>
                    <h2 className="seperatorTitle">Top Countries to Visit in {formatWord(currentWebLocation)}</h2>
                </div>
                <ArticleGridStyle3/>
            </>
            : 
            <div className="topCitiesSection">
                <h2 className="seperatorTitle">Top cities to visit in {formatWord(currentWebLocation)}</h2>
                <div className="topCities">
                    {continentInfo[continent].countries[country].popularCities.map(x => {
                        return(
                            <div className="topCity" key={country + x}>
                                <p>{x}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            }
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Cultural Experiences in {formatWord(currentWebLocation)}</h2>
            </div>
            <ArticleGridStyle4/>
            <ExploreMoreButton endpoint={`/trip-styles/arts-and-culture/${currentWebLocation}`}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Food and Drink to Try in {formatWord(currentWebLocation)}</h2>
            </div>
            <ArticleGridStyle5/>
            <ExploreMoreButton endpoint={`/trip-styles/food/${currentWebLocation}`}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Explore Different Trip Styles in {formatWord(currentWebLocation)}</h2>
            </div>
            <ArticleTabSelectorList tabHeadings={tabHeadings}/>
            <ExploreMoreButton endpoint={`/trip-styles/all/${currentWebLocation}`}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default ContinentCountry;