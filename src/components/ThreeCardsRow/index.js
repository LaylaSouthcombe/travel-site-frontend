import React from 'react'
import './style.css'

const ThreeCardsRow = ({articles}) => {
    
    return (
        <div className="threeCardsRow">
            <a className="threeCard articleCard" href={"http://localhost:3001/article/" + articles[0].id}>
                <div className="cardImg">
                    <img src={articles[0].imageUrl} alt=""/>
                </div>
                <div className="threeCardInfo" dataCategory={articles[0].trip_categories.split(",")[0]}>
                    <p className="articleCardCategory">{articles[0].trip_categories.split(",")[0]}</p>
                    <p className="articleCardTitle">
                        {articles[0].title}
                    </p>
                </div>
            </a>
            <a className="threeCard articleCard" href={"http://localhost:3001/article/" + articles[0].id}>
                <div className="cardImg">
                    <img src={articles[0].imageUrl} alt=""/>
                </div>
                <div className="threeCardInfo" dataCategory={articles[0].trip_categories.split(",")[0]}>
                    <p className="articleCardCategory">{articles[0].trip_categories.split(",")[0]}</p>
                    <p className="articleCardTitle">
                        {articles[0].title}
                    </p>
                </div>
            </a>
            <a className="threeCard articleCard" href={"http://localhost:3001/article/" + articles[0].id}>
                <div className="cardImg">
                    <img src={articles[0].imageUrl} alt=""/>
                </div>
                <div className="threeCardInfo" dataCategory={articles[0].trip_categories.split(",")[0]}>
                    <p className="articleCardCategory">{articles[0].trip_categories.split(",")[0]}</p>
                    <p className="articleCardTitle">
                        {articles[0].title}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default ThreeCardsRow;