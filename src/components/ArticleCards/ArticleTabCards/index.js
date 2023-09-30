import React, {Fragment} from 'react'
import Skeleton from '@mui/material/Skeleton';
import './style.css'

const SkeletonArticleCard = ({classnames, keyId}) => {
    return (
        <div className={classnames + " skeletonArticleCard"} key={keyId}>
            <div className="cardImg" data-testid="skeleton-image">
                <Skeleton variant="rounded" width={"100%"} height={160}/>
            </div>
            <div className="threeCardInfo">
                <p className="skeletonArticleTag" data-testid="skeleton-category">
                    <Skeleton variant="rounded" width={"100%"} height={20}/>
                </p>
                <p className="articleCardTitle skeletonArticleCardTitle" maxLength="4" data-testid="skeleton-title">
                    <Skeleton variant="rounded" width={"100%"} height={20}/>
                    <Skeleton variant="rounded" width={"100%"} height={20}/>
                </p>
            </div>
        </div>
    )
}

const ArticleTabCardImg = ({image}) => {
    return (
        <div className="cardImg">
            <img src={image} alt=""/>
        </div>
    )
}

const ArticleTabCardMeta = ({category, title}) => {
    return (
        <div className="threeCardInfo">
            <p className="articleCardCategoryArea articleCardCategory">{category}</p>
            <p className="articleCardTitle articleTabCardTitle">
                {title}
            </p>
        </div>
    )
}

const ArticleTabCards = ({article, classnames, keyId, loaded}) => {

    return (
        <Fragment key={keyId}>
            {loaded ?
            <>
                {article !== undefined ? 
                <>
                    <a className={classnames + " articleCard"} key={keyId} href={"/article/" + article.id} target="_blank" rel="noreferrer">
                        <ArticleTabCardImg image={article.feature_img_url}/>
                        <ArticleTabCardMeta category={article.article_category} title={article.title}/>
                    </a>
                </>
                : null}
            </>
            :
            <SkeletonArticleCard classnames keyId/>
            }
        </Fragment>
    )
}

export default ArticleTabCards;