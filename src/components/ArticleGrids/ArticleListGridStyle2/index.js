import React from 'react'

import {ArticleListCardStyle4} from '../../'

import './style.css'

const ArticleListGridStyle2 = ({articles, loaded}) => {

    return (
        <div className="articleListGridStyle2">
            <div className="liststyle2column1">
                {/* {articles.map((article, i) => {
                    return (
                        <ArticleListCardStyle4 article={article} loaded={loaded} keyId={'listCardStyle4' + i}/>
                    )
                })} */}
                <ArticleListCardStyle4 article={articles[0]} loaded={loaded} keyId={'listCardStyle40'}/>
                <ArticleListCardStyle4 article={articles[1]} loaded={loaded} keyId={'listCardStyle41'}/>
                <ArticleListCardStyle4 article={articles[2]} loaded={loaded} keyId={'listCardStyle42'}/>
                <ArticleListCardStyle4 article={articles[3]} loaded={loaded} keyId={'listCardStyle43'}/>
            </div>
        </div>
    )
}

export default ArticleListGridStyle2;