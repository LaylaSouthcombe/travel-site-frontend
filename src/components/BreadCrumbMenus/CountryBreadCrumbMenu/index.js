import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import './style.css'

import {continentCountries} from '../../../utilities/continentCountries'
import {formatWord} from '../../../utilities/formatWord'

const CountryBreadCrumbMenu = () => {
    let {country, city} = useParams();
    const location = useLocation();
    const continent = location.pathname.split("/")[1]
    
    if (country === "united-kingdom" || country === "wales" || country === "scotland" || country === "northern-ireland"){
        country = "england"
    }

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
                <p className="countryCityName">{city === undefined ? formatWord(country === "england" || country === "wales" || country === "scotland" || country === "northern-ireland" ? "united-kingdom" : country) : formatWord(city)}</p>
                <p className="countryCitySummary">{continentCountries[continent].countries[country].summary}</p>
                {/* TODO: add city and city summary data to country data file */}
            </div>
        </>
    )

}

export default CountryBreadCrumbMenu;