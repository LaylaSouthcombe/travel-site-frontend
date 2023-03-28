import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import {ArticleCardFeatureImg} from '../index'

const ArticleListCardStyle3 = ({article}) => {
    let navigate = useNavigate();

    return (
        <div className="articleListCardStyle3">
                <p className="articleCardCategoryArea articleListCardCategory3">{article.article_categories.split(",")[0]}</p>
                <p className="articleCardTitle articleListCardTitle3">{article.title}</p>
                <div className="articleListCard3Button">Read more</div>
        </div>
    )
}

export default ArticleListCardStyle3;