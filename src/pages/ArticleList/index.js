import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {NavBar, BottomMenu} from '../../layout'
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


import {ArticleListGridStyle2, GoogleAd, HeroArticleSection, ArticleTabCards, ThreeCardsRow, TripStylesGrid, ArticleFilterList} from '../../components'

//add in random country button
const ArticleList = () => {
    const {query} = useParams();
    
    const dispatch = useDispatch()
    // const articles = useSelector(state => {
    //     return state.articles
    // })

    const [articles, setArticles] = useState([article, article1, article2, article3,article4, article5, article6, article7, article8])

    const checkContentOfQuerySegmentAndAssign = (queryParamObject, segmentToCheck, queryParamSectionToCheck) => {
        if(segmentToCheck.includes(`${queryParamSectionToCheck}=`)){
            queryParamObject[queryParamSectionToCheck] = segmentToCheck.split("=")[1]
        } else {
            queryParamObject[queryParamSectionToCheck] = ""
        }
    }

    const checkContentForAllUrlQueryParamsAndAssign = (queryParamObject, segmentToCheck) => {
        let urlQueryParams = ["country", "continent", "city", "category"]
        urlQueryParams.forEach(param => {
            checkContentOfQuerySegmentAndAssign(queryParamObject, segmentToCheck, param)
        })
        
    }

    const generateQueryParam = (query) => {
        let queryParamObject = {}
        let splitQuery = query.replace(/-/g, " ").split("&")
        for(let i = 0; i < splitQuery.length; i++){
            checkContentForAllUrlQueryParamsAndAssign(queryParamObject, splitQuery[i])
        }
        return queryParamObject
    }

    const setArticleVisibilityToTrue = (articles) => {
        articles.forEach(article => {
            article.visibility = true
        })
        return articles
    }

    const fetchArticlesWithConfig = async (url, config) => {
        await axios.get(url, config).then((response) => {
            let responseArticles = setArticleVisibilityToTrue(response.data)
            setArticles(responseArticles)
        });
    }

    const fetchArticlesWithoutConfig = async (url) => {
        await axios.get(URL).then((response) => {
            let responseArticles = setArticleVisibilityToTrue(response.data)
            setArticles(responseArticles)
        });
    }

// 'category=budget-friendly&city=london'

    // useEffect(() => {
    //     if(query !== 'popular'){
    //        let queryParam = generateQueryParam(query)
    //         const config = {
    //             headers: {
    //               query: JSON.stringify(queryParam)
    //             }
    //         };
    //         fetchArticlesWithConfig('http://localhost:3000/articles/queryterm', config)
    //     } else if(query === 'popular'){
    //         fetchArticlesWithoutConfig('http://localhost:3000/articles/trending')
    //     }
    // }, [query])

    console.log(query)
    console.log(articles)

    return (
        <>
            <NavBar/>
            <div className="mainArticleListSection">
                {articles.length !== 0 ? <HeroArticleSection article={articles[0]}/> : 
                    <div className="noArticlesFound">
                        <p>No articles found</p>
                    </div> 
                    //TODO: replace with a better layout error msg
                }
                {articles.length >= 4 ? <ThreeCardsRow articles={articles.slice(1,4)}/> : null}
                {articles.length > 0 ? 
                    <ArticleFilterList articles={articles} setArticles={setArticles}/>
                : null}
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            {query === 'popular' ? 
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