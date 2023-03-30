import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import {ArticleCardFeatureImg} from '../index'
import Skeleton from '@material-ui/lab/Skeleton';

const ArticleListCardStyle4 = ({article, loaded}) => {
    let navigate = useNavigate();

    return (
        <>
        {loaded ? 
            <div className="articleListCardStyle4">
                    <p className="articleCardTitle articleListCardTitle4" onClick={()=>navigate()}>{article.title}</p>
            </div>
        : 
        <div className="articleListCardStyle4">
            <Skeleton variant="rounded" width={"100%"} height={40}/>
        </div>
        }
        </>
    )
}

export default ArticleListCardStyle4;