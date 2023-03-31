import React from 'react'
import { useNavigate } from 'react-router-dom';

import logoImg from '../../images/bottomLogo.png'
import './style.css'

const BottomMenu = () => {
    let navigate = useNavigate();
    return(
        <div className="bottomMenu">
            <div className="bottomMenuMainSegment">
                <div className="bottomMenuLogo">
                    <img src={logoImg} alt="" />
                    <p>Your next adventure starts here!</p>
                </div>
                <div className="bottomMenuLeft">
                    <div className="bottomMenuSegment1">
                        <p>{window.location.pathname !== '/' ? 
                            "Home"
                            : null}</p>
                        <p onClick={() => navigate('/europe')}>Europe</p>
                        <p onClick={() => navigate('/europe/unitedkingdom/london')}>London</p>
                        <p onClick={() => navigate('/europe/france/paris')}>Paris</p>
                        <p onClick={() => navigate('/europe/netherlands/amsterdam')}>Amsterdam</p>
                        <p onClick={() => navigate('/europe/spain/barcelona')}>Barcelona</p>
                        <p onClick={() => navigate('/europe/germany/berlin')}>Berlin</p>
                        {/* {window.innerWidth < 440 ? <p onClick={() => navigate('/australiaoceania')}>Australia/ Oceania</p> : <p onClick={() => navigate('/australiaoceania')}>Australia/Oceania</p>} */}
                    </div>
                    <div className="bottomMenuSegment2">
                        <p onClick={() => navigate('/articles/categories=relaxing')}>Relaxing</p>
                        <p onClick={() => navigate('/articles/categories=luxury')}>Luxury</p>
                        <p onClick={() => navigate('/articles/categories=nature')}>Nature</p>
                        <p onClick={() => navigate('/articles/categories=city-break')}>City Break</p>
                        <p onClick={() => navigate('/articles/categories=budget-friendly')}>Budget Friendly</p>
                        <p onClick={() => navigate('/articles/categories=adventure')}>Adventure</p>
                    </div>
                </div>
            </div>
            <div className="bottomMenuDivider"></div>
            <p className="copyrightPara">Copyright &#169; 2023 Sojo Travels</p>
        </div>
    )
}

export default BottomMenu;