import React from 'react'

import {ArticleTabCards} from '..'

import './style.css'

const ArticleGridStyle8 = ({articles}) => {

    return (
        <div className="articleGridStyle8">
            <div className="style8column1">
                <ArticleTabCards article={articles[0]}/>
                <ArticleTabCards article={articles[1]}/>
            </div>
            <div className="style8column2">
                <ArticleTabCards article={articles[2]}/>
            </div>
            <div className="style8column3">
                <ArticleTabCards article={articles[3]}/>
                <ArticleTabCards article={articles[4]}/>
            </div>
        </div>
    )
}

export default ArticleGridStyle8;