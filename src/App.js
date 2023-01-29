import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home, ContinentCountry, City, Categories} from './pages'

import './layout/FirstSideNavBar/style.css'
import './layout/DesktopNavBar/style.css'
import './layout/DestinationsDropMenu/style.css'
import './layout/NavBar/style.css'
import './pages/Home/style.css'

import './components/ArticleGridStyle1/style.css'






function App() {
  const continents = ['/europe', '/africa', '/asia', '/north-america', '/south-america', '/australia-oceania']
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {continents.map(continent => (
        <>
          <Route path={continent} element={<ContinentCountry/>}/>
          <Route path={continent+'/:country'} element={<ContinentCountry/>}/>
          <Route path={continent+'/:country/:city'} element={<City/>}/>
          <Route path={continent+'/:country/:city/:articleid'} element={<City/>}/>
        </>
      ))}
      {/* categories page */}
      <Route path="/trip-styles" element={<Categories/>}/>
      {/* popular page */}
      <Route path="/popular" element={<Home/>}/>
      {/* tips and tricks page */}
      <Route path="/tips-and-tricks" element={<Home/>}/>
      {/* Article list that connects to explore more buttons, has filter list etc */}
      <Route path="/articles" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
