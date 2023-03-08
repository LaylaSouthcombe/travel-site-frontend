import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {continentInfo} from '../../data/continentCountries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const BreadCrumbMenu = () => {
    const {country, city} = useParams();
    const location = useLocation();
    const continent = location.pathname.split("/")[1]
    
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
    return (
        <>
        <div className="breadcrumbMenu">
                    <div className="destinationsBreadcrumb">
                       <a href="">Destinations</a>
                       <FontAwesomeIcon icon={faGreaterThan}/>
                       <a href="">{formatWord(continent)}</a>
                    {city === undefined ? 
                        null
                    :
                    <>
                        <FontAwesomeIcon icon={faGreaterThan}/>
                        <a href="">{formatWord(country)}</a>
                    </>
                    }
                </div>
                <p className="countryCityName">{city === undefined ? formatWord(country) : formatWord(city)}</p>
                <p className="countryCitySummary">{continentInfo[continent].countries[country].summary}</p>
                {/* TODO: add city and city summary data to country data file */}
            </div>
        </>
    )

}

export default BreadCrumbMenu;