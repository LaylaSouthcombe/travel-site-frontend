import React from 'react'
import { useNavigate } from 'react-router-dom';

import './style.css'

const HeroArticleSection = ({article}) => {
    return (
        <>
            <a href="" className="heroArticle articleCard">
                <div className="heroArticleImg">
                    <img src={article.feature_img_url !== "" ? article.feature_img_url : article.feature_img_base64} alt=""/>
                </div>
                <p className="heroArticleTag articleCardCategory">{article.trip_categories.split(",")[0]}</p>
                <a href="" className="heroArticleTitle">{article.title}</a>
            </a>
        </>
    )
}

export default HeroArticleSection;