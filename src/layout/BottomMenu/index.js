import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './style.css'

const BottomMenu = () => {
    let navigate = useNavigate();
    console.log(typeof window.location.pathname)
    return(
        <div className="bottomMenu">
            {window.location.pathname === '/' ? 
            <div>
                <p>Home</p>
            </div>
            : null}
            <div className="bottomMenuMainSegment">
                <div className="bottomMenuSegment">
                    <p>Europe</p>
                    <p>Asia</p>
                    <p>Africa</p>
                    <p>North America</p>
                    <p>South America</p>
                    <p>Australia/Oceania</p>
                </div>
                <div className="bottomMenuSegment">
                    <p>London</p>
                    <p>New York</p>
                    <p>Paris</p>
                    <p>Lisbon</p>
                    <p>Sydney</p>
                    <p>Phuket</p>
                </div>
                <div className="bottomMenuSegment">
                    <p>Relaxing</p>
                    <p>Picturesque</p>
                    <p>Nature</p>
                    <p>City Break</p>
                    <p>Budget Friendly</p>
                    <p>Adventure</p>
                </div>
            </div>
            <div className="bottomMenuDivider"></div>
            <p className="copyrightPara">Copyright &#169; 2023 Sojo Travels</p>
        </div>
    )
}

export default BottomMenu;