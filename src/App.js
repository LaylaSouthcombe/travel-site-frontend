import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home, ContinentCountry, Categories, Article, ArticleList} from './pages'

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
          <Route path={continent} element={<ContinentCountry/>}/>
          <Route path={continent+'/:country'} element={<ContinentCountry/>}/>
          {/* <Route path={continent+'/:country/:city'} element={<City/>}/> */}
          <Route path={continent+'/:country/:articleid'} element={<Article/>}/>
        </>
      ))}
      {/* categories page */}
      <Route path="/trip-styles" element={<Categories/>}/>
      {/* popular page */}
      <Route path="/popular" element={<Home/>}/>
      {/* tips and tricks page */}
      <Route path="/tips-and-tricks" element={<Home/>}/>
      {/* Article list that connects to explore more buttons, has filter list etc */}
      <Route path="/articles/:query" element={<ArticleList/>}/>
      <Route path="/article/:articleid" element={<Article/>}/>
    </Routes>
    </>
  );
}

export default App;
