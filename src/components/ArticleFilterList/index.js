import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom';
import { useSelector} from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import {article} from '../../utilities/article'

import {ArticleListGridStyle2, GoogleAd, ArticleTabCards} from '../../components'

import {setArticleVisibility, increaseNumberOfArticlesForFilter, addNewOrIncreaseExistingFilterToFilterArray, resetFilterLabelNumbers, uncheckOrCheckCheckBox} from './articleFilterListHelper'

const ArticleFilterList = ({articles}) => {
  
    const {query} = useParams();
    const countriesInfo = useSelector(state => state.countriesInfo)
    const tripStylesShowing = useSelector(state => state.tripStylesShowing)
    const [filters, setFilters] = useState({countries: [], tripStyles: []})
    const [listArticles, setListArticles] = useState([])
    const [tripFilterLabels, setTripFilterLabels] = useState([])
    const [countryFilterLabels, setCountryFilterLabels] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [tripFilterClassName, setTripFilterClassName] = useState("hiddenLabel")
    const [tripShowAllClassName, setTripShowAllClassName] = useState("filterLabel")
    const [countryFilterClassName, setCountryFilterClassName] = useState("hiddenLabel")
    const [countryShowAllClassName, setCountryShowAllClassName] = useState("filterLabel")

    let loadingArticles = [article, article, article, article, article, article]

    const generateFilterLabels = (articlesList) => {
        let tripLabels = []
        let countryLabels = []
        articlesList.forEach(article => {
                let tripName = article.article_category
                addNewOrIncreaseExistingFilterToFilterArray(tripStylesShowing, tripLabels, tripName)
                let countryName = article.country.split(",")[0]
                if(countriesInfo["europe"].countries[countryName] !== undefined) {
                    addNewOrIncreaseExistingFilterToFilterArray(countriesInfo["europe"].countries, countryLabels, countryName)
                }
        })
        setTripFilterLabels(tripLabels)
        setCountryFilterLabels(countryLabels)
        setLoaded(true)
    }

    const updateFilterLabels = (articlesList) => {
        let tripLabels = tripFilterLabels
        let countryLabels = countryFilterLabels
        resetFilterLabelNumbers(tripLabels)
        resetFilterLabelNumbers(countryLabels)
        articlesList.forEach(article => {
            let tripName = article.article_category
            let countryName = article.country.split(",")[0]
            if(article.visibility === true){
                increaseNumberOfArticlesForFilter(tripLabels, tripName)
                increaseNumberOfArticlesForFilter(countryLabels, countryName)
            }
        })
        setTripFilterLabels(tripLabels)
        setCountryFilterLabels(countryLabels)
        setLoaded(true)
    }

    useEffect(() => {
        setListArticles(articles)
        generateFilterLabels(articles)
        setLoaded(true)
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

    const articleListFilterSection = document.getElementsByClassName("articleListFilterSection")
    const body = document.querySelector('body')
    const openFilterMenu = (e) => {
        e.preventDefault()
        articleListFilterSection[0].style.display = 'block'
        body.classList.add("fixedBody")
    }

    const closeFilterMenu = (e) => {
        e.preventDefault()
        articleListFilterSection[0].style.display = 'none'
        body.classList.remove("fixedBody")
    }

    return (
        <div className="articleListSection">
            {loaded && listArticles.length > 4 ?
            <div className="articleListFilterSection">
                <div className="filterCross" onClick={(e) => closeFilterMenu(e)}><FontAwesomeIcon icon={faXmark}/></div>
                <p>Filter By:</p>
                <ul className="filterLists">
                    <li>Trip Style</li>                  
                    {loaded && tripFilterLabels.length ? renderTripFilters : null }
                    {loaded && numberOfTripFiltersShowing > 3 ? renderShowAllTripFilters() : null }
                </ul>
                <ul className="filterLists">
                    <li>Country</li>
                    {loaded && countryFilterLabels.length ? renderCountryFilters : null }
                    {loaded && numberOfCountryFiltersShowing > 3 ? renderShowAllCountryFilters() : null }
                </ul>
                <p className="showResults" onClick={(e) => closeFilterMenu(e)}>Show results</p>
            </div>
            : null}
            {!loaded ?
            <div className="articleListFilterSection skeletonFilterSection">
                <p><Skeleton variant="rounded" width={"80%"} height={20}/></p>
                <ul className="filterLists">
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                </ul>
                <ul className="filterLists">
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                    <li><Skeleton variant="rounded" width={"80%"} height={20}/></li>
                </ul>
            </div>
            : null}
            {loaded && listArticles.length > 4 ?
            <>
            <div className="filterBar" onClick={(e) => openFilterMenu(e)}>
                <FontAwesomeIcon icon={faList}/>
                <FontAwesomeIcon icon={faFilter}/> Filters
            </div>
            <div className="articleList">
                {listArticles.map((article, i) => {
                    if(article.visibility === true){
                        numberOfArticles += 1
                    }
                    return (
                        <>
                            {article.visibility === true ? <ArticleTabCards keyId={"articleListLong " + i} key={"articleListLong " + i} article={article}  loaded={loaded}/> : null}
                        </>
                    )
                })}
                {loaded && numberOfArticles === 0 ? 
                <>
                    <div className="noArticles">
                        No articles found
                    </div>
                </>
                : null}
            </div>
            </>
            : null}
            {!loaded ?
            <>
            <div className="articleList">
                {loadingArticles.map((article, i) => {
                    return (
                        <>
                            <ArticleTabCards keyId={"articleListLong " + i} key={"articleListLong " + i} article={article} loaded={false}/>
                        </>
                    )
                })}
                {loaded && numberOfArticles === 0 ? 
                <>
                    <div className="noArticles">
                        No articles found
                    </div>
                </>
                : null}
            </div>
            </>
            : null}
            <div className="sideAds">
                    <GoogleAd dataAdSlot={"4238599075"}/>
                        {query !== 'popular' ? 
                        <>
                            <p className="popularSideHeading">Popular on Sojo Travels</p>
                            <div className="popularArticlesSideList">
                                <ArticleListGridStyle2 articles={[article,article, article, article]} loaded={loaded}/> 
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