import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import {ArticleCardFeatureImg} from '../index'

const ArticleListCardStyle2 = ({article}) => {
    let navigate = useNavigate();

    return (
        <div className="articleListCardStyle2">
            <ArticleCardFeatureImg articleId={article.imageId}/>
            <div className="articleCardMeta">
                <p className="articleCardCategory">{article.trip_categories.split(",")[0]}</p>
                <p className="articleCardTitle articleListCardTitle">{article.title}</p>
            </div>
            <button className="articleCardButton">Read more</button>
        </div>
    )
}

export default ArticleListCardStyle2;