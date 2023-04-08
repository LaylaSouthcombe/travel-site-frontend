import React from 'react'

import {ArticleListCardStyle4} from '../../'

import './style.css'

const ArticleListGridStyle2 = ({articles, loaded}) => {

    return (
        <div className="articleListGridStyle2">
            <div className="liststyle2column1">
                {articles.map((article, i) => {
                    return (
                        <ArticleListCardStyle4 article={article} loaded={loaded} keyId={'listCardStyle4' + i}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ArticleListGridStyle2;