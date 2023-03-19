import React, {useEffect, useState, memo} from 'react'
import { useParams} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import './style.css'

import {ArticleListGridStyle2, GoogleAd, ArticleTabCards} from '../../components'
import { ConstructionOutlined } from '@mui/icons-material';

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

    const generateFilterLabels = (articles) => {
        let tripLabels = []
        let countryLabels = []
        articles.forEach((x, i) => {
            if(tripStylesShowing[x.trip_categories.split(",")[0]].filterShowing !== undefined){
                tripStylesShowing[x.trip_categories.split(",")[0]].filterShowing = true
                tripStylesShowing[x.trip_categories.split(",")[0]].numberOfArticles += 1
            }
            if(countriesInfo["europe"].countries[x.country.split(",")[0]] !== undefined) {
                if(countriesInfo["europe"].countries[x.country.split(",")[0]].visitable !== false){
                    countriesInfo["europe"].countries[x.country.split(",")[0]].filterShowing = true
                    countriesInfo["europe"].countries[x.country.split(",")[0]].numberOfArticles += 1
                }
            }
            if(i === articles.length -1){
                dispatch({ type: "UPDATE_TRIP_STYLE_SHOWING", payload: tripStylesShowing})
                dispatch({ type: "UPDATE_COUNTRIES_INFO", payload: countriesInfo})
            }
        })

        for(let i = 0; i < Object.keys(tripStylesShowing).length; i++){
            let tripName = Object.keys(tripStylesShowing)[i]
            let tripInfo = tripStylesShowing[Object.keys(tripStylesShowing)[i]]
            if(tripInfo.filterShowing === true){
                let labelItem = {}
                labelItem[tripName] = tripInfo.numberOfArticles
                tripLabels.push(labelItem)
            }
        }

        for(let i = 0; i < Object.keys(countriesInfo["europe"].countries).length; i++){
            let countryName = Object.keys(countriesInfo["europe"].countries)[i]
            let countryInfo = countriesInfo["europe"].countries[Object.keys(countriesInfo["europe"].countries)[i]]
            if(countryInfo.visitable === true && countryInfo.filterShowing === true){
                let labelItem = {}
                labelItem[countryName] = countryInfo.numberOfArticles
                countryLabels.push(labelItem)
            }
        }

        console.log(tripLabels)
        console.log(countryLabels)
        setTripFilterLabels(tripLabels)
        setCountryFilterLabels(countryLabels)
        setLoaded("Loaded")
    }

    useEffect(() => {
        generateFilterLabels(articles)
        setLoaded("Loaded")
    },[articles])

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
        console.log(articles)
        updatedList.forEach(article => {
            setArticleVisibility(filters, article)
        })
        generateFilterLabels(updatedList)
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
                    {loaded !== "Loading" && tripFilterLabels.length ? tripFilterLabels.map((x, i) => {
                        return (
                            <>
                                <li key={"tripFilter " + i}>
                                    <label className={i < 3 ? "filterLabel" : tripFilterClassName}>{Object.keys(x)} ({Object.values(x)})
                                        <input type="checkbox"/>
                                        <span className="checkmark" onClick={() => addFilterToFiltersList(Object.keys(x), "tripStyles")}></span>
                                    </label>
                                </li>
                            </>
                        )
                    }) : null }
                    {loaded !== "Loading"  && tripFilterLabels.length > 3 ? <li onClick={(e) => handleTripShowAll(e)} className={tripShowAllClassName}>Show all ({tripFilterLabels.length})</li> : null}
                </ul>
                <ul className="filterLists">
                    <li>Country</li>
                    {loaded !== "Loading" ? countryFilterLabels.map((x, i) => {
                        console.log(i)
                        return (
                            <>
                                <li key={"countryFilter " + i}>
                                    <label className={i < 3 ? "filterLabel" : countryFilterClassName}>{Object.keys(x)}  ({Object.values(x)})
                                        <input type="checkbox"/>
                                        <span className="checkmark" onClick={() => addFilterToFiltersList(Object.keys(x), "countries")}></span>
                                    </label>
                                </li>
                            </>
                        )
                    }) : null}
                    {loaded !== "Loading" && countryFilterLabels.length > 3 ? <li onClick={(e) => handleCountryShowAll(e)} className={countryShowAllClassName}>Show all ({countryFilterLabels.length})</li> : null}
                </ul>
            </div>
            : null}
            {loaded !== "Loading" && articles.length > 4 ?
            <div className="articleList">
                {listArticles.map((article, i) => {
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