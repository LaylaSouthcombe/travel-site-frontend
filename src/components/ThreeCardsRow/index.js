import React from 'react'
import './style.css'

import {ArticleTabCards} from '../'

const ThreeCardsRow = ({articles}) => {
    
    return (
        <div className="threeCardsRow">
            <ArticleTabCards article={articles[0]}classnames={"threeCard"}/>
            <ArticleTabCards article={articles[1]}classnames={"threeCard"}/>
            <ArticleTabCards article={articles[2]}classnames={"threeCard"}/>
        </div>
    )
}

export default ThreeCardsRow;