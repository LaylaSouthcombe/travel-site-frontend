import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import {ArticleCardFeatureImg} from '../index'

const ArticleListCardStyle4 = ({article}) => {
    let navigate = useNavigate();

    return (
        <div className="articleListCardStyle4">
                <ArticleCardFeatureImg articleId={article.imageId}/>
                <p className="articleCardTitle articleListCardTitle4" onClick={()=>navigate()}>{article.title}</p>
        </div>
    )
}

export default ArticleListCardStyle4;