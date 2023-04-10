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
    let numberOfArticleSections = 0

    const fetchAllHomePageArticles = async () => {
        numberOfArticleSections = 0
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

    //   const categoryArticleSectionInfo = {
    //     trending: {
    //         articlesArray: trendingArticles,
    //         title: "Trending Articles",
    //         buttonEndpoint: "/articles/popular",
    //         grid: <ArticleGridStyle1 articles={trendingArticles} loaded={loaded}/>
    //     },
    //     cityBreak: {
    //         articlesArray: cityArticles,
    //         title: "Top City Breaks",
    //         buttonEndpoint: "/articles/category=city-break",
    //         grid: <ArticleGridStyle2 articles={cityArticles} loaded={loaded}/>
    //     }
    // }

    // const renderCategoryArticleSection = Object.keys(categoryArticleSectionInfo).map((category, i) => {
    //     let categoryInfo = categoryArticleSectionInfo[category]
    //     if(categoryInfo.articlesArray.length > 0){
    //         numberOfArticleSections += 1
    //     }
    //     return (
    //         <div key={'grid' + category + i}>
    //             <ConditionalArticlesGrid loaded={loaded} articlesArray={categoryInfo.articlesArray} title={categoryInfo.title} buttonEndPoint={categoryInfo.buttonEndPoint} grid={categoryInfo.grid}/>
    //             {numberOfArticleSections%2 === 0 && numberOfArticleSections !== 0 && i !== Object.keys(categoryArticleSectionInfo).length - 1 ? 
    //                 <GoogleAd dataAdSlot={"1136657549"}/>
    //             :
    //             <>
    //                 {categoryInfo.articlesArray.length > 0 ? 
    //                     <>
    //                         <div className="sectionSeparator"></div>
    //                     </>
    //                 :
    //                 null
    //                 }
    //             </>
    //             }
    //         </div>
    //     )
    // })

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