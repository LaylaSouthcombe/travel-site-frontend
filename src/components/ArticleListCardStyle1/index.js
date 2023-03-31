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
                <a className="articleListCardStyle1 articleCard" href={"http://localhost:3001/article/" + article.id}>
                    <div className="cardImg">
                            <img src={article.feature_img_url !== "" ? article.feature_img_url : article.feature_img_base64} alt=""/>
                    </div>
                    <div className="articleCardMeta">
                        <p className="articleCardCategoryArea articleCardCategory">{article.article_categories.split(",")[0]}</p>
                        <p className="articleCardTitle articleListCardTitle">{article.title}</p>
                    </div>
                </a>
            </>
        :    <a className="articleListCardStyle1 skeletonListCard" href={"http://localhost:3001/article/" + article.id}>
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
            </a> 
        }
        </>
    )
}

export default ArticleListCardStyle1;