import React from 'react'
import './style.css'

const ArticleTabCards = ({article, classnames}) => {
    return (
        <>
            <a className={classnames + " articleCard"} href={"http://localhost:3001/article/" + article.id}>
                <div className="cardImg">
                    <img src={article.feature_img_url !== null ? article.feature_img_url : article.feature_img_base64} alt=""/>
                </div>
                <div className="threeCardInfo">
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