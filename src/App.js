import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home, ContinentCountryCity, TripStyles, Article, ArticleList, TripPlanning, NotFound, SearchResults, TermsAndConditions, PrivacyPolicy, Disclaimer} from './pages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import './layout/FirstSideNavBar/style.css'
import './layout/DesktopNavBar/style.css'
import './layout/DestinationsDropMenu/style.css'
import './layout/NavBar/style.css'
import './pages/Home/style.css'

import './components/ArticleGrids/ArticleGridStyle1/style.css'



function App() {
  const [buttonClassName, setButtonClassName] = useState("backToTopBtnMid")
  
  function scrollFunction() {
    const bottomMenuHeight = document.querySelector('.bottomMenu').clientHeight
    let bottomScrollValue = window.screen.height + bottomMenuHeight
    const scrollAtBottom = document.body.scrollHeight - document.body.scrollTop <= bottomScrollValue || document.documentElement.scrollHeight - document.documentElement.scrollTop <= bottomScrollValue
    
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      if(scrollAtBottom){
        setButtonClassName("backToTopBtnBot hiddenToTopBtn")
      } else {
        setButtonClassName("backToTopBtnMid visibleToTopBtn")
      }
    } else {
        setButtonClassName("backToTopBtnBot hiddenToTopBtn")
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
        {/* TripStyles page */}
        <Route path="/trip-styles" element={<TripStyles/>}/>
        {/* Tips and tricks page */}
        <Route path="/trip-planning" element={<TripPlanning/>}/>    
        {/* Search results, view all, individual trip styles, popular */}
        <Route path="/articles/:query" element={<ArticleList/>}/>
        <Route path="/search" element={<SearchResults/>}/>
        <Route path="/article/:articleid" element={<Article/>}/>
        <Route path="/legal/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/legal/disclaimer" element={<Disclaimer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <div className={buttonClassName} onClick={() => topFunction()}>
        <FontAwesomeIcon icon={faAngleUp} />
        To top
      </div>
    </>
  );
}

export default App;
