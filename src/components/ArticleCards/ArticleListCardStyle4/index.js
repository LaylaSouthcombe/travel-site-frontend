import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import Skeleton from '@mui/material/Skeleton';

const ArticleListCardStyle4 = ({article, loaded, keyId}) => {
    let navigate = useNavigate();
    console.log(keyId)
    return (
        <>
        {loaded ? 
        <>
            {article !== undefined ? 
            <>
                <a className="articleListCardStyle4"  href={"/article/" + article.id} target="_blank" rel="noreferrer" key={keyId}>
                    <p className="articleCardTitle articleListCardTitle4">{article.title}</p>
                </a>
            </>
            : null}
        </>
        :
        <div className="skeletonArticleListCardStyle4" key={keyId}>
            <Skeleton variant="rounded" width={"100%"} height={40}/>
        </div>
        }
        </>
    )
}

export default ArticleListCardStyle4;