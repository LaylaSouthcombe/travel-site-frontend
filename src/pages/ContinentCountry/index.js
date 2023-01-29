import React, {useState} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import './style.css'

import backgroundWorld from '../../images/backgroundWorld.png'

import {continentInfo} from '../../data/continentCountries'

import {NavBar, BottomMenu, NoNestDropMenu} from '../../layout'
import {ArticleGridStyle3, ArticleGridStyle4, ArticleGridStyle5, GoogleAd} from '../../components'

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
    let formattedCountry
    const {country, city, articleid} = useParams();
    if(country !== undefined){
        formattedCountry = country.split('-').map((x, i) => {
            return (
                x = x[0].toUpperCase() + x.slice(1)
            )
        }).join(" ")
    }
    const [summaryInfo, setSummaryInfo] = useState({name: continentInfo[continent].name, summary: continentInfo[continent].summary})

    const handleCountryClick = (country) => {
        if(continentInfo[continent].countries[country].popularCities.length){
            navigate(country)
        }
    }
    
    return(
        <>
            <NavBar/>
            {country === undefined ? 
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
                                onMouseEnter={() => {
                                    setSummaryInfo({name: continentInfo[continent].countries[geo.properties.geounit].name, summary: continentInfo[continent].countries[geo.properties.geounit].summary})
                                }}
                                onMouseLeave={() => {
                                    setSummaryInfo({name: continentInfo[continent].name, summary: continentInfo[continent].summary})
                                }}
                                onClick={() => handleCountryClick(geo.properties.geounit)}
                                style={{
                                    default: {
                                    fill: "rgb(227, 227, 227)",
                                    stroke: "#3F3D56",
                                    },
                                    hover: {
                                    fill: "#30c7b5ad",
                                    stroke: "#3F3D56",
                                    },
                                    pressed: {
                                    fill: "#3F3D56",
                                    stroke: "#30c7b5ad",
                                    },
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
            : 
            <div className="topCitiesSection">
                <h2 className="seperatorTitle">Top cities to visit in {formattedCountry}</h2>
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
            <ArticleGridStyle3/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <ArticleGridStyle4/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <ArticleGridStyle5/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default ContinentCountry;