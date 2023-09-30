import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

import {continentCountries} from '../../utilities/continentCountries'

const RandomCountryText = () => {
    return (
        <div className="randomCountryText">
            <p>Not sure where to go?</p>
            <p>Click this button and let fate take you on a wild ride to a random destination!</p>
        </div>
    )
}

const RandomCountryButton = ({takeToRandomCountry}) => {
    return (
        <div className="randomCountryButton" onClick={(() => takeToRandomCountry())}>
            <FontAwesomeIcon icon={faCircleQuestion}/>
            <div>
                <p>I'm feeling</p>
                <p>adventurous</p>
            </div>
            <FontAwesomeIcon icon={faRoute}/>
        </div>
    )
}

const RandomCountry = () => {

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
        window.open(`/europe/${endpoint}`,'_blank')
    }

    return (
        <>
            <div className="randomCountrySection">
                <RandomCountryText/>
                <RandomCountryButton takeToRandomCountry={takeToRandomCountry}/>
            </div>
        </>
    )
}

export default RandomCountry;