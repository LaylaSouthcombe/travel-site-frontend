import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {NavBar, BottomMenu} from '../../layout'
import cityPage from '../../images/cityPage.png'

import './style.css'

import {ArticleCardStyle1, ArticleGridStyle2, ArticleGridStyle4, ArticleGridStyle6, ArticleGridStyle7, ArticleGridStyle8, ArticleTabSelectorList, ExploreMoreButton, GoogleAd} from '../../components'

//add in random country button
const City = () => {
console.log("hi")
const formatWord = (word) => {
    if(word !== undefined){
    word = word.split('-').map((x, i) => {
        return (
            x = x[0].toUpperCase() + x.slice(1)
        )
    }).join(" ")
    }
    return word
}
const tabHeadings = ["Relaxation", "Luxury", "Nature", "Food", "City Break", "Budget Friendly", "Art & Culture", "Adventure"]
const {country, city, articleid} = useParams();
    return(
        <>
            <NavBar/>
            <div className="cityPageHeroSection">
                <h2 className="cityName">{formatWord(city)}</h2>
                <div className="cityPageHeroImg">
                    <img src={cityPage} alt="" />
                </div>
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Trending Articles</h2>
            </div>
            <ArticleGridStyle4/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Popular Articles</h2>
            </div>
            <ArticleGridStyle6/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Must Sees in {city}</h2>
            </div>
            <ArticleGridStyle7/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Food to Try in {city}</h2>
            </div>
            <ArticleGridStyle8/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Attractions in {city}</h2>
            </div>
            <ArticleGridStyle4/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Nightlife in {city}</h2>
            </div>
            <div className="nightlifeSection">
            <ArticleGridStyle2/>
            </div>
            <ExploreMoreButton endpoint={"/articles"}/>
            <div>
                <h2 className="seperatorTitle">Explore Trip Styles in {city}</h2>
            </div>
            <div className="cityCategoriesSection">
                <ArticleTabSelectorList tabHeadings={tabHeadings}/>
            </div>
            <ExploreMoreButton endpoint={"/articles"}/>
            <BottomMenu/>
        </>
    )
}

export default City;