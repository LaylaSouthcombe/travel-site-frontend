import React from 'react'
import {useLocation} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import './style.css'

import {formatWord} from '../../utilities/formatWord'

const BreadCrumbMenu = ({loaded}) => {

    const location = useLocation();
    const pageLocation = location.pathname.split("/")[1]

    let summaryInfo = pageLocation === "trip-planning" ? "plan your trip summary" : "popular articles summary"

    return (
         <>
            <div className="breadcrumbMenu">
               {loaded ? 
               <>
                    <div className="breadcrumb">
                        <a href="">Home</a>
                    </div>
                    <p className="countryCityName">{formatWord(pageLocation)}</p>
                    <p className="countryCitySummary">{summaryInfo}</p>
               </>
                : <Skeleton variant="rectangular" width={210} height={20}/>
                }
            </div>
        </>
    )

}

export default BreadCrumbMenu;