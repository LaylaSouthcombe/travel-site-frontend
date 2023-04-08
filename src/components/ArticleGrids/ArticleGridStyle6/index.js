import React from 'react'

import {ArticleTabCards, ArticleListCardStyle1} from '../../'

import './style.css'

const ArticleGridStyle6 = ({articles, loaded}) => {

    return (
        <div className="articleGridStyle6">
            <div className="style6column1">
                <ArticleTabCards article={articles[0]} classnames={"articleTabCard"} loaded={loaded} keyId={'style1'}/>
            </div>
            <div className={loaded ? "style6column2" : null}>
                <div>
                    <ArticleListCardStyle1 article={articles[1]} loaded={loaded} keyId={'style16'}/>
                </div>
                <div>
                    <ArticleListCardStyle1 article={articles[2]} loaded={loaded} keyId={'style61'}/>
                </div>
            </div>
            <div className="style6column1">
                <ArticleTabCards article={articles[3]} classnames={"articleTabCard"} loaded={loaded} keyId={'style63'}/>
            </div>
        </div>
    )
}

export default ArticleGridStyle6;