import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import Skeleton from '@material-ui/lab/Skeleton';

const ArticleListCardStyle4 = ({article, loaded}) => {
    let navigate = useNavigate();

    return (
        <>
        {loaded ? 
            <div className="articleListCardStyle4">
                    <p className="articleCardTitle articleListCardTitle4" onClick={()=> navigate("/article/" + article.id)}>{article.title}</p>
            </div>
        : 
        <div className="skeletonArticleListCardStyle4">
            <Skeleton variant="rounded" width={"100%"} height={40}/>
        </div>
        }
        </>
    )
}

export default ArticleListCardStyle4;