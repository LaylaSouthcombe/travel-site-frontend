import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder';

import "react-placeholder/lib/reactPlaceholder.css";
import {NavBar, BottomMenu} from '../../layout'
import './style.css'

import {ThreeCardsRow, GoogleAd, ArticlesTabSection, HeroArticleSection, BreadCrumbMenu, ViewMoreButton} from '../../components'

import {article} from '../../utilities/article'

const TripPlanning = () => {

    const tabHeadings = ["All", "Tips & Tricks", "Packing", "Gear", "Tech"]
    
    const [loaded, setLoaded] = useState(true)

    const tabArticles = [article, article, article, article, article,article, article, article, article, article]

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <NavBar/>
            <BreadCrumbMenu/>
            <HeroArticleSection article={article} loaded={loaded}/>
            <ThreeCardsRow articles={[article,article,article]} loaded={loaded}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <ArticlesTabSection tabArticles={tabArticles} tabHeadings={tabHeadings} loaded={loaded}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default TripPlanning;