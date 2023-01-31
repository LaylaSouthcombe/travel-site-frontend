import React, {useEffect, useState} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import {NavBar, BottomMenu} from '../../layout'
import parse from 'html-react-parser'

import './style.css'

import {ArticleGridStyle1, ArticleGridStyle2, ArticleGridStyle3,ArticleGridStyle4,ArticleGridStyle5,ArticleGridStyle6,ArticleGridStyle7,ArticleGridStyle8,ExploreMoreButton,TripStylesGrid, GoogleAd, PageNotFound} from '../../components'

const Article = () => {
    
    const {country, city, articleid} = useParams();
    let navigate = useNavigate();
    


    const [article, setArticle] = useState()

    useEffect(() => {
        const URL = `http://localhost:3000/articles/${articleid}`
        axios.get(URL).then((response) => {
            setArticle(response.data)
            console.log(response.data.body)
          });
    }, [articleid])
    console.log(articleid)
    console.log(article)
    return(
        <>
            <NavBar/>
            {article !== undefined ? 
            <>
                <div className="articleSection">
                    <h1>{article.title}</h1>
                    {parse(article.body)}
                    <p>{article.trip_categories}</p>
                </div>
                <ExploreMoreButton endpoint={"/articles"}/>
            </>
            : <PageNotFound/>}
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Article;