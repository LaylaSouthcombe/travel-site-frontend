import React, { useState, useEffect } from 'react'

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

import tripStylesPageHero from '../../images/tripStylesPageHero.png'

//add in random country button
const Categories = () => {

    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.remove("fixedBody")
        window.scrollTo(0, 0)
    }, [])

    let cityArticles = [article5, article1, article2, article3]
    let luxuryArticles = [article5, article1, article2, article3]
    let natureArticles = [article5, article1, article2, article3]
    let foodArticles = [article5, article1, article2, article3, article5]
    let relaxingArticles = [article8, article7, article6, article5]
    let budgetArticles = [article8, article7, article6, article5, article5]
    let artArticles = [article8, article7, article6, article5, article5]
    let adventureArticles = [article8, article7, article6, article5, article5]

    const [loaded, setLoaded] = useState(true)

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