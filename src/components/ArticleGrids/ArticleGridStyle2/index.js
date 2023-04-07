import React from 'react'

import './style.css'

import {ArticleTabCards} from '../../'

const ArticleGridStyle2 = ({articles, loaded}) => {

    return (
        <div className="articleGridStyle2">
            <ArticleTabCards article={articles[0]} classnames={"articleTabCard"} loaded={loaded}/>
            <ArticleTabCards article={articles[1]} classnames={"articleTabCard"} loaded={loaded}/>
            <ArticleTabCards article={articles[2]} classnames={"articleTabCard"} loaded={loaded}/>
            <ArticleTabCards article={articles[3]} classnames={"articleTabCard"} loaded={loaded}/>
        </div>
    )
}

export default ArticleGridStyle2;