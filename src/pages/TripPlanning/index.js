import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "react-placeholder/lib/reactPlaceholder.css";
import {NavBar, BottomMenu} from '../../layout'
import './style.css'

import {ThreeCardsRow, GoogleAd, ArticlesTabSection, HeroArticleSection, BreadCrumbMenu, NoArticlesFound, TakeMeHomeButton} from '../../components'

import {setArticleVisibilityToTrue} from '../ArticleList/articleListUtils.js'
import {article} from '../../utilities/article'
import {article1} from '../../utilities/article1'


const TripPlanning = () => {

    const tabHeadings = ["All", "Tips & Tricks", "Packing", "Gear", "Tech"]
    
    const [loaded, setLoaded] = useState(true)

    const [articles, setArticles ] = useState([article, article1, article, article1, article, article1, article, article, article, article])

    const fetchArticlesWithoutConfig = async (url) => {
        console.log(url)
        await axios.get(url).then((response) => {
            console.log(response)
            let responseArticles = setArticleVisibilityToTrue(response.data)
            setArticles(responseArticles)
        });
        setLoaded(true)
    } 


    useEffect(() => {
        window.scrollTo(0, 0)
        fetchArticlesWithoutConfig('http://localhost:3000/articles/trip-planning')
      }, [])

    return (
        <>
            <NavBar/>
            <BreadCrumbMenu/>
            {articles.length !== 0 && loaded ? <HeroArticleSection article={articles[0]} loaded={loaded}/> : 
                    <div className="noArticlesFound">
                        <div className="noArticlesFoundText">
                            <p>Oops!</p>
                            <p>No articles were found, try the search bar to find what you are looking for, or use the home button to navigate to the home page</p>
                            <TakeMeHomeButton/>
                        </div> 
                        <NoArticlesFound/>
                    </div> 
            }
            {articles.length >= 4  && loaded ? 
                <>
                    <ThreeCardsRow articles={articles.slice(1,4)} loaded={loaded}/> 
                    <GoogleAd dataAdSlot={"1136657549"}/>
                </>
                : null}
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