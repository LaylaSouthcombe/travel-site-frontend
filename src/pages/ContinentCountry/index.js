import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import './style.css'


import {NavBar, BottomMenu, NoNestDropMenu} from '../../layout'


const ContinentCountry = () => {
    const location = useLocation();
    let geoUrl
    const continent = location.pathname.split("/")[1]
    if(continent === 'australia-oceania'){
        geoUrl =`https://raw.githubusercontent.com/deldersveld/topojson/master/continents/${'oceania'}.json`
    } else {
        geoUrl =`https://raw.githubusercontent.com/deldersveld/topojson/master/continents/${continent}.json`
    }
    console.log(continent);
    const {country, city, articleid} = useParams();
    console.log(country)
    console.log(city)
    console.log(articleid)

    const geoInfo = {
        'europe': {
            rotate: [-10.0, -53.0, 0],
            center: [5, 3.5],
            scale: 650
        },
        'asia': {
            rotate: [-80.0, -53.0, 0],
            center: [14, -8],
            scale: 300
        },
        'africa': {
            rotate: [-10.0, -53.0, 0],
            center: [20, -65],
            scale: 300
        },
        'north-america': {
            rotate: [100, 0, 0],
            center: [-5, 40],
            scale: 325
        },
        'south-america': {
            rotate: [60, 0, 0],
            center: [-10, -25],
            scale: 400
        },
        'australia-oceania': {
            rotate: [-20, 140, 150],
            center: [-40, 15],
            scale: 350
        }
    }
    return(
        <>
            <NavBar/>
            {country === undefined ? 
                <ComposableMap
                    width={600}
                    height={600}
                    projection="geoAzimuthalEquidistant"
                    projectionConfig={geoInfo[continent]}
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
                                console.log("click", `${JSON.stringify(geo.properties.geounit)}`)
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
            : null}
            <BottomMenu/>
        </>
    )
}

export default ContinentCountry;