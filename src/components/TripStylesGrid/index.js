import React from 'react'
import { useNavigate } from 'react-router-dom';

import adventure from '../../images/TripStylesIcons/adventure.png'
import art from '../../images/TripStylesIcons/art.png'
import budget from '../../images/TripStylesIcons/budget.png'
import city from '../../images/TripStylesIcons/city.png'
import food from '../../images/TripStylesIcons/food.png'
import nature from '../../images/TripStylesIcons/nature.png'
import luxury from '../../images/TripStylesIcons/luxury.png'
import relaxing from '../../images/TripStylesIcons/relaxing.png'

import './style.css'

const TripStylesGrid = () => {
    let navigate = useNavigate();

    return (
        <div className="tripStyles">
            <div onClick={() => navigate('/trip-styles/city-breaks')}>
                <div>
                <img src={city} alt="Cityscape illustration" /> 
                </div>
                <p>City Break</p>
            </div>
            <div onClick={() => navigate('/trip-styles/luxury')}>
                <div>
                    <img src={luxury} alt="Camera with photographs illustration" />
                </div>
                <p>Luxury</p>
            </div>
            <div onClick={() => navigate('/trip-styles/nature')}>
                <div>
                <img src={nature} alt="Leafs and nature illustration" /> 
                </div>
                <p>Nature</p>
            </div>
            <div onClick={() => navigate('/trip-styles/food')}>
                <div>
                <img src={food} alt="Couple eating dinner outside illustration" /> 
                </div>
                <p>Food</p>
            </div>
            <div onClick={() => navigate('/trip-styles/relaxing')}>
                <div>
                    <img src={relaxing} alt="Person on beach illustration" />
                </div>
                <p>Relaxing</p>
            </div>
            <div onClick={() => navigate('/trip-styles/budget-friendly')}>
                <div>
                <img src={budget} alt="Piggy bank illustration" /> 
                </div>
                <p>Budget Friendly</p>
            </div>
            <div onClick={() => navigate('/trip-styles/art-and-culture')}>
                <div>
                    <img src={art} alt="Person standing infront of art frame illustration" />
                </div>
                <p>Art & Culture</p>
            </div>
            <div onClick={() => navigate('/trip-styles/adventure')}>
                <div>
                <img src={adventure} alt="Woman standing by mountains illustration" />  
                </div>
                <p>Adventure</p>
            </div>
        </div>
    )
}

export default TripStylesGrid;