import React from 'react'
import { useNavigate } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

import './style.css'

const HeroArticleSection = ({article, loaded}) => {
    let navigate = useNavigate();

    return (
        <>
            {loaded ? 
            <>
                {article !== undefined ? 
                <div className="heroArticle articleCard" onClick={() => navigate("/article/" + article.id)}>
                    <div className="heroArticleImg">
                        <img src={article.feature_img_url} alt=""/>
                    </div>
                    <p className="heroArticleTag articleCardCategoryArea articleCardCategory">{article.article_category}</p>
                    <p className="heroArticleTitle">{article.title}</p>
                </div>
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

export default HeroArticleSection;