import React from 'react'
import {useLocation} from 'react-router-dom';

import './style.css'

import {formatWord} from '../../../utilities/formatWord'

const BreadCrumbMenu = () => {

    const location = useLocation()
    const pageLocation = location.pathname.split("/")[1]

    let summaryInfo = pageLocation === "trip-planning" ? "plan your trip summary" : "popular articles summary"

    return (
         <>
            <div className="breadcrumbMenu">
                <div className="breadcrumb">
                    <a href="/">Home</a>
                </div>
                <p className="countryCityName">{formatWord(pageLocation)}</p>
                <p className="countryCitySummary">{summaryInfo}</p>
            </div>
        </>
    )
}

export default BreadCrumbMenu