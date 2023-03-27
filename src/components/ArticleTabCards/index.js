import React from 'react'
import './style.css'

const ArticleTabCards = ({article, classnames, keyId}) => {
    return (
        <>
            <a className={classnames + " articleCard"} href={"http://localhost:3001/article/" + article.id} target="_blank" rel="noreferrer" key={keyId}>
                <div className="cardImg">
                    <img src={article.feature_img_url !== null ? article.feature_img_url : article.feature_img_base64} alt=""/>
                </div>
                <div className="threeCardInfo">
                    <p className="articleCardCategory">{article.article_categories.split(",")[0]}</p>
                    <p className="articleCardTitle articleTabCardTitle" maxLength="4">
                        {article.title}
                    </p>
                </div>
            </a>
        </>
    )
}

export default ArticleTabCards;