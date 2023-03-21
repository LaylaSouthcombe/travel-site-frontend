import React from 'react'

import {NavBar, BottomMenu} from '../../layout'
import './style.css'

import {ArticleGridStyle1, ArticleGridStyle2, ArticleGridStyle4,ArticleGridStyle5,ArticleGridStyle6,ArticleGridStyle7,ArticleGridStyle8,ExploreMoreButton,TripStylesGrid, GoogleAd} from '../../components'

import { article } from '../../utilities/article'
import { article1 } from '../../utilities/article1'
import { article2 } from '../../utilities/article2'
import { article3 } from '../../utilities/article3'
import { article4 } from '../../utilities/article4'
import { article5 } from '../../utilities/article5'
import { article6 } from '../../utilities/article6'
import { article7 } from '../../utilities/article7'
import { article8 } from '../../utilities/article8'


//add in random country button
const Categories = () => {

    let cityArticles = [article5, article1, article2, article3]
    let luxuryArticles = [article5, article1, article2, article3]
    let natureArticles = [article5, article1, article2, article3]
    let foodArticles = [article5, article1, article2, article3, article5]
    let relaxingArticles = [article8, article7, article6, article5]
    let budgetArticles = [article8, article7, article6, article5, article5]
    let artArticles = [article8, article7, article6, article5, article5]
    let adventureArticles = [article8, article7, article6, article5, article5]



    return(
        <>
            <NavBar/>
            <div>
                <h2 className="seperatorTitle">Explore Trip Styles</h2>
            </div>
            {/* <TripStylesGrid/>
            <GoogleAd dataAdSlot={"1136657549"}/> */}
            <div>
                <h2 className="seperatorTitle">Top City Breaks</h2>
            </div>
            <ArticleGridStyle1 articles={cityArticles}/>
            <ExploreMoreButton endpoint={"/articles"}/>
            {/* <GoogleAd dataAdSlot={"1136657549"}/> */}
            <div>
                <h2 className="seperatorTitle">Explore Luxury Trips</h2>
            </div>
            <ArticleGridStyle2 articles={luxuryArticles}/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Picturesque Nature Trips</h2>
            </div>
            <ArticleGridStyle4 articles={natureArticles}/>
            <ExploreMoreButton endpoint={"/articles"}/>
            {/* <GoogleAd dataAdSlot={"1136657549"}/> */}
            <div>
                <h2 className="seperatorTitle">Trips for Foodies</h2>
            </div>
            <ArticleGridStyle2 articles={foodArticles}/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Rest with Relaxing Trips</h2>
            </div>
            <ArticleGridStyle6 articles={relaxingArticles}/>
            <ExploreMoreButton endpoint={"/articles"}/>
            {/* <GoogleAd dataAdSlot={"1136657549"}/> */}
            <div>
                <h2 className="seperatorTitle">Budget Friendly Trips</h2>
            </div>
            <ArticleGridStyle2 articles={budgetArticles}/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Discover Art and Cultures</h2>
            </div>
            <ArticleGridStyle8 articles={artArticles}/>
            <ExploreMoreButton endpoint={"/articles"}/>
            {/* <GoogleAd dataAdSlot={"1136657549"}/> */}
            <div>
                <h2 className="seperatorTitle">Adventurous Trips</h2>
            </div>
            <ArticleGridStyle2 articles={adventureArticles}/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Categories;