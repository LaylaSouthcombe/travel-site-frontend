import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { useParams} from 'react-router-dom';
import {article} from '../../utilities/article'

import {ArticleTabCards, GoogleAd, ArticleListGridStyle2} from '../../components'

const SkeletonArticleFilterList = () => {
    const {query} = useParams();
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
            <div className="articleList">
                {loadingArticles.map((article, i) => {
                    return (
                            <ArticleTabCards keyId={"articleListLong " + i} key={"articleListLong " + i} article={article} loaded={false}/>
                    )
                })}
            </div>
            <div className="sideAds">
                <GoogleAd dataAdSlot={"4238599075"}/>
                    {query !== 'popular' ? 
                    <>
                        <p className="popularSideHeading">Popular on Sojo Travels</p>
                        <div className="popularArticlesSideList">
                            <ArticleListGridStyle2 articles={[article,article, article, article]} loaded={false}/> 
                        </div>
                        <GoogleAd dataAdSlot={"9095054520"}/>
                    </>
                    : null}
                {/* make sticky */}
            </div>
        </div>
    )
}

export default SkeletonArticleFilterList;