import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

import {continentCountries} from '../../utilities/continentCountries'

const RandomCountry = () => {
    let navigate = useNavigate();

    const generateRandomNumber = () => {
        let maxNumber = Object.keys(continentCountries.europe.countries).length
        return Math.floor(Math.random() * maxNumber)
    }

    const generateRandomCountryUrl = () => {
        let randomNumber = generateRandomNumber()
        let country = Object.keys(continentCountries.europe.countries)[randomNumber]
        let url = continentCountries.europe.countries[country].url
        return url
    }

    const takeToRandomCountry = () => {
        let endpoint = generateRandomCountryUrl()
        navigate(`/europe/${endpoint}`)
    }

    return (
        <>
            <div className="randomCountrySection">
                <div className="randomCountryText">
                    <p>Not sure where to go?</p>
                    <p>Click this button and let fate take you on a wild ride to a random destination!</p>
                </div>
                <div className="randomCountryButton" onClick={(() => takeToRandomCountry())}>
                        <FontAwesomeIcon icon={faCircleQuestion}/>
                        <div>
                            <p>I'm feeling</p>
                            <p>adventurous</p>
                        </div>
                        <FontAwesomeIcon icon={faRoute}/>
                </div>
            </div>
        </>
    )
}

export default RandomCountry;