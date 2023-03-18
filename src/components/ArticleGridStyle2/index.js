import React from 'react'

import './style.css'

import {ArticleTabCards} from '..'

const ArticleGridStyle2 = ({articles}) => {

    return (
        <div className="articleGridStyle2">
            <ArticleTabCards article={articles[0]}/>
            <ArticleTabCards article={articles[1]}/>
            <ArticleTabCards article={articles[2]}/>
            <ArticleTabCards article={articles[3]}/>
        </div>
    )
}

export default ArticleGridStyle2;