import React from 'react'
import Skeleton from '@mui/material/Skeleton'

import './style.css'

const HeroArticleSection = ({article, loaded}) => {
    console.log(article)
    return (
        <>
            {loaded ? 
            <>
                {article !== undefined ? 
                <a className="heroArticle articleCard" href={"/article/" + article.id} target="_blank" rel="noreferrer">
                    <div className="heroArticleImg">
                        <img src={article.feature_img_url} alt=""/>
                    </div>
                    <p className="heroArticleTag articleCardCategoryArea articleCardCategory">{article.article_category}</p>
                    <p className="heroArticleTitle">{article.title}</p>
                </a>
                :
                null}
            </>
            :
            <div className="heroArticle skeletonArticleCard">
                <div className="heroArticleImg">
                    <Skeleton variant="rounded" width={"100%"} height={200}/>
                </div>
                <p className="skeletonHeroArticleTag">
                    <Skeleton variant="rounded" width={"100%"} height={20}/>
                </p>
                <p className="skeletonHeroArticleTitle">
                    <Skeleton variant="rounded" width={"100%"} height={20}/>
                    <Skeleton variant="rounded" width={"100%"} height={20}/>
                    <Skeleton variant="rounded" width={"100%"} height={20}/>
                </p>
            </div>
            }
        </>
    )
}

export default HeroArticleSection