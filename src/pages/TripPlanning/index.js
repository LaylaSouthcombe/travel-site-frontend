import React, { useState } from 'react'
import ReactPlaceholder from 'react-placeholder';

import "react-placeholder/lib/reactPlaceholder.css";
import {NavBar, BottomMenu} from '../../layout'
import './style.css'

import {ThreeCardsRow, GoogleAd, ArticlesTabSection, HeroArticleSection, BreadCrumbMenu} from '../../components'

import {article} from '../../utilities/article'

const TripPlanning = () => {

    const tabHeadings = ["All", "Tips & Tricks", "Packing", "Gear", "Tech"]
    
    const [loaded, setLoaded] = useState(false)

    const tabArticles = [article, article, article, article, article,article, article, article, article, article]

    return (
        <>
            <NavBar/>
            <BreadCrumbMenu loaded={loaded}/>
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