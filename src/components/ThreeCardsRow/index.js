import React from 'react'
import './style.css'

const ThreeCardsRow = ({article}) => {
    
    return (
        <div className="threeCardsRow">
            <a className="threeCard articleCard" href={"http://localhost:3001/article/" + article.id}>
                <div className="cardImg">
                    <img src={article.imageUrl} alt=""/>
                </div>
                <div className="threeCardInfo" dataCategory={article.trip_categories.split(",")[0]}>
                    <p className="articleCardCategory">{article.trip_categories.split(",")[0]}</p>
                    <p className="articleCardTitle">
                        {article.title}
                    </p>
                </div>
            </a>
            <a className="threeCard articleCard" href={"http://localhost:3001/article/" + article.id}>
                <div className="cardImg">
                    <img src={article.imageUrl} alt=""/>
                </div>
                <div className="threeCardInfo" dataCategory={article.trip_categories.split(",")[0]}>
                    <p className="articleCardCategory">{article.trip_categories.split(",")[0]}</p>
                    <p className="articleCardTitle">
                        {article.title}
                    </p>
                </div>
            </a>
            <a className="threeCard articleCard" href={"http://localhost:3001/article/" + article.id}>
                <div className="cardImg">
                    <img src={article.imageUrl} alt=""/>
                </div>
                <div className="threeCardInfo" dataCategory={article.trip_categories.split(",")[0]}>
                    <p className="articleCardCategory">{article.trip_categories.split(",")[0]}</p>
                    <p className="articleCardTitle">
                        {article.title}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default ThreeCardsRow;