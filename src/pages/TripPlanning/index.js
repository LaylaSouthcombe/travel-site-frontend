import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder';
import axios from 'axios';
import "react-placeholder/lib/reactPlaceholder.css";
import {NavBar, BottomMenu} from '../../layout'
import './style.css'

import {ThreeCardsRow, GoogleAd, ArticlesTabSection, HeroArticleSection, BreadCrumbMenu, ViewMoreButton} from '../../components'

import {setArticleVisibilityToTrue} from '../ArticleList/articleListUtils.js'
import {article} from '../../utilities/article'
import {article1} from '../../utilities/article1'


const TripPlanning = () => {

    const tabHeadings = ["All", "Tips & Tricks", "Packing", "Gear", "Tech"]
    
    const [loaded, setLoaded] = useState(true)

    const [articles, setArticles ] = useState([article, article1, article, article1, article, article1, article, article, article, article])

    const fetchArticlesWithoutConfig = async (url) => {
        await axios.get(url).then((response) => {
            let responseArticles = setArticleVisibilityToTrue(response.data)
            setArticles(responseArticles)
        });
    } 


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <NavBar/>
            <BreadCrumbMenu/>
            {articles.length !== 0 && loaded ? <HeroArticleSection article={articles[0]} loaded={loaded}/> : 
                    <div className="noArticlesFound">
                        <p>No articles found</p>
                    </div> 
                }
            {articles.length >= 4  && loaded ? 
                <>
                    <ThreeCardsRow articles={articles.slice(1,4)} loaded={loaded}/> 
                    <GoogleAd dataAdSlot={"1136657549"}/>
                </>
                : null}
            <GoogleAd dataAdSlot={"1136657549"}/>
            <>
                {loaded ? 
                <>
                    {articles.length  ? 
                        <>
                            <ArticlesTabSection tabArticles={articles} tabHeadings={tabHeadings} loaded={loaded} endPointStart={"/articles/"} pageName={"trip-planning"}/>
                        </>
                    : null}
                </>
                :
                <>
                    <ArticlesTabSection tabArticles={articles} tabHeadings={tabHeadings} loaded={loaded} endPointStart={"/articles/"} pageName={"trip-planning"}/>
                </>
                }
            </>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default TripPlanning;