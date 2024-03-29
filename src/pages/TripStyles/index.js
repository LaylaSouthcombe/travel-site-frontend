import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {NavBar, BottomMenu} from '../../layout'

import {ArticleGridStyle1, ArticleGridStyle2, ArticleGridStyle4,ArticleGridStyle6, ArticleGridStyle8, GoogleAd, ConditionalArticlesGrid} from '../../components'

import { article } from '../../utilities/article'

import tripStylesPageHero from '../../images/HeroImages/tripStylesPageHero.png'

import './style.css'

const TripStyles = () => {

    let fourLoadingArticles = [article, article, article, article]
    let fiveLoadingArticles = [article, article, article, article, article]

    const [loaded, setLoaded] = useState(false)
    const [cityArticles, setCityArticles] = useState(fourLoadingArticles)
    const [luxuryArticles, setLuxuryArticles] = useState(fourLoadingArticles)
    const [natureArticles, setNatureArticles] = useState(fourLoadingArticles)
    const [foodArticles, setFoodArticles] = useState(fourLoadingArticles)
    const [relaxingArticles, setRelaxingArticles] = useState(fourLoadingArticles)
    const [budgetArticles, setBudgetArticles] = useState(fourLoadingArticles)
    const [artArticles, setArtArticles] = useState(fiveLoadingArticles)
    const [adventureArticles, setAdventureArticles] = useState(fourLoadingArticles)

    const setAllArticles = (articles) => {
        setCityArticles(articles["City Break"])
        setLuxuryArticles(articles["Luxury"])
        setNatureArticles(articles["Nature"])
        setFoodArticles(articles["Food"])
        setRelaxingArticles(articles["Relaxation"])
        setBudgetArticles(articles["Budget Friendly"])
        setArtArticles(articles["Art & Culture"])
        setAdventureArticles(articles["Adventure"])
    }

    let numberOfArticleSections = 0
    const fetchArticles = async (url) => {
        numberOfArticleSections = 0
        await axios.get(url).then((response) => {
            if(response.data !== ''){
                setAllArticles(response.data)
            } else {
                setAllArticles([])
            }
            setLoaded(true)
        });
    }

    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.remove("fixedBody")
        window.scrollTo(0, 0)
        fetchArticles(`${process.env.REACT_APP_BACKEND_URL}/articles/categories/`)
    }, [])

    
//add in undefined controls
    
    const categoryArticleSectionInfo = {
        cityBreak: {
            articlesArray: cityArticles,
            title: "Top City Breaks",
            buttonEndpoint: "/articles/category=city-break",
            grid: <ArticleGridStyle1 articles={cityArticles} loaded={loaded}/>
        },
        luxury: {
            articlesArray: luxuryArticles,
            title: "Explore Luxury Trips",
            buttonEndpoint: "/articles/category=luxury",
            grid: <ArticleGridStyle2 articles={luxuryArticles} loaded={loaded}/>
        },
        nature: {
            articlesArray: natureArticles,
            title: "Picturesque Nature Trips",
            buttonEndpoint: "/articles/category=nature",
            grid: <ArticleGridStyle4 articles={natureArticles} loaded={loaded}/>
        },
        food: {
            articlesArray: foodArticles,
            title: "Trips for Foodies",
            buttonEndpoint: "/articles/category=food",
            grid: <ArticleGridStyle2 articles={foodArticles} loaded={loaded}/>
        },
        relaxing: {
            articlesArray: relaxingArticles,
            title: "Rest with Relaxing Trips",
            buttonEndpoint: "/articles/category=relaxing",
            grid: <ArticleGridStyle6 articles={relaxingArticles} loaded={loaded}/>
        },
        budget: {
            articlesArray: budgetArticles,
            title: "Budget Friendly Trips",
            buttonEndpoint: "/articles/category=budget-friendly",
            grid: <ArticleGridStyle2 articles={budgetArticles} loaded={loaded}/>
        },
        artCulture: {
            articlesArray: artArticles,
            title: "Discover Art and Cultures",
            buttonEndpoint: "/articles/category=art",
            grid: <ArticleGridStyle8 articles={artArticles} loaded={loaded}/>
        },
        adventure: {
            articlesArray: adventureArticles,
            title: "Adventurous Trips",
            buttonEndpoint: "/articles/category=adventure",
            grid: <ArticleGridStyle2 articles={adventureArticles} loaded={loaded}/>
        }
    }

    const renderCategoryArticleSection = Object.keys(categoryArticleSectionInfo).map((category, i) => {
        let categoryInfo = categoryArticleSectionInfo[category]
        if(categoryInfo.articlesArray.length > 0){
            numberOfArticleSections += 1
        }
        return (
            <div key={'grid' + category + i}>
                <ConditionalArticlesGrid loaded={loaded} articlesArray={categoryInfo.articlesArray} title={categoryInfo.title} buttonEndPoint={categoryInfo.buttonEndPoint} grid={categoryInfo.grid}/>
                {numberOfArticleSections%2 === 0 && numberOfArticleSections !== 0 && i !== Object.keys(categoryArticleSectionInfo).length - 1 ? 
                    <GoogleAd dataAdSlot={"1136657549"}/>
                :
                <>
                    {categoryInfo.articlesArray.length > 0 ? 
                        <>
                            <div className="sectionSeparator"></div>
                        </>
                    :
                    null
                    }
                </>
                }
            </div>
        )
    })

    return (
        <>
            <NavBar/>
            <div className="tripStylesHeroSection">
                <div className="tripStylesText">
                    <h2 className="seperatorTitle">Explore Trip Styles</h2>
                    <p className="tripStylesSummary">Explore 8 unique trip styles and find inspiration for your next travel experience and start planning your dream getaway today!</p>
                </div>
                <div className="tripStylesHero">
                    <img src={tripStylesPageHero} alt="" />
                </div>
            </div>
            {renderCategoryArticleSection}
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default TripStyles