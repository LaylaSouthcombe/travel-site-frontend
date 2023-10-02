import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

import {continentCountries} from '../../../utilities/continentCountries'
import {formatWord} from '../../../utilities/formatWord'

import './style.css'

const CountryBreadCrumbMenu = () => {
    let {country, city} = useParams()
    const location = useLocation()
    const continent = location.pathname.split("/")[1]

    return (
        <>
            <div className="breadcrumbMenu">
                <div className="destinationsBreadcrumb">
                    <a href="/">Destinations</a>
                    <FontAwesomeIcon icon={faGreaterThan}/>
                    <a href={"/" + continent}>{formatWord(continent)}</a>
                    {city === undefined ? 
                    null
                    :
                    <>
                        <FontAwesomeIcon icon={faGreaterThan}/>
                        <a href={"/" + country}>{formatWord(country)}</a>
                    </>
                    }
                </div>
                <p className="countryCityName">{city === undefined ? formatWord( country) : formatWord(city)}</p>
                <p className="countryCitySummary">{continentCountries[continent].countries[country]?.summary}</p>
            </div>
        </>
    )
}

export default CountryBreadCrumbMenu