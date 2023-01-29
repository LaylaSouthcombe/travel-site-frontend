import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {NavBar, BottomMenu} from '../../layout'
import cityPage from '../../images/cityPage.png'

import './style.css'

import {ArticleGridStyle1, ArticleGridStyle4, ArticleGridStyle6, ArticleGridStyle7, GoogleAd} from '../../components'

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
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Popular Articles</h2>
            </div>
            <ArticleGridStyle6/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Must Sees in {city}</h2>
            </div>
            <ArticleGridStyle7/>
            <BottomMenu/>
        </>
    )
}

export default City;