import React from 'react'
import {useLocation} from 'react-router-dom'

import {formatWord} from '../../../utilities/formatWord'

import './style.css'

const BreadCrumbMenu = () => {

    const location = useLocation()
    const pageLocation = location.pathname.split("/")[1]

    let summaryInfo = pageLocation === "trip-planning" ? "Get ready to elevate your travel game with expert insights and savvy advice. From packing tips to budget-friendly hacks, we've got you covered. " : "Explore a world of wanderlust as we curate the finest travel tales for your inspiration. Discover your next adventure, and let your wanderlust take flight."

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