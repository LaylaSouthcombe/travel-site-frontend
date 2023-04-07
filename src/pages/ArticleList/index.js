import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { NavBar, BottomMenu } from '../../layout'
import './style.css'
import axios from 'axios';

import { article } from '../../utilities/article'
import { article1 } from '../../utilities/article1'
import { article2 } from '../../utilities/article2'
import { article3 } from '../../utilities/article3'
import { article4 } from '../../utilities/article4'
import { article5 } from '../../utilities/article5'
import { article6 } from '../../utilities/article6'
import { article7 } from '../../utilities/article7'
import { article8 } from '../../utilities/article8'

import {generateQueryParam, setArticleVisibilityToTrue} from './articleListUtils'

import {GoogleAd, HeroArticleSection, ThreeCardsRow, TripStylesGrid, ArticleFilterList, CategoriesBreadCrumbMenu} from '../../components'

//add in random country button
const ArticleList = () => {
    const {query} = useParams();

    const queryParams = useSelector(state => state.queryParams)
    const searchQuery = useSelector(state => state.searchQuery)

    const [loaded, setLoaded] = useState(true)



    const [articles, setArticles] = useState([article, article1, article2, article3,article4, article5, article6, article7, article8])

    const fetchArticlesWithConfig = async (url, config) => {
        await axios.get(url, config).then((response) => {
            let responseArticles = setArticleVisibilityToTrue(response.data)
            setArticles(responseArticles)
        });
    }
    
    const fetchArticlesWithoutConfig = async (url) => {
        await axios.get(url).then((response) => {
            let responseArticles = setArticleVisibilityToTrue(response.data)
            setArticles(responseArticles)
        });
    }   

// 'category=budget-friendly&city=london'

    useEffect(() => {
        console.log(query)
        const body = document.querySelector('body')
        body.classList.remove("fixedBody")
        window.scrollTo(0, 0)
        if(query === 'popular'){
            fetchArticlesWithoutConfig('http://localhost:3000/articles/trending')
        } else if(query === 'search-results'){
             const config = {
                headers: {
                  query: JSON.stringify(searchQuery)
                }
            };
             fetchArticlesWithConfig('http://localhost:3000/articles/search', config)
         } else {
            let queryParams = generateQueryParam(query)
            const config = {
                headers: {
                  query: JSON.stringify(queryParams)
                }
            };
            try {
                fetchArticlesWithConfig('http://localhost:3000/articles/queryterm', config)
            } catch(error) {
                console.error(error.message)
            }
         }
    }, [query, queryParams, searchQuery])
    // useEffect(() => {
    //     const body = document.querySelector('body')
    //     body.classList.remove("fixedBody")
    //     window.scrollTo(0, 0)
    // }, [])
    
    console.log(query)
    console.log(articles)

    console.log(query.split("&").length)

    return (
        <>
            <NavBar/>
            <div className="mainArticleListSection">
                {query.split("&").length === 1 && query.split("=")[0] === "category" ? 
                <CategoriesBreadCrumbMenu/>
                : null}
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
                {articles.length > 0 && loaded ? 
                    <ArticleFilterList articles={articles} setArticles={setArticles}/>
                : null}
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

export default ArticleList;