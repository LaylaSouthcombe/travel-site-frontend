import React, {useState} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import './style.css'

import backgroundWorld from '../../images/backgroundWorld.png'

import {continentInfo} from '../../data/continentCountries'

import {NavBar, BottomMenu, NoNestDropMenu} from '../../layout'


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
console.log(continentInfo[continent])
    if(continent === 'australia-oceania'){
        geoUrl =`https://raw.githubusercontent.com/deldersveld/topojson/master/continents/${'oceania'}.json`
    } else {
        geoUrl =`https://raw.githubusercontent.com/deldersveld/topojson/master/continents/${continent}.json`
    }
    console.log(continent);
    let formattedCountry
    const {country, city, articleid} = useParams();
    if(country !== undefined){
        formattedCountry = country.split('-').map((x, i) => {
            return (
                x = x[0].toUpperCase() + x.slice(1)
            )
        }).join(" ")
    }
        
    console.log(country)
    console.log(formattedCountry)
    console.log(city)
    console.log(articleid)

    
    return(
        <>
            <NavBar/>
            {country === undefined ? 
            <div className="continentSummarySection">
                <div className="continentSummary">
                    <p>Italy</p>
                    <p>Italy is known for its art, architecture, history, and delicious food. It is the home of the Roman Empire, the Vatican City, and landmarks such as the Colosseum and Leaning Tower of Pisa.</p>
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
                                    console.log(`${JSON.stringify(geo.properties.geounit)}`);
                                }}
                                onClick={() => {
                                    navigate(geo.properties.geounit.toLowerCase())
                                }}
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
                    <div className="topCity">
                        <p>London</p>
                    </div>
                    <div className="topCity">
                        <p>London</p>
                    </div>
                    <div className="topCity">
                        <p>London</p>
                    </div>
                    <div className="topCity">
                        <p>London</p>
                    </div>
                </div>
            </div>
            }
            <BottomMenu/>
        </>
    )
}

export default ContinentCountry;