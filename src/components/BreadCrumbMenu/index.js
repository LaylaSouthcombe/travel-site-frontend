import React from 'react'
import {useLocation} from 'react-router-dom';
import './style.css'

import {formatWord} from '../../data/formatWord'

const BreadCrumbMenu = () => {

    const location = useLocation();
    const pageLocation = location.pathname.split("/")[1]


    return (
        <>
            <div className="breadcrumbMenu">
                <div className="breadcrumb">
                    <a href="">{formatWord(pageLocation)}</a>
                </div>
            </div>
        </>
    )

}

export default BreadCrumbMenu;