import React, {Fragment} from 'react'
import Skeleton from '@mui/material/Skeleton';
import './style.css'

const ArticleTabCards = ({article, classnames, keyId, loaded}) => {

    return (
        <Fragment key={keyId}>
            {loaded ?
            <Fragment key={keyId}>
                {article !== undefined ? 
                <Fragment key={keyId}>
                    <a className={classnames + " articleCard"} key={keyId} href={"/article/" + article.id} target="_blank" rel="noreferrer">
                        <div className="cardImg">
                            <img src={article.feature_img_url} alt=""/>
                        </div>
                        <div className="threeCardInfo">
                            <p className="articleCardCategoryArea articleCardCategory">{article.article_category}</p>
                            <p className="articleCardTitle articleTabCardTitle" maxLength="4">
                                {article.title}
                            </p>
                        </div>
                    </a>
                </Fragment>
                : null}
            </Fragment>
            :
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
            }
        </Fragment>
    )
}

export default ArticleTabCards;