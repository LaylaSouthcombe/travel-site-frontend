import React from 'react'
import {ArticleTabCards} from '../../'

import './style.css'

const ArticleGridStyle8 = ({articles, loaded}) => {

    return (
        <div className="articleGridStyle8">
            <div className="style8column1">
                <ArticleTabCards article={articles[0]} loaded={loaded} keyId={'style81'}/>
                <ArticleTabCards article={articles[1]} loaded={loaded} keyId={'style82'}/>
            </div>
            <div className="style8column2">
                <ArticleTabCards article={articles[2]} loaded={loaded} keyId={'style83'}/>
            </div>
            <div className="style8column3">
                <ArticleTabCards article={articles[3]} loaded={loaded} keyId={'style84'}/>
                <ArticleTabCards article={articles[4]} loaded={loaded} keyId={'style85'}/>
            </div>
        </div>
    )
}

export default ArticleGridStyle8;