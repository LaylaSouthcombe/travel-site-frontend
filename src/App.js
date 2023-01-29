import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home, ContinentCountry, City} from './pages'

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


      {/* <Route path="/africa" element={<Home/>}/>
      <Route path="/asia" element={<Home/>}/>
      <Route path="/northamerica" element={<Home/>}/>
      <Route path="/southamerica" element={<Home/>}/>
      <Route path="/australiaoceania" element={<Home/>}/> */}
      {/* continent/country pages - one for each contient with dynamic countries*/}
      {/* <Route path="/europe/:country" element={<Home/>}/>
      <Route path="/africa/:country" element={<Home/>}/>
      <Route path="/asia/:country" element={<Home/>}/>
      <Route path="/northamerica/:country" element={<Home/>}/>
      <Route path="/southamerica/:country" element={<Home/>}/>
      <Route path="/australiaoceania/:country" element={<Home/>}/> */}
      {/* categories page */}
      <Route path="/trip-styles" element={<Home/>}>
        <Route path=":category" element={<Home/>}>
          <Route path=":location" element={<Home/>}/>
        </Route>
      </Route>
      {/* popular page */}
      <Route path="/popular" element={<Home/>}/>
      {/* tips and tricks page */}
      <Route path="/tips-and-tricks" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
