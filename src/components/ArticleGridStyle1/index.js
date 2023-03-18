import React, {useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {ArticleCardStyle1, ArticleTabCards, ArticleListCardStyle1} from '../'

import {article} from '../../data/article'

const ArticleGridStyle1 = () => {

    return (
        <div className="articleGridStyle1">
            <div className="style1column1">
                <ArticleTabCards article={article}/>
            </div>
            <div className="style1column2">
                    <ArticleListCardStyle1 article={article}/>
                    <ArticleListCardStyle1 article={article}/>
                    <ArticleListCardStyle1 article={article}/>
            </div>
        </div>
    )
}

export default ArticleGridStyle1;