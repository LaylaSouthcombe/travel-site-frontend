import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home, ContinentCountry} from './pages'

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
      {/* continent/country page */}
      {continents.map(continent => (
        <Route path={continent} element={<ContinentCountry/>}>
          <Route path=":country" element={<ContinentCountry />}>
            <Route path=":city" element={<Home />} >
              <Route path=":articleid" element={<Home/>}/>
            </Route>
          </Route>
        </Route>
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
      <Route path="/tripstyles" element={<Home/>}/>
      {/* category page - one page with dynamic categories*/}
      <Route path="/tripstyles/:category" element={<Home/>}/>
      {/* popular page */}
      <Route path="/popular" element={<Home/>}/>
      {/* tips and tricks page */}
      <Route path="/tips-and-tricks" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
