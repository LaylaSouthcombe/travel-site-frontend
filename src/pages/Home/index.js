import React, {useEffect, useState} from 'react'
import axios from 'axios';

import {NavBar, BottomMenu} from '../../layout'
import leftHeroImage from '../../images/HeroImages/leftHeroImage.png'
import rightHeroImage from '../../images/HeroImages/rightHeroImage.png'
import {ArticleGridStyle1, ArticleGridStyle2, TripStylesGrid, GoogleAd, ConditionalArticlesGrid, RandomCountry} from '../../components'

import { article1 } from '../../utilities/article1'
//add in random country button
const Home = () => {
    let fourLoadingArticles = [article1, article1, article1, article1]
    const [trendingArticles, setTrendingArticles] = useState([fourLoadingArticles])
    const [cityArticles, setCityArticles] = useState([fourLoadingArticles])
    const [loaded, setLoaded] = useState(false)

    const fetchTrendingArticles = async (url) => {
        await axios.get(url).then((response) => {
            if(response.data !== ''){
                setTrendingArticles(response.data)
            } else {
                setTrendingArticles([])
            }
        });
    }  

    const fetchCityArticles = async (url) => {
        await axios.get(url).then((response) => {
            if(response.data !== ''){
                setCityArticles(response.data.splice(0,4))
            } else {
                setCityArticles([])
            }
        });
    }  

    const fetchAllHomePageArticles = async () => {
        await fetchTrendingArticles('http://localhost:3000/articles/trending')
        await fetchCityArticles('http://localhost:3000/articles/category/city')
        setLoaded(true)
    }
    
    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.remove("fixedBody")
        window.scrollTo(0, 0)
        fetchAllHomePageArticles()
      }, [])

    return (
        <>
            <NavBar/>
            <div className="heroSection">
                <div className="heroSection1">
                    <h2>Sojo travels</h2>
                    <h4>Find your next adventure here!</h4>
                    <div className="heroImage heroImage1"><img src={leftHeroImage} alt=""/></div>
                </div>
                <div className="heroImage heroImage2">
                    <div>
                        <img src={rightHeroImage} alt=""/>
                    </div>
                </div>
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            {/* {renderCategoryArticleSection} */}

            <ConditionalArticlesGrid loaded={loaded} articlesArray={trendingArticles} title={"Trending Articles"} buttonEndPoint={"/articles/popular"} grid={<ArticleGridStyle1 articles={trendingArticles} loaded={loaded}/>}/>

            {loaded && trendingArticles.length ? 
            <GoogleAd dataAdSlot={"1136657549"}/>
            :
            null}

            <RandomCountry/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <ConditionalArticlesGrid loaded={loaded} articlesArray={cityArticles} title={"Top City Breaks"} buttonEndPoint={"/articles/category=city-break"} grid={<ArticleGridStyle2 articles={cityArticles} loaded={loaded}/>}/>

            {loaded && cityArticles.length ? 
            <GoogleAd dataAdSlot={"1136657549"}/>
            :
            null}

            <div>
                <h2 className="seperatorTitle">Explore Trip Styles</h2>
            </div>
            <div className="homeTripStyle">
                <TripStylesGrid/>
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Home;