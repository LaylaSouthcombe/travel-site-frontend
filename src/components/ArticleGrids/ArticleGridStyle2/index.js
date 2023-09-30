import React from 'react'
import {ArticleTabCards} from '../../'

import './style.css'

const ArticleGridStyle2 = ({articles, loaded}) => {

    return (
        <div className="articleGridStyle2">
            <ArticleTabCards article={articles[0]} classnames={"articleTabCard"} loaded={loaded} keyId={'gridStyle21'}/>
            <ArticleTabCards article={articles[1]} classnames={"articleTabCard"} loaded={loaded} keyId={'gridStyle22'}/>
            <ArticleTabCards article={articles[2]} classnames={"articleTabCard"} loaded={loaded} keyId={'gridStyle23'}/>
            <ArticleTabCards article={articles[3]} classnames={"articleTabCard"} loaded={loaded} keyId={'gridStyle24'}/>
        </div>
    )
}

export default ArticleGridStyle2;