import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home, ContinentCountryCity, Categories, Article, ArticleList, TripPlanning} from './pages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import './layout/FirstSideNavBar/style.css'
import './layout/DesktopNavBar/style.css'
import './layout/DestinationsDropMenu/style.css'
import './layout/NavBar/style.css'
import './pages/Home/style.css'

import './components/ArticleGridStyle1/style.css'



function App() {
  const [buttonDisplay, setButtonDisplay] = useState("none")
  const [buttonClassName, setButtonClassName] = useState("backToTopBtnMid")

  
  function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      if(document.body.scrollHeight - document.body.scrollTop <= 1290 || document.documentElement.scrollHeight - document.documentElement.scrollTop <= 1290){
        setButtonClassName("backToTopBtnBot")
      } else {
        setButtonClassName("backToTopBtnMid")
      }
      setButtonDisplay("block")
    } else {
      setButtonDisplay("none")
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.onscroll = () => {scrollFunction()};
  
  return (
    <>
      <Routes>
        {/* Europe routes */}
        <Route path="/" element={<Home/>}/>
        <Route path={'/europe'} element={<ContinentCountryCity/>}/>
        <Route path={'/europe/:country'} element={<ContinentCountryCity/>}/>
        <Route path={'/europe/:country/:city'} element={<ContinentCountryCity/>}/>
        {/* Categories page */}
        <Route path="/trip-styles" element={<Categories/>}/>
        {/* Tips and tricks page */}
        <Route path="/trip-planning" element={<TripPlanning/>}/>    
        {/* Search results, view all, individual categories, popular */}
        <Route path="/articles/:query" element={<ArticleList/>}/>
        <Route path="/article/:articleid" element={<Article/>}/>
      </Routes>
      <div className={buttonClassName} onClick={() => topFunction()} style={{display: buttonDisplay}}>
        <FontAwesomeIcon icon={faAngleUp} />
        To top
      </div>
    </>
  );
}

export default App;
