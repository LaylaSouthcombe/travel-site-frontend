import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavBar, BottomMenu } from '../../layout'
import './style.css'
import axios from 'axios'

import {setArticleVisibilityToTrue} from '../ArticleList/articleListUtils'

import {GoogleAd, TripStylesGrid, ArticleFilterList, SkeletonArticleFilterList, NoArticlesFound, TakeMeHomeButton} from '../../components'

const SearchResults = () => {

    const searchQuery = useSelector(state => state.searchQuery)

    const [loaded, setLoaded] = useState(false)

    const [articles, setArticles] = useState([])

    const fetchArticlesWithConfig = async (url, config) => {
        await axios.get(url, config).then((response) => {
            if(response.data !== ''){
                let responseArticles = setArticleVisibilityToTrue(response.data)
                setArticles(responseArticles)
            } else {
                setArticles([])
            }
        })
    }

    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.remove("fixedBody")
        window.scrollTo(0, 0)
        const config = {
            headers: {
                query: JSON.stringify(searchQuery)
            }
        };
        fetchArticlesWithConfig('http://localhost:3000/articles/search', config)
        setLoaded(true)
    }, [searchQuery])

    return (
        <>
            <NavBar/>
            <div className="mainArticleListSection searchResultsSection">
                {loaded ? 
                <>
                    {articles.length !== 0 ? 
                    <>
                        <h1 className="searchResultsTitle">Search Results</h1>
                        <ArticleFilterList articles={articles} />
                        <div>
                            <h2 className="seperatorTitle">Explore Trip Styles</h2>
                        </div>
                        <TripStylesGrid/>
                        <GoogleAd dataAdSlot={"1136657549"}/>
                    </>
                    :
                    <>
                        <div className="noArticlesFound">
                            <div className="noArticlesFoundText">
                                <p>Oops!</p>
                                <p>There were no results for your search, try another search or use the navigation menu to explore content</p>
                                <TakeMeHomeButton/>
                            </div>
                            <NoArticlesFound/>
                        </div>
                    </>
                    }
                </>
                :
                <>
                    <h1 className="searchResultsTitle">Search Results</h1>
                    <SkeletonArticleFilterList/>
                </>
                }
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default SearchResults