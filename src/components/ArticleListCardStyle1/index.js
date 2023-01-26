import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import {ArticleCardFeatureImg} from '../index'

const ArticleListCardStyle1 = ({article}) => {
    let navigate = useNavigate();

    return (
        <div className="articleListCardStyle1">
            <ArticleCardFeatureImg articleId={article.imageId}/>
            <div className="articleMeta">
                <p className="category">{article.trip_categories.split(",")[0]}</p>
                <p className="title">{article.title}</p>
            </div>
        </div>
    )
}

export default ArticleListCardStyle1;