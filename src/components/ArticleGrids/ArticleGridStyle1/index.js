import React from 'react'

import {ArticleTabCards, ArticleListCardStyle1} from '../..'

import {article} from '../../../utilities/article'

const ArticleGridStyle1 = ({articles, loaded}) => {

    return (
        <div className="articleGridStyle1">
            <div className="style1column1">
                <ArticleTabCards article={articles[0]} loaded={loaded} keyId={'gridStyle1'}/>
            </div>
            <div className="style1column2">
                <ArticleListCardStyle1 article={articles[1]} classnames={"articleTabCard"} loaded={loaded}/>
                <ArticleListCardStyle1 article={articles[2]} classnames={"articleTabCard"} loaded={loaded}/>
                <ArticleListCardStyle1 article={articles[3]} classnames={"articleTabCard"} loaded={loaded}/>
            </div>
        </div>
    )
}

export default ArticleGridStyle1;