import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { useParams} from 'react-router-dom';
import {article} from '../../utilities/article'

import {ArticleTabCards, GoogleAd, ArticleListGridStyle2} from '../../components'

import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'


const RandomCountry = () => {
    
    return (
        <>
            <div className="randomCountrySection">
                <p className="randomCountryText">Not sure where to go? Click this button and let fate take you on a wild ride to a random destination!</p>
                <div className="randomCountryButton">
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