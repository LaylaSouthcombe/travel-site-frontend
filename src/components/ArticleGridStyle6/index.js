import React, {useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {ArticleTabCards, ArticleListCardStyle1} from '..'

import './style.css'

const ArticleGridStyle6 = ({articles}) => {

    return (
        <div className="articleGridStyle6">
            <div className="style6column1">
                <ArticleTabCards article={articles[0]}/>
            </div>
            <div className="style6column2">
                <div>
                    <ArticleListCardStyle1 article={articles[1]}/>
                </div>
                <div>
                    <ArticleListCardStyle1 article={articles[2]}/>
                </div>
            </div>
            <div className="style6column1">
                <ArticleTabCards article={articles[3]}/>
            </div>
        </div>
    )
}

export default ArticleGridStyle6;