import React from 'react'

import {ArticleTabCards} from '../../'

import './style.css'

const ArticleGridStyle8 = ({articles, loaded}) => {

    return (
        <div className="articleGridStyle8">
            <div className="style8column1">
                <ArticleTabCards article={articles[0]} loaded={loaded}/>
                <ArticleTabCards article={articles[1]} loaded={loaded}/>
            </div>
            <div className="style8column2">
                <ArticleTabCards article={articles[2]} loaded={loaded}/>
            </div>
            <div className="style8column3">
                <ArticleTabCards article={articles[3]} loaded={loaded}/>
                <ArticleTabCards article={articles[4]} loaded={loaded}/>
            </div>
        </div>
    )
}

export default ArticleGridStyle8;