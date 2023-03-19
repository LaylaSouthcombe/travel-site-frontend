import React, {useEffect, useState, memo} from 'react'
import { useParams} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import './style.css'

import {ArticleListGridStyle2, GoogleAd, ArticleTabCards} from '../../components'

const ArticleFilterList = ({articles, setArticles}) => {
    const dispatch = useDispatch()
    // const articles = useSelector(state => {
    //     return state.articles
    // })

    const {query} = useParams();
    
    const filters = useSelector(state => state.filters)

    const countriesInfo = useSelector(state => state.countriesInfo)

    const tripStylesShowing = useSelector(state => state.tripStylesShowing)

    const [listArticles, setListArticles] = useState(articles)

    const [tripFilterLabels, setTripFilterLabels] = useState([])

    const [countryFilterLabels, setCountryFilterLabels] = useState([])

    const [loaded, setLoaded] = useState("Loading")

    const setArticleVisibility = (filters, article) => {
        console.log(filters)
        for(let i = 0; i < filters.countries.length || i < filters.tripStyles.length; i++){
            if(article.country.includes(filters.countries[i]) || article.trip_categories.includes(filters.tripStyles[i])){
                article.visibility = true
            } else {
                article.visibility = false
            }
        }
    }
    
    const [tripFilterClassName, setTripFilterClassName] = useState("hiddenLabel")
    const [tripShowAllClassName, setTripShowAllClassName] = useState("filterLabel")
    const [countryFilterClassName, setCountryFilterClassName] = useState("hiddenLabel")
    const [countryShowAllClassName, setCountryShowAllClassName] = useState("filterLabel")

    useEffect(() => {
        setLoaded("Loaded")
    }, [])

    const handleTripShowAll = (e) => {
        e.preventDefault()
        setTripFilterClassName("filterLabel")
        setTripShowAllClassName("hiddenLabel")
    }

    const handleCountryShowAll = (e) => {
        e.preventDefault()
        setCountryFilterClassName("filterLabel")
        setCountryShowAllClassName("hiddenLabel")
    }


    const addFilterToFiltersList = (x, type) => {
        if(filters[type].includes(x)){
            filters[type].splice(filters[type].indexOf(x), 1)
        } else {
            filters[type].push(x)
        }
        dispatch({ type: "UPDATE_FILTERS", payload: filters})
        let updatedList = [...articles];
        updatedList.forEach(article => {
            setArticleVisibility(filters, article)
        })
        setListArticles(updatedList)
    }

    let numberOfArticles = 0

    return (
        <div className="articleListSection">
            {loaded !== "loading" && listArticles.length > 4 ?
            <div className="articleListFilterSection">
                <p>Filter By:</p>
                <ul className="filterLists">
                    <li>Trip Style</li>
                    {articles.slice(4).forEach((x, i) => {
                        if(tripStylesShowing[x.trip_categories.split(",")[0]].filterShowing !== undefined){
                            tripStylesShowing[x.trip_categories.split(",")[0]].filterShowing = true
                            tripStylesShowing[x.trip_categories.split(",")[0]].numberOfArticles += 1
                        }
                        if(i === articles.slice(4).length -1){
                            dispatch({ type: "UPDATE_TRIP_STYLE_SHOWING", payload: tripStylesShowing})
                        }
                    })}
                    {loaded !== "Loading" ? Object.keys(tripStylesShowing).map((x, i) => {
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
                    }) : null }
                    {loaded !== "Loading"  && tripStylesShowing.totalShowing > 3 ? <li onClick={(e) => handleTripShowAll(e)} className={tripShowAllClassName}>Show all ({tripStylesShowing.totalShowing})</li> : null}
                </ul>
                <ul className="filterLists">
                    <li>Country</li>
                    {loaded !== "Loading" ? articles.slice(4).forEach((x, i) => {
                        if(countriesInfo["europe"].countries[x.country.split(",")[0]] !== undefined) {
                            if(countriesInfo["europe"].countries[x.country.split(",")[0]].visitable !== false){
                                countriesInfo["europe"].countries[x.country.split(",")[0]].filterShowing = true
                                countriesInfo["europe"].countries[x.country.split(",")[0]].numberOfArticles += 1
                            }
                        }
                        if(i === articles.slice(4).length -1){
                            dispatch({ type: "UPDATE_COUNTRIES_INFO", payload: countriesInfo})
                        }
                    }) : null}
                    {loaded !== "Loading" ? Object.keys(countriesInfo["europe"].countries).map((x, i) => {
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
                    }) : null}
                    {loaded !== "Loading" && countriesInfo["europe"].countries.countriesLength > 3 ? <li onClick={(e) => handleCountryShowAll(e)} className={countryShowAllClassName}>Show all ({countriesInfo["europe"].countries.countriesLength})</li> : null}
                </ul>
            </div>
            : null}
            {loaded !== "Loading" && articles.length > 4 ?
            <div className="articleList">
                {listArticles.map((article, i) => {
                    console.log(article.visibility === true)
                    console.log(articles.length)
                    console.log(loaded)
                    if(article.visibility === true){
                        numberOfArticles += 1
                    }
                    return (
                        <>
                            {article.visibility === true ? <ArticleTabCards keyId={"articleListLong " + i} article={article}/> : null}
                        </>
                    )
                })}
                {/* {loaded !== "Loading" && listArticles.length < 5 && listArticles.length > 0 ? listArticles.slice(1).map((article, i) => {
                    if(article.visibility === true){
                        numberOfArticles += 1
                    }
                    return (
                        <>
                            {article.visibility === true ? <ArticleTabCards keyId={"articleListShort " + i} article={article}/> : null}
                        </>
                    )
                }) : null} */}
                {loaded !== "Loading" && numberOfArticles === 0 ? 
                <>
                    <div className="noArticles">
                        No articles found
                    </div>
                </>
                : null}
            </div>
            : null}
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
)
}

export default ArticleFilterList;