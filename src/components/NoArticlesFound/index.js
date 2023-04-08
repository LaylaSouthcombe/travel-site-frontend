import React from 'react'
import { useNavigate } from 'react-router-dom';

import noArticlesFound from '../../images/HeroImages/noArticlesFound.png'

import './style.css'

const NoArticlesFound = () => {

    return (
     <div className="noArticlesFound">
        <div className="noArticlesFoundImg">
            <img src={noArticlesFound} alt="Page not found illustration"/>
        </div>
     </div>
    )
}

export default NoArticlesFound;