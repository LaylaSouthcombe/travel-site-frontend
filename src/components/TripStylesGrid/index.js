import React from 'react'

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

    const tripStyles = [
        {
            url: "/articles/category=city-break",
            image: city,
            alt: "Cityscape illustration",
            text: "City Break"
        },
        {
            url: "/articles/category=luxury",
            image: luxury,
            alt: "Camera with photographs illustration",
            text: "Luxury"
        },
        {
            url: "/articles/category=nature",
            image: nature,
            alt: "Leafs and nature illustration",
            text: "Nature"
        },
        {
            url: "/articles/category=food",
            image: food,
            alt: "Couple eating dinner outside illustration",
            text: "Food"
        },
        {
            url: "/articles/category=relaxing",
            image: relaxing,
            alt: "Person on beach illustration",
            text: "Relaxing"
        },
        {
            url: "/articles/category=budget-friendly",
            image: budget,
            alt: "Piggy bank illustration",
            text: "Budget Friendly"
        },
        {
            url: "/articles/category=art-and-culture",
            image: art,
            alt: "Person standing infront of art frame illustration",
            text: "Art & Culture"
        },
        {
            url: "/articles/category=adventure",
            image: adventure,
            alt: "Woman standing by mountains illustration",
            text: "Adventure"
        }
    ]

    return (
        <div className="tripStyles">
            {tripStyles.map(style => (
                <a href={style.url} target="_blank" rel="noreferrer" key={style.text}>
                    <div>
                    <img src={style.image} alt={style.alt}/>  
                    </div>
                    <p>{style.text}</p>
                </a>
            ))}
        </div>
    )
}

export default TripStylesGrid