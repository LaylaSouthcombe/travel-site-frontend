import React, {useEffect} from 'react'

import {NavBar, BottomMenu} from '../../layout'
import leftHeroImage from '../../images/leftHeroImage.png'
import rightHeroImage from '../../images/rightHeroImage.png'

import {ArticleGridStyle1, ArticleGridStyle2, TripStylesGrid, GoogleAd} from '../../components'
import {article} from '../../utilities/article'
//add in random country button
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
            <NavBar/>
            <div className="heroSection">
                <div className="heroSection1">
                    <h2>Sojo travels</h2>
                    <h4>Find your next adventure here!</h4>
                    <div className="heroImage heroImage1"><img src={leftHeroImage} alt=""/></div>
                </div>
                <div className="heroImage heroImage2"><img src={rightHeroImage} alt=""/></div>
            </div>
            <div>
                <h2 className="seperatorTitle">Trending Articles</h2>
            </div>
            <ArticleGridStyle1 articles={[article, article, article, article]}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">City Breaks</h2>
            </div>
            <ArticleGridStyle2 articles={[article, article, article, article]}/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Explore Trip Styles</h2>
            </div>
            <div className="homeTripStyle">
                <TripStylesGrid/>
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Home;