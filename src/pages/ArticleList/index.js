import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios';

import {generateQueryParam, setArticleVisibilityToTrue} from './articleListUtils'

import { NavBar, BottomMenu } from '../../layout'
import {GoogleAd, HeroArticleSection, ThreeCardsRow, TripStylesGrid, ArticleFilterList, TripStylesBreadCrumbMenu, SkeletonArticleFilterList, NoArticlesFound, TakeMeHomeButton} from '../../components'

import './style.css'

const ArticleList = () => {

    const {query} = useParams()

    const queryParams = useSelector(state => state.queryParams)
    const searchQuery = useSelector(state => state.searchQuery)

    const [loaded, setLoaded] = useState(false)

    const [articles, setArticles] = useState([])

    
    useEffect(() => {
        const fetchArticlesWithConfig = async (url, config) => {
            await axios.get(url, config)
                .then((response) => {
                    if(response.data !== ''){
                       let responseArticles = setArticleVisibilityToTrue(response.data)
                        setArticles(responseArticles) 
                        setLoaded(true)
                    } else {
                        setArticles([])
                    }
                })
                .catch(console.error)
        }
        
        const fetchArticlesWithoutConfig = async (url) => {
            await axios.get(url)
                .then((response) => {
                if(response.data !== ''){
                    let responseArticles = setArticleVisibilityToTrue(response.data)
                    setArticles(responseArticles)
                    setLoaded(true)
                } else {
                    setArticles([])
                }
                })
                .catch(console.error)
        }

        const body = document.querySelector('body')
        body.classList.remove("fixedBody")
        window.scrollTo(0, 0)

        if(query === 'popular'){
            fetchArticlesWithoutConfig(`${process.env.REACT_APP_BACKEND_URL}/articles/trending`)
        } else {
            if(query.includes('continent') || query.includes('country') || query.includes('city') || query.includes('category')){
                let queryParams = generateQueryParam(query)
                const config = {
                    headers: {
                        query: JSON.stringify(queryParams)
                    }
                }
                try {
                    fetchArticlesWithConfig(`${process.env.REACT_APP_BACKEND_URL}/articles/queryterm`, config)
                } catch(error) {
                    console.error(error.message)
                }
            } else {
                setArticles([])
            }
        }
        
    }, [query, queryParams, searchQuery])

    return (
        <>
            <NavBar/>
            <div className="mainArticleListSection">
                {query.split("&").length === 1 && query.split("=")[0] === "category" ? 
                    <TripStylesBreadCrumbMenu/>
                : null}
                {true ? 
                <>
                    {true ? 
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
                        {articles.length === 4 ? 
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
                        {articles.length > 0 ? 
                            <>
                                <ArticleFilterList articles={articles} />
                            </>
                        : 
                        null
                        }
                    </>
                :
                    <>
                        <SkeletonArticleFilterList/>
                    </>
                }
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            {query === 'popular'  && loaded ? 
            <>
                <div>
                    <h2 className="seperatorTitle">Explore Trip Styles</h2>
                </div>
                <TripStylesGrid/>
                <GoogleAd dataAdSlot={"1136657549"}/>
            </>
            :
            null}
            <BottomMenu/>
        </>
    )
}

export default ArticleList