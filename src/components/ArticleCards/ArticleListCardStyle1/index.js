import React from 'react'
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import './style.css'

const ArticleListCardStyle1 = ({article, loaded}) => {
    let navigate = useNavigate();

    return (
        <>
        {loaded ? 
        <>
            {article !== undefined ?   
                <>
                    <a className="articleListCardStyle1 articleCard" href={"/article/" + article.id} target="_blank" rel="noreferrer">
                        <div className="cardImg">
                                <img src={article.feature_img_url} alt=""/>
                        </div>
                        <div className="articleCardMeta">
                            <p className="articleCardCategoryArea articleCardCategory">{article.article_category}</p>
                            <p className="articleCardTitle articleListCardTitle">{article.title}</p>
                        </div>
                    </a>
                </>
            : null}
        </>
        :    <div className="articleListCardStyle1 skeletonListCard">
                <div className="skeletonListCardImg">
                    <Skeleton variant="rounded" width={"100%"} height={160}/>
                </div>
                <div className="articleCardMeta skeletonListCardMeta">
                    <p className="articleCardCategoryArea skeletonArticleTag"><Skeleton variant="rounded" width={"100%"} height={20}/></p>
                    <p className="articleCardTitle skeletonArticleCardTitle">
                        <Skeleton variant="rounded" width={"100%"} height={20}/>
                        <Skeleton variant="rounded" width={"100%"} height={20}/>
                    </p>
                </div>
            </div> 
            }
        </>
    )
}

export default ArticleListCardStyle1;