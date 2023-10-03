import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "react-placeholder/lib/reactPlaceholder.css"

import {NavBar, BottomMenu} from '../../layout'

import './style.css'

import {ThreeCardsRow, GoogleAd, ArticlesTabSection, HeroArticleSection, BreadCrumbMenu, NoArticlesFound, TakeMeHomeButton} from '../../components'

import {setArticleVisibilityToTrue} from '../ArticleList/articleListUtils.js'

const TripPlanning = () => {

    const tabHeadings = ["All", "Tips & Tricks", "Packing", "Gear", "Tech"]
    
    const [loaded, setLoaded] = useState(false)

    const [articles, setArticles ] = useState([])

    const fetchArticlesWithoutConfig = async (url) => {
        await axios.get(url).then((response) => {
            if(response.data !== ''){
                let responseArticles = setArticleVisibilityToTrue(response.data)
                setArticles(responseArticles)
            } else {
                setArticles([])
            }
        });
        setLoaded(true)
    } 


    useEffect(() => {
        window.scrollTo(0, 0)
        fetchArticlesWithoutConfig(`${process.env.REACT_APP_BACKEND_URL}/articles/trip-planning`)
    }, [])

    return (
        <>
            <NavBar/>
            <BreadCrumbMenu/>
            {loaded ? 
                <>
                    {articles.length !== 0 ? 
                    <>
                        <HeroArticleSection article={articles[0]} loaded={loaded}/>
                    </>
                    : 
                    <>
                        <div className="noArticlesFound">
                            <div className="noArticlesFoundText">
                                <p>Oops!</p>
                                <p>No articles were found, try the search bar to find what you are looking for, or use the home button to navigate to the home page</p>
                                <TakeMeHomeButton/>
                            </div> 
                            <NoArticlesFound/>
                        </div> 
                    </>
                    }
                </>
            : 
                <>
                    <HeroArticleSection article={articles[0]} loaded={false}/>
                </>
            }
            {loaded ? 
                <>
                    {articles.length >= 4 ? 
                    <>
                        <ThreeCardsRow articles={[articles[1], articles[2], articles[3]]} loaded={loaded}/>
                        <GoogleAd dataAdSlot={"1136657549"}/>
                    </>
                    : null}
                </>
                :
                <>
                    <ThreeCardsRow articles={[articles[1], articles[2], articles[3]]} loaded={false}/>
                </>
            }
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
                <ArticlesTabSection tabArticles={articles} tabHeadings={tabHeadings} loaded={false} endPointStart={"/articles/"} pageName={"trip-planning"}/>
            </>
            }
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default TripPlanning