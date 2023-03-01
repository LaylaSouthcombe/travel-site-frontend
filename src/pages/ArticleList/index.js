import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {NavBar, BottomMenu} from '../../layout'
import './style.css'
import axios from 'axios';

import {ArticleGridStyle1,ArticleListCardStyle1, ArticleListGridStyle2, GoogleAd} from '../../components'

//add in random country button
const ArticleList = () => {
    const {query} = useParams();
    let navigate = useNavigate();
    
    const [articles, setArticles] = useState([])
    const [filters, setFilters] = useState([])

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
                setArticles(response.data)
              });
        } else if(query === 'popular'){
            const URL = `http://localhost:3000/articles/trending`
            axios.get(URL).then((response) => {
                setArticles(response.data)
                console.log(response.data.body)
              });
        }
    }, [query])
    console.log(query)
    console.log(articles)

    return(
        <>
            <NavBar/>
            <div className="mainArticleListSection">
                <div className="articleListSection">
                    <div className="filterSection">

                    </div>
                    <div className="articleList">
                        {articles.length ? articles.map(article => {
                            return(
                                <ArticleListCardStyle1 article={article}/>
                            )
                        }) : null}
                    </div>
                </div>
                <div className="sideAds">
                        <GoogleAd dataAdSlot={"4238599075"}/>
                        <p className="popularSideHeading">Popular on Sojo Travels</p>
                        <div className="popularArticlesSideList">
                            <ArticleListGridStyle2/>
                        </div>
                        <GoogleAd dataAdSlot={"9095054520"}/>
                        {/* make sticky */}
                </div>
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Explore Trip Styles</h2>
            </div>
            <BottomMenu/>
        </>
    )
}

export default ArticleList;