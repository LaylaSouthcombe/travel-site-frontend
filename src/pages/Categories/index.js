import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {NavBar, BottomMenu} from '../../layout'
import './style.css'

import {ArticleGridStyle1, ArticleGridStyle2, ArticleGridStyle4,ArticleGridStyle6, ArticleGridStyle8, ViewMoreButton, GoogleAd} from '../../components'

import { article1 } from '../../utilities/article1'
import { article2 } from '../../utilities/article2'
import { article3 } from '../../utilities/article3'
import { article5 } from '../../utilities/article5'
import { article6 } from '../../utilities/article6'
import { article7 } from '../../utilities/article7'
import { article8 } from '../../utilities/article8'

import tripStylesPageHero from '../../images/HeroImages/tripStylesPageHero.png'

//add in random country button
const Categories = () => {

    const [cityArticles, setCityArticles] = useState([])
    const [luxuryArticles, setLuxuryArticles] = useState([])
    const [natureArticles, setNatureArticles] = useState([])
    const [foodArticles, setFoodArticles] = useState([])
    const [relaxingArticles, setRelaxingArticles] = useState([])
    const [budgetArticles, setBudgetArticles] = useState([])
    const [artArticles, setArtArticles] = useState([])
    const [adventureArticles, setAdventureArticles] = useState([])

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

    const fetchArticles = async (url) => {
        await axios.get(url).then((response) => {
            console.log(response)
            setAllArticles(response.data)
            setLoaded(true)
        });
    }

    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.remove("fixedBody")
        window.scrollTo(0, 0)
        fetchArticles('http://localhost:3000/articles/categories/')
    }, [])

    const [loaded, setLoaded] = useState(true)
//add in undefined controls
    return(
        <>
            <NavBar/>
            <div>
                <h2 className="seperatorTitle">Explore Trip Styles</h2>
                <div className="tripStylesHero">
                    <img src={tripStylesPageHero} alt="" />
                </div>
            </div>
            <div>
                <h2 className="seperatorTitle">Top City Breaks</h2>
            </div>
            <ArticleGridStyle1 articles={cityArticles} loaded={loaded}/>
            <ViewMoreButton endpoint={"/articles/category=city-break"} loaded={loaded}/>
            <div>
                <h2 className="seperatorTitle">Explore Luxury Trips</h2>
            </div>
            <ArticleGridStyle2 articles={luxuryArticles} loaded={loaded}/>
            <ViewMoreButton endpoint={"/articles/category=luxury"} loaded={loaded}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Picturesque Nature Trips</h2>
            </div>
            <ArticleGridStyle4 articles={natureArticles} loaded={loaded}/>
            <ViewMoreButton endpoint={"/articles/category=nature"} loaded={loaded}/>
            <div>
                <h2 className="seperatorTitle">Trips for Foodies</h2>
            </div>
            <ArticleGridStyle2 articles={foodArticles} loaded={loaded}/>
            <ViewMoreButton endpoint={"/articles/category=food"} loaded={loaded}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Rest with Relaxing Trips</h2>
            </div>
            <ArticleGridStyle6 articles={relaxingArticles} loaded={loaded}/>
            <ViewMoreButton endpoint={"/articles/category=relaxing"} loaded={loaded}/>
            <div>
                <h2 className="seperatorTitle">Budget Friendly Trips</h2>
            </div>
            <ArticleGridStyle2 articles={budgetArticles} loaded={loaded}/>
            <ViewMoreButton endpoint={"/articles/category=budget-friendly"} loaded={loaded}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Discover Art and Cultures</h2>
            </div>
            <ArticleGridStyle8 articles={artArticles} loaded={loaded}/>
            <ViewMoreButton endpoint={"/articles/category=art"} loaded={loaded}/>
            <div>
                <h2 className="seperatorTitle">Adventurous Trips</h2>
            </div>
            <ArticleGridStyle2 articles={adventureArticles} loaded={loaded}/>
            <ViewMoreButton endpoint={"/articles/category=adventure"} loaded={loaded}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Categories;