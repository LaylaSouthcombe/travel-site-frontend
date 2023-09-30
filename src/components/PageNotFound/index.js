import React from 'react'

import pageNotFound from '../../images/HeroImages/pageNotFound.png'
import {TakeMeHomeButton} from '../'

import './style.css'

const PageNotFound = () => {

    return (
     <div className="pageNotFound">
            <div className="pageNotFoundText">
                <p>Ooops!</p>
                <p>It seems that this page does not exist, try the search bar to find what you are looking for, or use the home button to navigate to the home page</p>
                <TakeMeHomeButton/>
            </div>
        <div className="pageNotFoundImg">
            <img src={pageNotFound} alt="Page not found illustration"/>
        </div>
     </div>
    )
}

export default PageNotFound