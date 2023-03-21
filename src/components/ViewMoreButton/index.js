import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const ViewMoreButton = ({endpoint}) => {
    let navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(endpoint)
    }
    
    return (
        <div className="viewMoreButton">
            <div onClick={handleButtonClick}>View more</div>
        </div>
    )
}

export default ViewMoreButton;