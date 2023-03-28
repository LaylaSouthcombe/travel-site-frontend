import React from 'react'

import {NavBar, BottomMenu} from '../../layout'
import './style.css'

import {ThreeCardsRow, GoogleAd, ArticlesTabSection, HeroArticleSection, BreadCrumbMenu} from '../../components'

import {article} from '../../utilities/article'

const TripPlanning = () => {

    const tabHeadings = ["All", "Tips & Tricks", "Packing", "Gear", "Tech"]
    

    const tabArticles = [article, article, article, article, article,article, article, article, article, article]

    return (
        <>
            <NavBar/>
            <BreadCrumbMenu/>
            <HeroArticleSection article={article}/>
            <ThreeCardsRow articles={[article,article,article]}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            
            <ArticlesTabSection tabArticles={tabArticles} tabHeadings={tabHeadings}/>

            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default TripPlanning;