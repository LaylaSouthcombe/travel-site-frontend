import React from 'react'

import {NavBar, BottomMenu} from '../../layout'
import './style.css'

import {ArticleGridStyle1, ArticleGridStyle2, ArticleGridStyle4,ArticleGridStyle5,ArticleGridStyle6,ArticleGridStyle7,ArticleGridStyle8,ExploreMoreButton,TripStylesGrid, GoogleAd} from '../../components'

//add in random country button
const Categories = () => {

    return(
        <>
            <NavBar/>
            <div>
                <h2 className="seperatorTitle">Explore Trip Styles</h2>
            </div>
            <TripStylesGrid/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Top City Breaks</h2>
            </div>
            <ArticleGridStyle1/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Explore Luxury Trips</h2>
            </div>
            <ArticleGridStyle2/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Picturesque Nature Trips</h2>
            </div>
            <ArticleGridStyle4/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Trips for Foodies</h2>
            </div>
            <ArticleGridStyle5/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Rest with Relaxing Trips</h2>
            </div>
            <ArticleGridStyle6/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Budget Friendly Trips</h2>
            </div>
            <ArticleGridStyle7/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Discover Art and Cultures</h2>
            </div>
            <ArticleGridStyle8/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Adventurous Trips</h2>
            </div>
            <ArticleGridStyle8/>
            <ExploreMoreButton endpoint={"/articles"}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Categories;