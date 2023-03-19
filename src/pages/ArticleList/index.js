import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {NavBar, BottomMenu} from '../../layout'
import './style.css'
import axios from 'axios';

import {ArticleListGridStyle2, GoogleAd, HeroArticleSection, ArticleTabCards, ThreeCardsRow, TripStylesGrid, ArticleFilterList} from '../../components'

//add in random country button
const ArticleList = () => {
    const {query} = useParams();
    
    const dispatch = useDispatch()
    const articles = useSelector(state => {
        return state.articles
    })

// 'category=budget-friendly&city=london'
    useEffect(() => {
        if(query !== 'popular'){
            let splitQuery = query.replace(/-/g, " ").split("&")
            let country = ""
            let city = ""
            let category = ""
            let continent = ""
            for(let i = 0; i < splitQuery.length; i++){
                if(splitQuery[i].includes("country=")){
                    country = splitQuery[i].split("=")[1]
                }
                if(splitQuery[i].includes("continent=")){
                    continent = splitQuery[i].split("=")[1]
                }
                if(splitQuery[i].includes("city=")){
                    city = splitQuery[i].split("=")[1]
                }
                if(splitQuery[i].includes("category=")){
                    category = splitQuery[i].split("=")[1]
                }
            }

            const queryParam = {
                country: country,
                continent: continent,
                city: city,
                category: category
            }

            const config = {
                headers: {
                  query: JSON.stringify(queryParam)
                }
            };

            const URL = `http://localhost:3000/articles/queryterm`
            axios.get(URL, config).then((response) => {
                    let responseArticles = response.data
                    responseArticles.forEach(x => {
                     x.visibility = true
                    })
                dispatch({ type: "UPDATE_ARTICLES", payload: responseArticles})
              });

        } else if(query === 'popular'){
            const URL = `http://localhost:3000/articles/trending`
            axios.get(URL).then((response) => {
                    let responseArticles = response.data
                    responseArticles.forEach(x => {
                     x.visibility = true
                    })
                dispatch({ type: "UPDATE_ARTICLES", payload: responseArticles})
              });
        }
    }, [query])

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
                    <ArticleFilterList articles={articles}/>
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