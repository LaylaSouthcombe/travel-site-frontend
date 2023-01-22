import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages'

import './layout/FirstSideNavBar/style.css'
import './layout/DesktopNavBar/style.css'



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/desert" element={<Category renderTerm={desert}/>}/> */}
      {/* Have routes pass in prop to page component to render page */}
    </Routes>
    </>
  );
}

export default App;
