import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import './style.css'
import { useNavigate } from 'react-router-dom';
const ArticleTabCards = ({article, classnames, keyId, loaded}) => {
    let navigate = useNavigate();

    return (
        <>
        {loaded ? 
            <div className={classnames + " articleCard"} onClick={() => navigate("/article/" + article.id)} key={keyId}>
                <div className="cardImg">
                    <img src={article.feature_img_url !== null ? article.feature_img_url : article.feature_img_base64} alt=""/>
                </div>
                <div className="threeCardInfo">
                    <p className="articleCardCategoryArea articleCardCategory">{article.article_categories.split(",")[0]}</p>
                    <p className="articleCardTitle articleTabCardTitle" maxLength="4">
                        {article.title}
                    </p>
                </div>
            </div>
        :
            <div className={classnames + " skeletonArticleCard"} key={keyId}>
                <div className="cardImg">
                    <Skeleton variant="rounded" width={"100%"} height={160}/>
                </div>
                <div className="threeCardInfo">
                    <p className="skeletonArticleTag">
                        <Skeleton variant="rounded" width={"100%"} height={20}/>
                    </p>
                    <p className="articleCardTitle skeletonArticleCardTitle" maxLength="4">
                        <Skeleton variant="rounded" width={"100%"} height={20}/>
                        <Skeleton variant="rounded" width={"100%"} height={20}/>
                    </p>
                </div>
            </div>
        }
        </>
    )
}

export default ArticleTabCards;