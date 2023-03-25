import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home, ContinentCountryCity, Categories, Article, ArticleList, TripPlanning} from './pages'

import './layout/FirstSideNavBar/style.css'
import './layout/DesktopNavBar/style.css'
import './layout/DestinationsDropMenu/style.css'
import './layout/NavBar/style.css'
import './pages/Home/style.css'

import './components/ArticleGridStyle1/style.css'



function App() {

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
    </>
  );
}

export default App;
