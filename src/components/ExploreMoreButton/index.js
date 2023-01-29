import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import {ArticleCardFeatureImg} from '../index'

const ExploreMoreButton = ({endpoint}) => {
    let navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(endpoint)
    }
    return (
        <div className="exploreMoreButton">
            <div onClick={handleButtonClick}>Explore more</div>
        </div>
    )
}

export default ExploreMoreButton;