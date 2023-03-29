import React, {useState} from 'react'

import {ArticleListCardStyle1 , ArticleTabCards} from '..'

import './style.css'

const ArticleGridStyle4 = ({articles, loaded}) => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return (
        <div className="articleGridStyle4">
            <div className="style4column1">
                <ArticleTabCards article={articles[0]} classnames={"articleTabCard"}/>
            </div>
            <div className="style4column2">
                <div className={loaded ? "style4column2row1" : null}>
                    {windowSize < 768 ? <ArticleTabCards article={articles[1]} classnames={"articleTabCard"}/> : <ArticleListCardStyle1 article={articles[1]}/>}
                </div>
                <div className="style4column2row2">
                    <ArticleTabCards article={articles[2]} classnames={"articleTabCard"}/>
                    <ArticleTabCards article={articles[3]} classnames={"articleTabCard"}/>
                </div>
            </div>
        </div>
    )
}

export default ArticleGridStyle4;