import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

import {article} from '../../utilities/article'

import {ArticleTabCards} from '../../components'

const SkeletonArticleFilterList = () => {

    let loadingArticles = [article, article, article, article, article, article]

    return (
        <div className="articleListSection">
            <div className="articleListFilterSection skeletonFilterSection">
                <p><Skeleton variant="rounded" width={"80%"} height={20}/></p>
                <ul className="filterLists">
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                </ul>
                <ul className="filterLists">
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                </ul>
            </div>
            <>
                <div className="articleList">
                    {loadingArticles.map((article, i) => {
                        return (
                            <>
                                <ArticleTabCards keyId={"articleListLong " + i} key={"articleListLong " + i} article={article} loaded={false}/>
                            </>
                        )
                    })}
                </div>
            </>
        </div>
    )
}

export default SkeletonArticleFilterList;