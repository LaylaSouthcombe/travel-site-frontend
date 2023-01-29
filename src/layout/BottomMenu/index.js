import React from 'react'
import { useNavigate } from 'react-router-dom';

import './style.css'

const BottomMenu = () => {
    let navigate = useNavigate();
    return(
        <div className="bottomMenu">
            <div>
            <p>{window.location.pathname !== '/' ? 
                "Home"
                : null}</p>
            </div>
            <div className="bottomMenuMainSegment">
                <div className="bottomMenuSegment">
                    <p onClick={() => navigate('/europe')}>Europe</p>
                    <p onClick={() => navigate('/asia')}>Asia</p>
                    <p onClick={() => navigate('/africa')}>Africa</p>
                    <p onClick={() => navigate('/northamerica')}>North America</p>
                    <p onClick={() => navigate('/southamerica')}>South America</p>
                    {window.innerWidth < 440 ? <p onClick={() => navigate('/australiaoceania')}>Australia/ Oceania</p> : <p onClick={() => navigate('/australiaoceania')}>Australia/Oceania</p>}
                </div>
                <div className="bottomMenuSegment">
                    <p onClick={() => navigate('europe/city/london')}>London</p>
                    <p onClick={() => navigate('northamerica/newyork')}>New York</p>
                    <p onClick={() => navigate('europe/paris')}>Paris</p>
                    <p onClick={() => navigate('europe/lisbon')}>Lisbon</p>
                    <p onClick={() => navigate('')}>Sydney</p>
                    <p onClick={() => navigate('')}>Phuket</p>
                </div>
                <div className="bottomMenuSegment">
                    <p onClick={() => navigate('/category/relaxing')}>Relaxing</p>
                    <p onClick={() => navigate('/category/picturesque')}>Picturesque</p>
                    <p onClick={() => navigate('/category/nature')}>Nature</p>
                    <p onClick={() => navigate('/category/citybreak')}>City Break</p>
                    <p onClick={() => navigate('/category/budgetfriendly')}>Budget Friendly</p>
                    <p onClick={() => navigate('/category/adventure')}>Adventure</p>
                </div>
            </div>
            <div className="bottomMenuDivider"></div>
            <p className="copyrightPara">Copyright &#169; 2023 Sojo Travels</p>
        </div>
    )
}

export default BottomMenu;