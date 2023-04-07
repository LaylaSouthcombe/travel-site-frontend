import React from 'react'
import {useLocation} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';


import {formatWord} from '../../../utilities/formatWord'

const CategoriesBreadCrumbMenu = () => {

    const location = useLocation();
    const pageLocation = location.pathname.split("=")[1]

    // let summaryInfo = pageLocation === "trip-planning" ? "plan your trip summary" : "popular articles summary"

    let summaryInfo = {
        "adventure": "Trips for those who love the thrill of an adventure",
        "art&culture": "Explore the array of art and culture that destinations around the world offer",
        "budget-friendly": "Budget-friendly trips for those who want to explore the world without breaking the bank",
        "city-break": "Take a city break to experience the atomosphere of some of the most exciting cities in the world",
        "food": "Eat your way around the world by taking a trip to food-famous destinations",
        "luxury": "Treat yourself and take a lavish trip to some spectactular destinations",
        "nature": "Uncover the beauties of the natural world with these trips",
        "relaxing": "Kick your feet up and de-stress in some of the most relaxing places in the world"
    }

    return (
         <>
         {summaryInfo[pageLocation] !== undefined ? 
         <>
            <div className="breadcrumbMenu">
                    <div className="breadcrumb">
                        <a href="/trip-styles">Trip Styles</a>
                    </div>
                    <p className="countryCityName">{formatWord(pageLocation)}</p>
                    <p className="countryCitySummary">{summaryInfo[pageLocation]}</p>
            </div>
         </>
         : null}
        </>
    )

}

export default CategoriesBreadCrumbMenu;