import React from 'react'

import {ArticleTabCards, ArticleListCardStyle1} from '../'

import {article} from '../../utilities/article'

const ArticleGridStyle1 = ({loaded}) => {

    return (
        <div className="articleGridStyle1">
            <div className="style1column1">
                <ArticleTabCards article={article} loaded={loaded}/>
            </div>
            <div className="style1column2">
                <ArticleListCardStyle1 article={article} classnames={"articleTabCard"} loaded={loaded}/>
                <ArticleListCardStyle1 article={article} classnames={"articleTabCard"} loaded={loaded}/>
                <ArticleListCardStyle1 article={article} classnames={"articleTabCard"} loaded={loaded}/>
            </div>
        </div>
    )
}

export default ArticleGridStyle1;