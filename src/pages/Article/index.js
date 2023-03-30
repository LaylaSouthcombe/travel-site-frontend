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
        const setStandardArticle = () => {
            setArticle({
                "id": 159,
                "title": "Exploring the Magic of Edinburgh: A City Break in Scotland's Capital",
                "body": "<p className=\"introPara\">Edinburgh is a city of magic and mystery, and a city break in Scotland's capital is an unforgettable experience. From the iconic Edinburgh Castle, perched atop its volcanic rock, to the cobbled streets of the Old Town, Edinburgh is a city of contrasts and surprises.</p> <p className=\"articlePara\">The castle is the city's most famous landmark, and it's easy to see why. Its imposing walls and turrets are a reminder of the city's turbulent past, and the views from the battlements are simply breathtaking. Inside the castle, visitors can explore the Great Hall, the Royal Palace, and the National War Museum.</p> <img src=\"https://github.com/sojo-travels/article-images/blob/main/LtuyXarzIfqfAidwL.png?raw=true\" alt=\"Keyword: Royal Mile\" className=\"articleImage\"/><figcaption>waldomiguez | pixabay</figcaption> <p className=\"articlePara\">The Royal Mile is the heart of the Old Town, and it's a great place to explore. This cobbled street is lined with historic buildings, including St. Giles' Cathedral and the Scottish Parliament. There are also plenty of shops, cafes, and pubs to explore, as well as the iconic Edinburgh Castle.</p> <ins class=\"adsbygoogle\" style=\"display:block\" data-ad-client=\"ca-pub-5563364373682926\" data-ad-slot=\"1136657549\" data-ad-format=\"auto\" data-full-width-responsive=\"true\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script> <img src=\"https://github.com/sojo-travels/article-images/blob/main/OfcrTxhbOqymVuqmO.png?raw=true\" alt=\"Keyword: Arthur's Seat\" className=\"articleImage\"/><figcaption>Miller_Eszter | pixabay</figcaption> <p className=\"articlePara\">For those looking for a more active experience, Arthur's Seat is a must-see. This extinct volcano is located in the heart of the city, and it offers stunning views of the city and the surrounding countryside. The climb to the summit is relatively easy, and the views from the top are simply stunning.</p> <p className=\"articlePara\">No visit to Edinburgh would be complete without experiencing the city's famous festivals. From the Edinburgh Fringe Festival to the Hogmanay celebrations, there's something for everyone. The city comes alive during these events, and it's a great way to experience the city's unique culture and atmosphere.</p> <p className=\"conclusionPara\">Exploring the Magic of Edinburgh is an unforgettable experience. From the iconic Edinburgh Castle to the cobbled streets of the Old Town, there's something for everyone. Whether you're looking for a relaxing city break or an action-packed adventure, Edinburgh has it all.</p>",
                "city": "Edinburgh",
                "country": "Scotland",
                "continent": "Europe",
                "article_categories": "City Break",
                "keywords": " Edinburgh Castle,  Royal Mile,  Arthur's Seat,  Edinburgh Festival",
                "hour_24_views": 5,
                "all_time_views": 5,
                "feature_img_html": "<img src=\"https://github.com/sojo-travels/article-images/blob/main/XjbfQoqbLwycUbaqC.png?raw=true\" alt=\"Keyword: Edinburgh Castle\" className=\"articleHeroImage\"/><figcaption>Walkerssk | pixabay</figcaption>",
                "feature_img_url": "https://github.com/sojo-travels/article-images/blob/main/XjbfQoqbLwycUbaqC.png?raw=true"
            })
        }
        setStandardArticle()
        // const URL = `http://localhost:3000/articles/article/${articleid}`
        // axios.get(URL).then((response) => {
        //     setArticle(response.data)
        //     console.log(response.data.body)
        // });
        // const popularURL = `http://localhost:3000/articles/trending`
        // axios.get(popularURL).then((response) => {
        //     setPopularArticles(response.data)
        //     console.log(response.data.body)
        //     setLoaded(false)
        // });
        // const similarURL = `http://localhost:3000/articles/suggested`
        // axios.get(similarURL).then((response) => {
        //     setSimilarArticles(response.data)
        //     console.log(response.data.body)
        // });
    // }, [articleid])
    }, [])
    console.log(articleid)
    console.log(article)
    return(
        <>
            <NavBar/>
            {article !== undefined && loaded ? 
            <>  <div className="articleMainPage">
                    <div className="articleSection">
                        {parse(article.feature_img_html)}
                        <h1>{article.title}</h1>
                        {parse(article.body)}
                    </div>
                    <div className="articleSideAds">
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
                    <ViewMoreButton endpoint={"/articles"}/>
                </>
                : null
                }
                {/* {popularArticles.length !== 0 ? 
                <>
                    <h2 className="seperatorTitle">Must Reads</h2>
                    <ArticleGridStyle2 articles={popularArticles.slice(4)}/>
                    <GoogleAd dataAdSlot={"1136657549"}/>
                </>
                : null} */}
            </>
            : 
            <>
            { article !== undefined && !loaded ? 
            //add in loading skeleton
            //                            <ArticleListGridStyle2 articles={[article, article, article, article]} loaded={loaded}/>
            <>
                <div className="articleMainPage">
                    <div className="articleSection">
                        <div className="articleHeroImage">
                            <Skeleton variant="rounded" width={"100%"} height={360}/>
                        </div>
                        <h1 className="skeletonArticleH1">
                            <Skeleton variant="rounded" width={"100%"} height={40}/>
                            <Skeleton variant="rounded" width={"100%"} height={40}/>
                        </h1>
                        <p className="introPara skeletonPara">
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                        </p>
                        <p className="articlePara skeletonPara">
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                        </p>
                        <p className="articlePara skeletonPara">
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                        </p>
                        <p className="articlePara skeletonPara">
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                        </p>
                        <p className="articlePara skeletonPara">
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                        </p>
                    </div>
                    <div className="articleSideAds">
                        <GoogleAd dataAdSlot={"4238599075"}/>
                        <p className="popularSideHeading">
                            <Skeleton variant="rounded" width={"100%"} height={20}/>
                        </p>
                        <div className="popularArticlesSideList">
                            <ArticleListGridStyle2 articles={popularArticles.slice(0,4)}/>
                        </div>
                        <GoogleAd dataAdSlot={"9095054520"}/>
                        {/* make sticky */}
                    </div>
                </div>
            </>
            :
            <PageNotFound/>
            }
            </>
                    }
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Article;