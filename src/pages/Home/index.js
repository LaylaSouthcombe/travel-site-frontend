import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {NavBar, BottomMenu} from '../../layout'
import leftHeroImage from '../../images/HeroImages/leftHeroImage.png'
import rightHeroImage from '../../images/HeroImages/rightHeroImage.png'

import {ArticleGridStyle1, ArticleGridStyle2, TripStylesGrid, GoogleAd} from '../../components'
//add in random country button
const Home = () => {

    const [trendingArticles, setTrendingArticles] = useState([])
    const [cityArticles, setCityArticles] = useState([])
    const [loaded, setLoaded] = useState(false)

    const fetchTrendingArticles = async (url) => {
        await axios.get(url).then((response) => {
            console.log(response)
            setTrendingArticles(response.data)
        });
    }  

    const fetchCityArticles = async (url) => {
        await axios.get(url).then((response) => {
            console.log(response)
            setCityArticles(response.data.splice(0,4))
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
        console.log(loaded)
      }, [])

    return(
        <>
            <NavBar/>
            <div className="heroSection">
                <div className="heroSection1">
                    <h2>Sojo travels</h2>
                    <h4>Find your next adventure here!</h4>
                    <div className="heroImage heroImage1"><img src={leftHeroImage} alt=""/></div>
                </div>
                <div className="heroImage heroImage2"><img src={rightHeroImage} alt=""/></div>
            </div>
            {loaded ? 
            <>
                {trendingArticles.length ? 
                <>
                    <div>
                        <h2 className="seperatorTitle">Trending Articles</h2>
                    </div>
                    <ArticleGridStyle1 articles={trendingArticles} loaded={loaded}/>
                    <GoogleAd dataAdSlot={"1136657549"}/>
                </>
                : null}
            </>
            :
            <>
                <div>
                    <h2 className="seperatorTitle">Trending Articles</h2>
                </div>
                <ArticleGridStyle1 articles={trendingArticles} loaded={loaded}/>
            </>
            }
            {loaded ? 
            <>
                {cityArticles.length ? 
                    <div>
                        <h2 className="seperatorTitle">City Breaks</h2>
                    </div>
                : null}
            </>
            :
            <>
                <div>
                    <h2 className="seperatorTitle">City Breaks</h2>
                </div>
            </>
            }
            <ArticleGridStyle2 articles={cityArticles} loaded={loaded}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
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