import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import {ArticleCardFeatureImg} from '../index'

const ArticleCardStyle1 = ({article}) => {
    let navigate = useNavigate();

    return (
        <div className="articleCardStyle1">
            <ArticleCardFeatureImg articleId={article.imageId}/>
            <p className="category">{article.trip_categories.split(",")[0]}</p>
            <p className="title">{article.title}</p>
        </div>
    )
}

export default ArticleCardStyle1;