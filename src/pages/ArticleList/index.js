import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {NavBar, BottomMenu} from '../../layout'
import './style.css'
import axios from 'axios';

import {ArticleGridStyle1,ArticleListCardStyle1, ArticleListGridStyle2, GoogleAd, HeroArticleSection, ArticleTabCards, ThreeCardsRow, TripStylesGrid} from '../../components'

import {article} from '../../utilities/article'
import {countriesInfo} from '../../utilities/countriesInfo'

//add in random country button
const ArticleList = () => {
    const {query} = useParams();
    let navigate = useNavigate();
    
    const [articles, setArticles] = useState([article,article,article,article,article,article,article,article])
    const [filters, setFilters] = useState([])

// 'category=budget-friendly&city=london'
    // useEffect(() => {
    //     if(query !== 'popular'){
    //         let splitQuery = query.replace(/-/g, " ").split("&")
    //         let country = ""
    //         let city = ""
    //         let category = ""
    //         let continent = ""
    //         for(let i = 0; i < splitQuery.length; i++){
    //             if(splitQuery[i].includes("country=")){
    //                 country = splitQuery[i].split("=")[1]
    //             }
    //             if(splitQuery[i].includes("continent=")){
    //                 continent = splitQuery[i].split("=")[1]
    //             }
    //             if(splitQuery[i].includes("city=")){
    //                 city = splitQuery[i].split("=")[1]
    //             }
    //             if(splitQuery[i].includes("category=")){
    //                 category = splitQuery[i].split("=")[1]
    //             }
    //         }

    //         const queryParam = {
    //             country: country,
    //             continent: continent,
    //             city: city,
    //             category: category
    //         }

    //         const config = {
    //             headers: {
    //               query: JSON.stringify(queryParam)
    //             }
    //         };

    //         const URL = `http://localhost:3000/articles/queryterm`
    //         axios.get(URL, config).then((response) => {
    //             setArticles(response.data)
    //           });

    //     } else if(query === 'popular'){
    //         const URL = `http://localhost:3000/articles/trending`
    //         axios.get(URL).then((response) => {
    //             setArticles(response.data)
    //             console.log(response.data.body)
    //           });
    //     }
    // }, [query])
    
    console.log(query)
    console.log(articles)

    console.log(countriesInfo)

    let tripStyleShowing = {
        "City Break": false,
        "Luxury": false,
        "Nature": false,
        "Food": false,
        "Relaxing": false,
        "Budget Friendly": false,
        "Art & Culture": false,
        "Adventure": false
    }


    let countriesLength = 0
    let stylesLength = 0

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
                <div className="articleListSection">
                    <div className="articleListFilterSection">
                        <p>Filter By:</p>
                        <ul>
                            <li>Trip Style</li>
                            {articles.forEach(x => {
                                tripStyleShowing[x.trip_categories.split(",")[0]] = true
                            })}
                            {Object.keys(tripStyleShowing).map(x => {
                                console.log(x)
                                if(tripStyleShowing[x] === true){
                                    stylesLength += 1
                                }
                                return (
                                    <>
                                        {tripStyleShowing[x] === true && stylesLength <= 3 ? 
                                        <li>{x}</li>
                                        : null}
                                        {tripStyleShowing[x] === true && stylesLength > 3 ? 
                                        <li className="hiddenStyleFilter">{x}</li>
                                        : null}
                                    </>
                                )
                            })}
                            {stylesLength > 3 ? <li>Show all ({stylesLength})</li> : null}
                        </ul>
                        <ul>
                            <li>Country</li>
                            {articles.forEach(x => {
                                if(countriesInfo["europe"].countries[x.country.split(",")[0]] !== undefined) {
                                    if(countriesInfo["europe"].countries[x.country.split(",")[0]].visitable !== false){
                                        countriesInfo["europe"].countries[x.country.split(",")[0]].filterShowing = true
                                    }
                                }
                            })}
                            {Object.keys(countriesInfo["europe"].countries).map(x => {
                                if(countriesInfo["europe"].countries[x].filterShowing === true){
                                    countriesLength += 1
                                }
                                return (
                                    <>
                                        {countriesInfo["europe"].countries[x].filterShowing === true && countriesLength <= 3 ? 
                                        <li>{x}</li>
                                        : null}
                                        {countriesInfo["europe"].countries[x].filterShowing === true && countriesLength > 3 ? 
                                        <li className="hiddenStyleFilter">{x}</li>
                                        : null}
                                    </>
                                )
                            })}
                            {countriesLength > 3 ? <li>Show all ({countriesLength})</li> : null}
                        </ul>
                    </div>
                    <div className="articleList">
                        {articles.length >= 5 ? articles.slice(5).map(article => {
                            return(
                                <ArticleTabCards article={article}/>
                            )
                        }) : null}
                        {articles.length < 5 && articles.length > 0 ? articles.slice(1).map(article => {
                            return(
                                <ArticleTabCards article={article}/>
                            )
                        }) : null}
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