import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {NavBar, BottomMenu} from '../../layout'
import './style.css'
import axios from 'axios';

import {ArticleListGridStyle2, GoogleAd, HeroArticleSection, ArticleTabCards, ThreeCardsRow, TripStylesGrid} from '../../components'

//add in random country button
const ArticleList = () => {
    const {query} = useParams();
    
    const dispatch = useDispatch()
    const articles = useSelector(state => {
        return state.articles
    })

    const filters = useSelector(state => state.filters)

    const countriesInfo = useSelector(state => state.countriesInfo)

    const tripStylesShowing = useSelector(state => state.tripStylesShowing)

    const setArticleVisibility = (filters, article) => {
        for(let i = 0; i < filters.countries.length || i < filters.tripStyles.length; i++){
            if(article.country.includes(filters.countries[i]) || article.trip_categories.includes(filters.tripStyles[i])){
                article.visibility = true
            } else {
                article.visibility = false
            }
        }
    }

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

    const [tripFilterClassName, setTripFilterClassName] = useState("hiddenLabel")
    const [countryFilterClassName, setCountryFilterClassName] = useState("hiddenLabel")

    const addFilterToFiltersList = (x, type) => {
        if(filters[type].includes(x)){
            filters[type].splice(filters[type].indexOf(x), 1)
        } else {
            filters[type].push(x)
        }
        dispatch({ type: "UPDATE_FILTERS", payload: filters})
        articles.forEach(article => {
            setArticleVisibility(filters, article)
        })
        dispatch({ type: "UPDATE_ARTICLES", payload: articles})
    }

    let numberOfArticles = 0

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
                <div className="articleListSection">
                    <div className="articleListFilterSection">
                        <p>Filter By:</p>
                        <ul className="filterLists">
                            <li>Trip Style</li>
                            {articles.forEach((x, i) => {
                                if(tripStylesShowing[x.trip_categories.split(",")[0]].filterShowing !== undefined){
                                    tripStylesShowing[x.trip_categories.split(",")[0]].filterShowing = true
                                    tripStylesShowing[x.trip_categories.split(",")[0]].numberOfArticles += 1
                                }
                                if(i === articles.length -1){
                                    dispatch({ type: "UPDATE_TRIP_STYLE_SHOWING", payload: tripStylesShowing})
                                }
                            })}
                            {Object.keys(tripStylesShowing).map((x, i) => {
                                if(tripStylesShowing[x].filterShowing === true){
                                    tripStylesShowing.totalShowing += 1
                                }
                                if(i === Object.keys(tripStylesShowing).length -1){
                                    dispatch({ type: "UPDATE_TRIP_STYLE_SHOWING", payload: tripStylesShowing})
                                }
                                return (
                                    <>
                                        {tripStylesShowing[x].filterShowing === true && tripStylesShowing.totalShowing <= 3 ? 
                                        <li key={"tripFilter " + i}>
                                            <label className="filterLabel">{x} ({tripStylesShowing[x].numberOfArticles})
                                                {filters.tripStyles.includes(x) ? <input type="checkbox" checked />: <input type="checkbox"/>}
                                                <span className="checkmark" onClick={() => addFilterToFiltersList(x, "tripStyles")}></span>
                                            </label>
                                        </li>
                                        : null}
                                        {tripStylesShowing[x].filterShowing === true && tripStylesShowing.totalShowing > 3 ? 
                                        <li key={"tripFilter " + i}>
                                            <label className={tripFilterClassName}>{x} ({tripStylesShowing[x].numberOfArticles})
                                                <input type="checkbox"/>
                                                <span className="checkmark" onClick={() => addFilterToFiltersList(x, "tripStyles")}></span>
                                            </label>
                                        </li>
                                        : null}
                                    </>
                                )
                            })}
                            {tripStylesShowing.totalShowing > 3 ? <li onClick={() => setTripFilterClassName("filterLabel")}>Show all ({tripStylesShowing.totalShowing})</li> : null}
                        </ul>
                        <ul className="filterLists">
                            <li>Country</li>
                            {articles.forEach((x, i) => {
                                if(countriesInfo["europe"].countries[x.country.split(",")[0]] !== undefined) {
                                    if(countriesInfo["europe"].countries[x.country.split(",")[0]].visitable !== false){
                                        countriesInfo["europe"].countries[x.country.split(",")[0]].filterShowing = true
                                        countriesInfo["europe"].countries[x.country.split(",")[0]].numberOfArticles += 1
                                    }
                                }
                                if(i === articles.length -1){
                                    dispatch({ type: "UPDATE_COUNTRIES_INFO", payload: countriesInfo})
                                }
                            })}
                            {Object.keys(countriesInfo["europe"].countries).map((x, i) => {
                                if(countriesInfo["europe"].countries[x].filterShowing === true){
                                    countriesInfo["europe"].countries.countriesLength += 1
                                }
                                if(i === Object.keys(countriesInfo["europe"].countries).length -1){
                                    dispatch({ type: "UPDATE_COUNTRIES_INFO", payload: countriesInfo})
                                }
                                return (
                                    <>
                                        {countriesInfo["europe"].countries[x].filterShowing === true && countriesInfo["europe"].countries.countriesLength <= 3 ? 
                                        <li key={"countryFilter " + i}>
                                            <label className="filterLabel">{x} ({countriesInfo["europe"].countries[x].numberOfArticles})
                                                <input type="checkbox"/>
                                                <span className="checkmark" onClick={() => addFilterToFiltersList(x, "countries")}></span>
                                            </label>
                                        </li>
                                        : null}
                                        {countriesInfo["europe"].countries[x].filterShowing === true && countriesInfo["europe"].countries.countriesLength > 3 ? 
                                        <li key={"countryFilter " + i}>
                                            <label className={countryFilterClassName}>{x} ({countriesInfo["europe"].countries[x].numberOfArticles})
                                                <input type="checkbox"/>
                                                <span className="checkmark" onClick={() => addFilterToFiltersList(x, "countries")}></span>
                                            </label>
                                        </li>
                                        : null}
                                    </>
                                )
                            })}
                            {countriesInfo["europe"].countries.countriesLength > 3 ? <li onClick={() => setCountryFilterClassName("filterLabel")}>Show all ({countriesInfo["europe"].countries.countriesLength})</li> : null}
                        </ul>
                    </div>
                    <div className="articleList">
                        {articles.length >= 5 ? articles.slice(4).map((article, i) => {
                            if(article.visibility === true){
                                numberOfArticles += 1
                            }
                            return (
                                <>
                                    {article.visibility === true ? <ArticleTabCards keyId={"articleListLong " + i} article={article}/> : null}
                                </>
                            )
                        }) : null}
                        {articles.length < 5 && articles.length > 0 ? articles.slice(1).map((article, i) => {
                            if(article.visibility === true){
                                numberOfArticles += 1
                            }
                            return (
                                <>
                                    {article.visibility === true ? <ArticleTabCards keyId={"articleListShort " + i} article={article}/> : null}
                                </>
                            )
                        }) : null}
                        {numberOfArticles === 0 ? 
                        <>
                            <div className="noArticles">
                                No articles found
                            </div>
                        </>
                        : null}
                    </div>
                    <div className="sideAds">
                            <GoogleAd dataAdSlot={"4238599075"}/>
                                {query !== 'popular' ? 
                                <>
                                    <p className="popularSideHeading">Popular on Sojo Travels</p>
                                    <div className="popularArticlesSideList">
                                        <ArticleListGridStyle2/> 
                                    </div>
                                    <GoogleAd dataAdSlot={"9095054520"}/>
                                </>
                                : null}
                            {/* make sticky */}
                    </div>
                </div>
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