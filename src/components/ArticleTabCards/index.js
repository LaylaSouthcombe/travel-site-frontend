import React from 'react'
import './style.css'

const ArticleTabCards = ({article}) => {
    
    return (
        <>
            <a className="articleTabCard articleCard" href={"http://localhost:3001/article/" + article.id}>
                <div className="cardImg">
                    <img src={article.imageUrl} alt=""/>
                </div>
                <div className="threeCardInfo" dataCategory={article.trip_categories.split(",")[0]}>
                    <p className="articleCardCategory">{article.trip_categories.split(",")[0]}</p>
                    <p className="articleCardTitle articleTabCardTitle" maxLength="4">
                        {article.title}
                    </p>
                </div>
            </a>
        </>
    )
}

export default ArticleTabCards;