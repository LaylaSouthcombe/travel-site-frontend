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
    const [filters, setFilters] = useState({countries: [], tripStyles: []})

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
//     useEffect(() => {
//         if(query !== 'popular'){
//             let splitQuery = query.replace(/-/g, " ").split("&")
//             let country = ""
//             let city = ""
//             let category = ""
//             let continent = ""
//             for(let i = 0; i < splitQuery.length; i++){
//                 if(splitQuery[i].includes("country=")){
//                     country = splitQuery[i].split("=")[1]
//                 }
//                 if(splitQuery[i].includes("continent=")){
//                     continent = splitQuery[i].split("=")[1]
//                 }
//                 if(splitQuery[i].includes("city=")){
//                     city = splitQuery[i].split("=")[1]
//                 }
//                 if(splitQuery[i].includes("category=")){
//                     category = splitQuery[i].split("=")[1]
//                 }
//             }

//             const queryParam = {
//                 country: country,
//                 continent: continent,
//                 city: city,
//                 category: category
//             }

//             const config = {
//                 headers: {
//                   query: JSON.stringify(queryParam)
//                 }
//             };

//             const URL = `http://localhost:3000/articles/queryterm`
//             axios.get(URL, config).then((response) => {
    //                 let responseArticles = response.data
                    //responseArticles.forEach(x => {
//                      x.visibility = true
                    //})
//                 setArticles(responseArticles)
//               });

//         } else if(query === 'popular'){
//             const URL = `http://localhost:3000/articles/trending`
//             axios.get(URL).then((response) => {
    //                 let responseArticles = response.data
                    //responseArticles.forEach(x => {
//                      x.visibility = true
                    //})
//                 setArticles(responseArticles)
//               });
//         }
//     }, [query])

    console.log(query)
    console.log(articles)

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

    const addFilterToFiltersList = (x, type) => {
        if(filters[type].includes(x)){
            filters[type].splice(filters[type].indexOf(x), 1)
        } else {
            filters[type].push(x)
        }
        setFilters(filters)
        articles.forEach(article => {
            setArticleVisibility(filters, article)
        })
        setArticles(articles)
        console.log(articles)
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
                <div className="articleListSection">
                    <div className="articleListFilterSection">
                        <p>Filter By:</p>
                        {/* <label class="filterLabel">One
                            <input type="checkbox" checked="checked"/>
                            <span class="checkmark"></span>
                        </label> */}
                        <ul className="filterLists">
                            <li>Trip Style</li>
                            {articles.forEach(x => {
                                tripStyleShowing[x.trip_categories.split(",")[0]] = true
                            })}
                            {Object.keys(tripStyleShowing).map(x => {
                                if(tripStyleShowing[x] === true){
                                    stylesLength += 1
                                }
                                return (
                                    <>
                                        {tripStyleShowing[x] === true && stylesLength <= 3 ? 
                                        <li>
                                            <label class="filterLabel">{x}
                                                <input type="checkbox"/>
                                                <span class="checkmark" onClick={() => addFilterToFiltersList(x, "tripStyles")}></span>
                                            </label>
                                        </li>
                                        : null}
                                        {tripStyleShowing[x] === true && stylesLength > 3 ? 
                                        <li>
                                            <label class="filterLabel">{x}
                                                <input type="checkbox"/>
                                                <span class="checkmark" onClick={() => addFilterToFiltersList(x, "tripStyles")}></span>
                                            </label>
                                        </li>
                                        : null}
                                    </>
                                )
                            })}
                            {stylesLength > 3 ? <li>Show all ({stylesLength})</li> : null}
                        </ul>
                        <ul className="filterLists">
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
                                        <li>
                                            <label class="filterLabel">{x}
                                                <input type="checkbox"/>
                                                <span class="checkmark" onClick={() => addFilterToFiltersList(x, "countries")}></span>
                                            </label>
                                        </li>
                                        : null}
                                        {countriesInfo["europe"].countries[x].filterShowing === true && countriesLength > 3 ? 
                                        <li>
                                            <label class="filterLabel">{x}
                                                <input type="checkbox"/>
                                                <span class="checkmark" onClick={() => addFilterToFiltersList(x, "countries")}></span>
                                            </label>
                                        </li>
                                        : null}
                                    </>
                                )
                            })}
                            {countriesLength > 3 ? <li>Show all ({countriesLength})</li> : null}
                        </ul>
                    </div>
                    <div className="articleList">
                        {articles.length >= 5 ? articles.slice(5).map(article => {
                            return (
                                <>
                                    {article.visibility === true ? <><ArticleTabCards article={article}/> {numberOfArticles += 1}</> : null}
                                </>
                            )
                        }) : null}
                        {articles.length < 5 && articles.length > 0 ? articles.slice(1).map(article => {
                            return (
                                <>
                                    {article.visibility === true ? <><ArticleTabCards article={article}/> {numberOfArticles += 1}</> : null}
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