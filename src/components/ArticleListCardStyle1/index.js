import React from 'react'
import { useNavigate } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import './style.css'

const ArticleListCardStyle1 = ({article, loaded}) => {
    let navigate = useNavigate();

    return (
        <>
        {loaded ? 
        <>
            {article !== undefined ?   
                <>
                    <div className="articleListCardStyle1 articleCard" onClick={() => navigate("/article/" + article.id)}>
                        <div className="cardImg">
                                <img src={article.feature_img_url} alt=""/>
                        </div>
                        <div className="articleCardMeta">
                            <p className="articleCardCategoryArea articleCardCategory">{article.article_category}</p>
                            <p className="articleCardTitle articleListCardTitle">{article.title}</p>
                        </div>
                    </div>
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