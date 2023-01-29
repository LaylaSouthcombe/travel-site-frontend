import React, {useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {ArticleCardStyle1, ArticleListCardStyle1} from '..'

import './style.css'

const ArticleGridStyle4 = () => {

const article = {
    "imageId": "452911",
    "title": "Ten Top Tips on How to Plan a Budget-Friendly Trip to South America",
    "body" : '<img src="https://github.com/LaylaSouthcombe/travel-site-images/blob/main/rio-de-janeiro-4566312_640.jpg?raw=true" alt="Rio de Janeiro, Brazil" className="articleHeroImage"/><figcaption>Rio de Janeiro, Brazil</figcaption><p class="introPara">South America is a continent full of natural beauty, rich culture, and diverse experiences. However, planning a trip to this part of the world can be daunting, especially if you\'re on a tight budget. But with a bit of planning and some smart choices, you can have an amazing South American adventure without breaking the bank. Here are some tips for planning a budget-friendly trip to South America.</p><h2>1.Choose Your Destination Wisely</h2><p className="articlePara">Not all countries in South America are created equal when it comes to budget travel.Some, like Colombia and Ecuador, are relatively affordable, while others, like Brazil and Argentina, can be quite expensive. Do your research to find the destinations that align best with your budget and travel goals.</p><h2>2.Travel in the Off-Season</h2><p className="articlePara">South America has two main tourist seasons: December to February and June to August. During these times, prices for flights, accommodation, and activities tend to be higher. If you\'re able to travel during the off-season, you\'ll likely save money and have a more authentic experience.</p><h2>3.Be Flexible with Your Itinerary</h2><p className="articlePara">If you\'re able to be flexible with your itinerary, you\'ll have more options for budget-friendly travel. For example, if you\'re open to staying in budget-friendly accommodation like hostels or Airbnb, you\'ll be able to stretch your budget further.</p> <img src="https://github.com/LaylaSouthcombe/travel-site-images/blob/main/cable-881759_640.jpg?raw=true" alt="Cable car in Medillin, Colombia" className="articleImage"/><figcaption>Medillin, Colombia</figcaption><h2>4.Embrace Public Transportation</h2><p className="articlePara">One of the most budget-friendly ways to get around South America is by using public transportation. Not only is it cheaper than hiring a car or taking taxis, but it also allows you to experience the local culture and meet new people.</p><h2>5.Eat Like a Local</h2><p className="articlePara">Eating out at restaurants can add up quickly, so try to eat like a local. Street food and local markets are great options for budget-friendly meals.</p><h2>6.Be Smart with Your Currency</h2><p className="articlePara">Some countries in South America have currency that fluctuates greatly in value compared to the US dollar or Euro. Be aware of the currency exchange rate and try to withdraw cash from ATMs instead of exchanging currency at a bank or currency exchange.</p><img src="https://github.com/LaylaSouthcombe/travel-site-images/blob/main/ecuador-1772318_640.jpg?raw=true" alt="Colorful houses in Guayaquil, Ecuador" className="articleImage"/><figcaption>Guayaquil, Ecuador</figcaption><h2>7.Find Deals on Accommodation</h2><p className="articlePara">Accommodation can be one of the biggest expenses when traveling, so try to find deals on accommodation. Hostels, homestays, and Airbnb are all great options for budget-friendly accommodation.</p><h2>8.Use Discounted Passes or Card</h2><p className="articlePara">Many cities in South America offer discounted passes or cards for tourists that give you access to a variety of activities, such as museums and attractions. These can be a great way to save money and make the most of your trip.</p><h2>9.Book in Advance</h2><p className="articlePara">If you\'re able to book your flights, accommodation, and activities in advance, you\'ll likely be able to save money.</p> <h2>10.Be Prepared for Hidden Costs</h2><p className="articlePara">When traveling on a budget, it\'s important to be prepared for hidden costs, such as entrance fees, transportation costs, and tips. Make sure you factor these into your budget so you don\'t run out of money.</p><p className="conclusionPara">In conclusion, South America is a continent that offers a diverse array of experiences and natural beauty that can be enjoyed even on a budget. By choosing your destination wisely, traveling during the off-season, being flexible with your itinerary, embracing public transportation, eating like a local, being smart with currency, finding deals on accommodation, using discounted passes or cards, booking in advance and being prepared for hidden costs, you can have an amazing adventure without breaking the bank. With a bit of planning and some smart choices, you can create a budget-friendly itinerary that will allow you to fully immerse yourself in the culture and beauty of South America.</p>',
    "city": "bogota, Quito, brazillia, buenos aires",
    "country": "Colombia, Ecuador, Brazil, Argentina",
    "continent": "south america",
    "trip_categories": "city, adventure, culture",
    "keywords": "Colombia, Ecuador, Brazil, Argentina"
    }

    return (
        <div className="articleGridStyle3">
            <div className="style3column1">
                <ArticleCardStyle1 article={article}/>
            </div>
            <div className="style3column2">
                <div className="style3column2row1">
                    <div>Country</div>
                </div>
                <div className="style3column2row1">
                    <div>Country</div>
                </div>
                <div className="style3column2row1">
                    <div>Country</div>
                </div>
            </div>
            <div className="style3column1">
                <ArticleCardStyle1 article={article}/>
            </div>
        </div>
    )
}

export default ArticleGridStyle4;