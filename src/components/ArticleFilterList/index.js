import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import './style.css'

import {ArticleListGridStyle2, GoogleAd, ArticleTabCards} from '../../components'

import {setArticleVisibility, increaseNumberOfArticlesForFilter, addNewOrIncreaseExistingFilterToFilterArray, resetFilterLabelNumbers, uncheckOrCheckCheckBox} from './articleFilterListHelper'


const ArticleFilterList = ({articles, setArticles}) => {
    const dispatch = useDispatch()

    const {query} = useParams();

    const countriesInfo = useSelector(state => state.countriesInfo)

    const tripStylesShowing = useSelector(state => state.tripStylesShowing)

    const [filters, setFilters] = useState({countries: [], tripStyles: []})

    const [listArticles, setListArticles] = useState([])

    const [tripFilterLabels, setTripFilterLabels] = useState([])
    
    const [countryFilterLabels, setCountryFilterLabels] = useState([])
    
    const [loaded, setLoaded] = useState("Loading")
    
    const [tripFilterClassName, setTripFilterClassName] = useState("hiddenLabel")
    const [tripShowAllClassName, setTripShowAllClassName] = useState("filterLabel")
    const [countryFilterClassName, setCountryFilterClassName] = useState("hiddenLabel")
    const [countryShowAllClassName, setCountryShowAllClassName] = useState("filterLabel")


    

    const generateFilterLabels = (articlesList) => {
        let tripLabels = []
        let countryLabels = []

        articlesList.forEach(article => {
                let tripName = article.trip_categories.split(",")[0]
                addNewOrIncreaseExistingFilterToFilterArray(tripStylesShowing, tripLabels, tripName)
                let countryName = article.country.split(",")[0]
                if(countriesInfo["europe"].countries[countryName] !== undefined) {
                    addNewOrIncreaseExistingFilterToFilterArray(countriesInfo["europe"].countries, countryLabels, countryName)
                }
        })

        setTripFilterLabels(tripLabels)
        setCountryFilterLabels(countryLabels)
        setLoaded("Loaded")
    }

    const updateFilterLabels = (articlesList) => {
        let tripLabels = tripFilterLabels
        let countryLabels = countryFilterLabels
        resetFilterLabelNumbers(tripLabels)
        resetFilterLabelNumbers(countryLabels)
        articlesList.forEach(article => {
            let tripName = article.trip_categories.split(",")[0]
            let countryName = article.country.split(",")[0]
            if(article.visibility === true){
                increaseNumberOfArticlesForFilter(tripLabels, tripName)
                increaseNumberOfArticlesForFilter(countryLabels, countryName)
            }
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

    const addFilterToFiltersList = (filterLabel, type) => {
        if(filters[type].includes(filterLabel)){
            filters[type].splice(filters[type].indexOf(filterLabel), 1)
        } else {
            filters[type].push(filterLabel)
        }
        setFilters(filters)
    }

    const filterArticles = (e,filterLabel, type) => {
        uncheckOrCheckCheckBox(e)
        addFilterToFiltersList(filterLabel, type)

        let updatedList = [...articles]

        updatedList.forEach(article => {
            setArticleVisibility(filters, article)
        })

        updateFilterLabels(updatedList)
        setListArticles(updatedList)
    }
    
    let numberOfTripFiltersShowing = 0

    const renderTripFilters = tripFilterLabels.map((x, i) => {
            if(Object.values(x)[0] > 0){
                numberOfTripFiltersShowing += 1
            }
            return (
                <>
                    <li key={"tripFilter " + i} className={Object.values(x)[0] > 0 ? null : "hiddenFilter"}>
                        <label className={numberOfTripFiltersShowing <= 3 ? "filterLabel" : tripFilterClassName} onClick={(e) => {
                                filterArticles(e,Object.keys(x)[0], "tripStyles")}}>{Object.keys(x)} ({Object.values(x)})
                            <span className="checkmark"></span>
                        </label>
                    </li>
                </>
            )
        })

        const renderShowAllTripFilters = () => {
            return (
                <>
                    <li onClick={() => handleTripShowAll()} className={tripShowAllClassName}>Show all ({tripFilterLabels.length})</li>
                </>
            )
        }

        let numberOfCountryFiltersShowing = 0

        const renderCountryFilters = countryFilterLabels.map((x, i) => {
            if(Object.values(x)[0] > 0){
                numberOfCountryFiltersShowing += 1
            }
            return (
                <>
                    <li key={"countryFilter " + i} className={Object.values(x)[0] > 0 ? null : "hiddenFilter"}>
                        <label className={numberOfCountryFiltersShowing <= 3 ? "filterLabel" : countryFilterClassName} onClick={(e) => {
                                filterArticles(e, Object.keys(x)[0], "countries")}}>{Object.keys(x)} ({Object.values(x)})
                            <span className="checkmark"></span>
                        </label>
                    </li>
                </>
            )
        })

        const renderShowAllCountryFilters = () => {
            return (
                <>
                    <li onClick={() => handleCountryShowAll()} className={countryShowAllClassName}>Show all ({countryFilterLabels.length})</li>
                </>
            )
        }
    

    let numberOfArticles = 0
   
    

    return (
        <div className="articleListSection">
            {loaded !== "loading" && listArticles.length > 4 ?
            <div className="articleListFilterSection">
                <p>Filter By:</p>
                <ul className="filterLists">
                    <li>Trip Style</li>                  
                    {loaded !== "Loading" && tripFilterLabels.length ? renderTripFilters : null }
                    {loaded !== "Loading" && numberOfTripFiltersShowing > 3 ? renderShowAllTripFilters() : null }
                </ul>
                <ul className="filterLists">
                    <li>Country</li>
                    {loaded !== "Loading" && countryFilterLabels.length ? renderCountryFilters : null }
                    {loaded !== "Loading" && numberOfCountryFiltersShowing > 3 ? renderShowAllCountryFilters() : null }
                </ul>
            </div>
            : null}
            {loaded !== "Loading" && listArticles.length > 4 ?
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