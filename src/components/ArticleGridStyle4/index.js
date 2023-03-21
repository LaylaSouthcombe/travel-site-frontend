import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {ArticleCardStyle1, ArticleListCardStyle1 , ArticleTabCards} from '..'

import './style.css'

const ArticleGridStyle4 = ({articles}) => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return (
        <div className="articleGridStyle4">
            <div className="style4column1">
                <ArticleTabCards article={articles[0]}/>
            </div>
            <div className="style4column2">
                <div className="style4column2row1">
                    {windowSize < 768 ? <ArticleTabCards article={articles[1]}/> : <ArticleListCardStyle1 article={articles[1]}/>}
                </div>
                <div className="style4column2row2">
                    <ArticleTabCards article={articles[2]}/>
                    <ArticleTabCards article={articles[3]}/>
                </div>
            </div>
        </div>
    )
}

export default ArticleGridStyle4;