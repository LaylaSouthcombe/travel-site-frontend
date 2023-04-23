import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import {NavBar, BottomMenu} from '../../layout'
import parse from 'html-react-parser'
import Skeleton from '@mui/material/Skeleton';

import './style.css'

import {ArticleGridStyle2, ArticleListGridStyle2, ViewMoreButton,  GoogleAd, PageNotFound} from '../../components'

const Article = () => {
    
    const {articleid} = useParams();

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
            try {
                axios.get(URL).then((response) => {
                    if(response.data === ''){
                       setArticle(undefined) 
                    } else {
                        setArticle(response.data) 
                    }
                    setLoaded(true)
                });
            } catch(error){
                setArticle(undefined)
                setLoaded(true)
            }
        }
        const popularURL = `http://localhost:3000/articles/trending`
        const fetchPopularArticles = async () => {
            try {
                axios.get(popularURL).then((response) => {
                    if(response.data !== ''){
                        setPopularArticles(response.data)
                    }
                });
            } catch(error) {
                setPopularArticles([])
            }
        }
        
        fetchFullArticle()
        fetchPopularArticles()

    }, [articleid, loaded])
    // const similarURL = `http://localhost:3000/articles/suggested`
    // axios.get(similarURL).then((response) => {
    //     setSimilarArticles(response.data)
    // });

    return (
        <>
            <NavBar/>
            {loaded ? 
                <>
                {article !== undefined ? 
                    <>  
                        <div className="articleMainPage">
                            <div className="articleSection">
                                {parse(article.feature_img_html)}
                                <h1>{article.title}</h1>
                                {parse(article.body)}
                            </div>
                            <div className="articleSideAds">
                                <GoogleAd dataAdSlot={"4238599075"}/>
                                {popularArticles.length === 4 ? 
                                <>
                                    <p className="popularSideHeading">Popular on Sojo Travels</p>
                                    <div className="popularArticlesSideList">
                                        <ArticleListGridStyle2 articles={popularArticles} loaded={loaded}/>
                                    </div>
                                </>
                                : null}
                                <GoogleAd dataAdSlot={"9095054520"}/>
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
                <PageNotFound/>
                }
                </>
            :
            <>
                <div className="articleMainPage">
                    <div className="articleSection">
                       <div className="articleHeroImage">
                            <Skeleton variant="rounded" width={"100%"} height={280}/>
                        </div>
                        <h1><Skeleton variant="rounded" width={"100%"} height={40}/></h1>
                        <div className="introPara">
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                        </div>
                       <div className="articlePara">
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                       </div>
                       <div className="articlePara">
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                       </div>
                       <div className="articlePara">
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                       </div>
                       <div className="articlePara">
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                            <Skeleton variant="rounded" width={"100%"} height={30}/>
                       </div>
                    </div>
                </div>
            </>
            }
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Article;