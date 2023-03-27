import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import {ArticleCardFeatureImg} from '../index'

const ArticleCardStyle1 = ({article}) => {
    let navigate = useNavigate();

    return (
        <div className="articleCardStyle1">
            <ArticleCardFeatureImg articleId={article.imageId}/>
            <p className="articleCardCategory">{article.article_categories.split(",")[0]}</p>
            <p className="articleCardTitle">{article.title}</p>
            <button className="articleCardButton">Read more</button>
        </div>
    )
}

export default ArticleCardStyle1;