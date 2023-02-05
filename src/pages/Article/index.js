import React, {useEffect, useState} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import {NavBar, BottomMenu} from '../../layout'
import parse from 'html-react-parser'

import './style.css'

import {ArticleGridStyle2, ArticleListGridStyle1, ArticleListGridStyle2, ExploreMoreButton, TripStylesGrid, GoogleAd, PageNotFound} from '../../components'

const Article = () => {
    
    const {country, city, articleid} = useParams();
    let navigate = useNavigate();
    
    const [article, setArticle] = useState()

    useEffect(() => {
        const URL = `http://localhost:3000/articles/article/${articleid}`
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
            <>  <div className="articleMainPage">
                    <div className="articleSection">
                        {parse(article.feature_img_html)}
                        <h1>{article.title}</h1>
                        {parse(article.body)}
                    </div>
                    <div className="sideAds">
                        <GoogleAd dataAdSlot={"4238599075"}/>
                        <p className="popularSideHeading">Popular on Sojo Travels</p>
                        <div className="popularArticlesSideList">
                            <ArticleListGridStyle2/>
                        </div>
                        <GoogleAd dataAdSlot={"9095054520"}/>
                        {/* make sticky */}
                    </div>
                </div>
                <GoogleAd dataAdSlot={"1136657549"}/>
                <h2 className="seperatorTitle">Similar Articles</h2>
                <ArticleGridStyle2/>
                <ExploreMoreButton endpoint={"/articles"}/>
                <h2 className="seperatorTitle">Must Reads</h2>
                <ArticleListGridStyle1/>
                <GoogleAd dataAdSlot={"1136657549"}/>
            </>
            : <PageNotFound/>}
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Article;