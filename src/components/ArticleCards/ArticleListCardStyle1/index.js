import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import './style.css'

const SkeletonArticleListCard1 = () => {
    return (
        <div className="articleListCardStyle1 skeletonListCard">
            <div className="skeletonListCardImg" data-testid="skeleton-image">
                <Skeleton variant="rounded" width={"100%"} height={160}/>
            </div>
            <div className="articleCardMeta skeletonListCardMeta" data-testid="skeleton-category">
                <p className="articleCardCategoryArea skeletonArticleTag"><Skeleton variant="rounded" width={"100%"} height={20}/></p>
                <p className="articleCardTitle skeletonArticleCardTitle" data-testid="skeleton-title">
                    <Skeleton variant="rounded" width={"100%"} height={20}/>
                    <Skeleton variant="rounded" width={"100%"} height={20}/>
                </p>
            </div>
        </div> 
    )
}

const ArticleListCardStyle1Image = ({image}) => {
    return (
        <div className="cardImg">
            <img src={image} alt=""/>
        </div>
    )
}

const ArticleListCardStyle1Meta = ({category, title}) => {
    return (
        <div className="articleCardMeta">
            <p className="articleCardCategoryArea articleCardCategory">{category}</p>
            <p className="articleCardTitle articleListCardTitle">{title}</p>
        </div>
    )
}

const ArticleListCardStyle1 = ({article, loaded}) => {

    return (
        <>
        {loaded ? 
        <>
            {article !== undefined ?   
            <>
                <a className="articleListCardStyle1 articleCard" href={"/article/" + article.id} target="_blank" rel="noreferrer">
                    <ArticleListCardStyle1Image image={article.feature_img_url}/>
                    <ArticleListCardStyle1Meta category={article.article_category} title={article.title}/>
                </a>
            </>
            : null}
        </>
        :    
        <>
            <SkeletonArticleListCard1/>
        </>
        }
        </>
    )
}

export default ArticleListCardStyle1;