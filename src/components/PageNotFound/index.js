import React from 'react'
import { useNavigate } from 'react-router-dom';

import pageNotFound from '../../images/HeroImages/pageNotFound.png'

import './style.css'

const PageNotFound = () => {
    let navigate = useNavigate();

    return (
     <div className="pageNotFound">
        <div className="pageNotFoundText">
            <p>Ooops!</p>
            <p>Page Not Found</p>
            <div className="takeMeBackBtn" onClick={() => navigate(-1)}>Take Me Back</div>
        </div>
        <div className="pageNotFoundImg">
            <img src={pageNotFound} alt="Page not found illustration"/>
        </div>
     </div>
    )
}

export default PageNotFound;