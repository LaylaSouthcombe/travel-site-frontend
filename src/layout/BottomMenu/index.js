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
                        <p onClick={() => navigate('/asia')}>London</p>
                        <p onClick={() => navigate('/africa')}>Paris</p>
                        <p onClick={() => navigate('/northamerica')}>Amsterdam</p>
                        <p onClick={() => navigate('/southamerica')}>Barcelona</p>
                        <p onClick={() => navigate('/southamerica')}>Berlin</p>
                        {/* {window.innerWidth < 440 ? <p onClick={() => navigate('/australiaoceania')}>Australia/ Oceania</p> : <p onClick={() => navigate('/australiaoceania')}>Australia/Oceania</p>} */}
                    </div>
                    <div className="bottomMenuSegment2">
                        <p onClick={() => navigate('/category/relaxing')}>Relaxing</p>
                        <p onClick={() => navigate('/category/luxury')}>Luxury</p>
                        <p onClick={() => navigate('/category/nature')}>Nature</p>
                        <p onClick={() => navigate('/category/citybreak')}>City Break</p>
                        <p onClick={() => navigate('/category/budgetfriendly')}>Budget Friendly</p>
                        <p onClick={() => navigate('/category/adventure')}>Adventure</p>
                    </div>
                </div>
            </div>
            <div className="bottomMenuDivider"></div>
            <p className="copyrightPara">Copyright &#169; 2023 Sojo Travels</p>
        </div>
    )
}

export default BottomMenu;