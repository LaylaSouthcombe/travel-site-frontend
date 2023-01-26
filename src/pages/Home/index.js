import React from 'react'

import {NavBar} from '../../layout'
import leftHeroImage from '../../images/leftHeroImage.png'
import rightHeroImage from '../../images/rightHeroImage.png'
import {ArticleGridStyle1, HorizontalGoogleAd} from '../../components'


const Home = () => {

    return(
        <>
            <NavBar/>
            <div className="heroSection">
                <div className="heroSection1">
                    <h3>Sojo Travels</h3>
                    <h5>Find your next adventure here!</h5>
                    <div className="heroImage heroImage1"><img src={leftHeroImage} alt="" /></div>
                </div>
                <div className="heroImage heroImage2"><img src={rightHeroImage} alt="" /></div>
            </div>
            <div>
                <h2 className="seperatorTitle">Trending Articles</h2>
            </div>
            <ArticleGridStyle1/>
            <HorizontalGoogleAd/>
        </>
    )
}

export default Home;