import React from 'react'

import {ArticleTabCards} from '../../'

import './style.css'

const ThreeCardsRow = ({articles, loaded}) => {
    
    return (
        <div className="threeCardsRow">
            <ArticleTabCards article={articles[0]} classnames={"threeCard"} loaded={loaded} keyId={'row1'}/>
            <ArticleTabCards article={articles[1]} classnames={"threeCard"} loaded={loaded} keyId={'row2'}/>
            <ArticleTabCards article={articles[2]} classnames={"threeCard"} loaded={loaded} keyId={'row3'}/>
        </div>
    )
}

export default ThreeCardsRow