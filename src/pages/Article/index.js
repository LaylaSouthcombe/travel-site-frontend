import React, {useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {NavBar, BottomMenu} from '../../layout'
import parse from 'html-react-parser'

import './style.css'

import {ArticleGridStyle2, ArticleListGridStyle2, ExploreMoreButton,  GoogleAd, PageNotFound} from '../../components'

const Article = () => {
    
    const {articleid} = useParams();
    let navigate = useNavigate();
    
    const [article, setArticle] = useState()
    const [popularArticles, setPopularArticles] = useState([])
    const [similarArticles, setSimilarArticles] = useState([])

    useEffect(() => {
        const URL = `http://localhost:3000/articles/article/${articleid}`
        axios.get(URL).then((response) => {
            setArticle(response.data)
            console.log(response.data.body)
        });
        const popularURL = `http://localhost:3000/articles/trending`
        axios.get(popularURL).then((response) => {
            setPopularArticles(response.data)
            console.log(response.data.body)
        });
        // const similarURL = `http://localhost:3000/articles/suggested`
        // axios.get(similarURL).then((response) => {
        //     setSimilarArticles(response.data)
        //     console.log(response.data.body)
        // });
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
                            <ArticleListGridStyle2 articles={popularArticles.slice(0,4)}/>
                        </div>
                        <GoogleAd dataAdSlot={"9095054520"}/>
                        {/* make sticky */}
                    </div>
                </div>
                <GoogleAd dataAdSlot={"1136657549"}/>
                {similarArticles.length !== 0 ? 
                <>
                    <h2 className="seperatorTitle">Similar Articles</h2>
                    <ArticleGridStyle2 articles={similarArticles}/> 
                    <ExploreMoreButton endpoint={"/articles"}/>
                </>
                : null}
                {popularArticles.length !== 0 ? 
                <>
                    <h2 className="seperatorTitle">Must Reads</h2>
                    <ArticleGridStyle2 articles={popularArticles.slice(4)}/>
                    <GoogleAd dataAdSlot={"1136657549"}/>
                </>
                : null}
            </>
            : <PageNotFound/>}
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Article;