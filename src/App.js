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
  const continents = ['/europe', 
  // '/africa', '/asia', '/north-america', '/south-america', '/australia-oceania'
]
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {continents.map(continent => (
        <>
          <Route path={continent} element={<ContinentCountryCity/>}/>
          <Route path={continent+'/:country'} element={<ContinentCountryCity/>}/>
          <Route path={continent+'/:country/:city'} element={<ContinentCountryCity/>}/>
        </>
      ))}
      {/* categories page */}
      <Route path="/trip-styles" element={<Categories/>}/>
      {/* tips and tricks page */}
      <Route path="/trip-planning" element={<TripPlanning/>}/>
      {/* Article list that connects to explore more buttons, has filter list etc */}
      
      {/* use below route for search results, view all, individual categories, popular */}
      <Route path="/articles/:query" element={<ArticleList/>}/>
      <Route path="/article/:articleid" element={<Article/>}/>
    </Routes>
    </>
  );
}

export default App;
