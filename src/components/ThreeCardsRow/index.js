import React from 'react'
import './style.css'

import {ArticleTabCards} from '../'

const ThreeCardsRow = ({articles, loaded}) => {
    
    return (
        <div className="threeCardsRow">
            <ArticleTabCards article={articles[0]} classnames={"threeCard"} loaded={loaded}/>
            <ArticleTabCards article={articles[1]} classnames={"threeCard"} loaded={loaded}/>
            <ArticleTabCards article={articles[2]} classnames={"threeCard"} loaded={loaded}/>
        </div>
    )
}

export default ThreeCardsRow;