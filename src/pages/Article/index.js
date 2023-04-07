import React, {useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {NavBar, BottomMenu} from '../../layout'
import parse from 'html-react-parser'
import Skeleton from '@material-ui/lab/Skeleton';

import './style.css'

import {ArticleGridStyle2, ArticleListGridStyle2, ViewMoreButton,  GoogleAd, PageNotFound} from '../../components'

const Article = () => {
    
    const {articleid} = useParams();
    let navigate = useNavigate();

    const [article, setArticle] = useState()
    const [popularArticles, setPopularArticles] = useState([])
    const [similarArticles, setSimilarArticles] = useState([])
    const [loaded, setLoaded] = useState(false)

    
    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.querySelector('body')
        body.classList.remove("fixedBody")
        const URL = `http://localhost:3000/articles/article/${articleid}`
        const fetchFullArticle = async () => {
            axios.get(URL).then((response) => {
                let fetchedArticle = response.data
                setArticle(fetchedArticle)
                setLoaded(true)
            });
        }
        fetchFullArticle()

        const popularURL = `http://localhost:3000/articles/trending`
        const fetchPopularArticles = async () => {
            axios.get(popularURL).then((response) => {
                setPopularArticles(response.data)
            });
        }
        fetchPopularArticles()
        // const similarURL = `http://localhost:3000/articles/suggested`
        // axios.get(similarURL).then((response) => {
        //     setSimilarArticles(response.data)
        //     console.log(response.data.body)
        // });
    }, [articleid, loaded])

    console.log(articleid)
    console.log(article)
    return(
        <>
            <NavBar/>
            {article !== undefined && loaded ? 
                <>  
                    <div className="articleMainPage">
                        <div className="articleSection">
                            {parse(article.feature_img_html)}
                            <h1>{article.title}</h1>
                            {parse(article.body)}
                        </div>
                        <div className="articleSideAds">
                            <GoogleAd dataAdSlot={"4238599075"}/>
                            {popularArticles.length > 0 ? 
                            <>
                                <p className="popularSideHeading">Popular on Sojo Travels</p>
                                <div className="popularArticlesSideList">
                                    <ArticleListGridStyle2 articles={popularArticles} loaded={loaded}/>
                                </div>
                            </>
                            : null}
                            <GoogleAd dataAdSlot={"9095054520"}/>
                            {/* make sticky */}
                        </div>
                    </div>
                    <GoogleAd dataAdSlot={"1136657549"}/>
                    {similarArticles.length === 4 ? 
                        <>
                            <h2 className="seperatorTitle">Similar Articles</h2>
                            <ArticleGridStyle2 articles={similarArticles} loaded={loaded}/> 
                            <ViewMoreButton endpoint={"/articles"}/>
                        </>
                    : null
                    }
                    {popularArticles.length === 4 ? 
                        <>
                            <h2 className="seperatorTitle">Must Reads</h2>
                            <ArticleGridStyle2 articles={popularArticles.slice(4)} loaded={loaded}/>
                            <GoogleAd dataAdSlot={"1136657549"}/>
                        </>
                    : null
                    }
                </>
            : 
            null
            }
            {article === undefined && loaded ? 
                <PageNotFound/>
            :
            null}
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Article;