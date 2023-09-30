import React from 'react'
import Skeleton from '@mui/material/Skeleton'

import './style.css'

const ArticleListCardStyle4 = ({article, loaded, keyId}) => {

    return (
        <>
        {loaded ? 
        <>
            {article !== undefined ? 
            <>
                <a className="articleListCardStyle4" href={"/article/" + article.id} target="_blank" rel="noreferrer" key={keyId}>
                    <p className="articleCardTitle articleListCardTitle4">{article.title}</p>
                </a>
            </>
            : null}
        </>
        :
        <div className="skeletonArticleListCardStyle4" key={keyId} data-testid="skeleton-card">
            <Skeleton variant="rounded" width={"100%"} height={40}/>
        </div>
        }
        </>
    )
}

export default ArticleListCardStyle4