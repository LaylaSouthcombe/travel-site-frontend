import React from 'react'

import './style.css'

import {ArticleTabCards} from '..'

const ArticleGridStyle2 = ({articles}) => {

    return (
        <div className="articleGridStyle2">
            <ArticleTabCards article={articles[0]} classnames={"articleTabCard"}/>
            <ArticleTabCards article={articles[1]} classnames={"articleTabCard"}/>
            <ArticleTabCards article={articles[2]} classnames={"articleTabCard"}/>
            <ArticleTabCards article={articles[3]} classnames={"articleTabCard"}/>
        </div>
    )
}

export default ArticleGridStyle2;