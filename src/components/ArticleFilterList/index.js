import React, {useEffect, useState} from 'react'
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

    const countriesInfo = useSelector(state => state.countriesInfo)

    const tripStylesShowing = useSelector(state => state.tripStylesShowing)

    const [filters, setFilters] = useState({countries: [], tripStyles: []})

    const [listArticles, setListArticles] = useState([])

    const [tripFilterLabels, setTripFilterLabels] = useState([])

    const [countryFilterLabels, setCountryFilterLabels] = useState([])
    
    const [loaded, setLoaded] = useState("Loading")

    const setArticleVisibility = (filters, article) => {
        for(let i = 0; i < filters.countries.length; i++){
            if(!article.country.includes(filters.countries[i])){
                article.visibility = false
            }
        }
        for(let i = 0; i < filters.tripStyles.length; i++){
            if(!article.trip_categories.includes(filters.tripStyles[i])){
                article.visibility = false
            }
        }
    }
    
    const [tripFilterClassName, setTripFilterClassName] = useState("hiddenLabel")
    const [tripShowAllClassName, setTripShowAllClassName] = useState("filterLabel")
    const [countryFilterClassName, setCountryFilterClassName] = useState("hiddenLabel")
    const [countryShowAllClassName, setCountryShowAllClassName] = useState("filterLabel")

    const checkIfLabelAlreadyInLabelsArray = (labelsArray, labelToCheck) => {
        const result = labelsArray.filter((filter) => {
            let filterLabel = Object.keys(filter)[0]
            return filterLabel === labelToCheck
        });
        return result.length ? true : false
    }
    
    const increaseNumberOfArticlesForFilter = (labelsArray, filterToIncrease) => {
        for(let i = 0; i < labelsArray.length; i++){
            if(Object.keys(labelsArray[i])[0] === filterToIncrease){
                labelsArray[i][filterToIncrease] += 1
            }
        }
    }

    const addNewFilterToFiltersArray = (labelsArray, filterToAdd) => {
        let labelItem = {}
        labelItem[filterToAdd] = 1
        labelsArray.push(labelItem) 
    }

    const addNewOrIncreaseExistingFilterToFilterArray = (objectWithFilterInfo, filterArray, labelToAddOrCreate) => {
        if(objectWithFilterInfo[labelToAddOrCreate] !== undefined){     
            if(checkIfLabelAlreadyInLabelsArray(filterArray, labelToAddOrCreate)){
                increaseNumberOfArticlesForFilter(filterArray, labelToAddOrCreate)
            } else {
                addNewFilterToFiltersArray(filterArray, labelToAddOrCreate)
            }
        }
    }

    const generateFilterLabels = (articlesList) => {
        let tripLabels = []
        let countryLabels = []
        articlesList.forEach((article, i) => {
            if(article.visibility === true){
            let tripName = article.trip_categories.split(",")[0]
            addNewOrIncreaseExistingFilterToFilterArray(tripStylesShowing, tripLabels, tripName)
            let countryName = article.country.split(",")[0]
            if(countriesInfo["europe"].countries[countryName] !== undefined) {
                addNewOrIncreaseExistingFilterToFilterArray(countriesInfo["europe"].countries, countryLabels, countryName)
            }
        }
            // if(i === articles.length -1){
            //     dispatch({ type: "UPDATE_TRIP_STYLE_SHOWING", payload: tripStylesShowing})
            //     dispatch({ type: "UPDATE_COUNTRIES_INFO", payload: countriesInfo})
            // }
        })

        setTripFilterLabels(tripLabels)
        setCountryFilterLabels(countryLabels)
        setLoaded("Loaded")
    }

    useEffect(() => {
        setListArticles(articles)
        generateFilterLabels(articles)
        setLoaded("Loaded")
    },[articles])

    const handleTripShowAll = () => {
        setTripFilterClassName("filterLabel")
        setTripShowAllClassName("hiddenLabel")
    }

    const handleCountryShowAll = () => {
        setCountryFilterClassName("filterLabel")
        setCountryShowAllClassName("hiddenLabel")
    }


    const addFilterToFiltersList = (x, type) => {
        console.log(articles)
        if(filters[type].includes(x)){
            filters[type].splice(filters[type].indexOf(x), 1)
        } else {
            filters[type].push(x)
        }
        setFilters(filters)
        let updatedList = articles
        console.log(updatedList)
        console.log(articles)
        console.log(filters)
        updatedList.forEach(article => {
            setArticleVisibility(filters, article)
        })
        console.log(articles)
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
                                        <span className="checkmark" onClick={() => {
                                            console.log(articles)
                                            addFilterToFiltersList(Object.keys(x)[0], "tripStyles")}}></span>
                                    </label>
                                </li>
                            </>
                        )
                    }) : null }
                    {loaded !== "Loading"  && tripFilterLabels.length > 3 ? <li onClick={() => handleTripShowAll()} className={tripShowAllClassName}>Show all ({tripFilterLabels.length})</li> : null}
                </ul>
                <ul className="filterLists">
                    <li>Country</li>
                    {loaded !== "Loading" ? countryFilterLabels.map((x, i) => {
                        return (
                            <>
                                <li key={"countryFilter " + i}>
                                    <label className={i < 3 ? "filterLabel" : countryFilterClassName}>{Object.keys(x)}  ({Object.values(x)})
                                        <input type="checkbox"/>
                                        <span className="checkmark" onClick={() => addFilterToFiltersList(Object.keys(x)[0], "countries")}></span>
                                    </label>
                                </li>
                            </>
                        )
                    }) : null}
                    {loaded !== "Loading" && countryFilterLabels.length > 3 ? <li onClick={() => handleCountryShowAll()} className={countryShowAllClassName}>Show all ({countryFilterLabels.length})</li> : null}
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