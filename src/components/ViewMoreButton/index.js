import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const ViewMoreButton = ({endpoint, loaded}) => {
    let navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(endpoint)
    }
    console.log(endpoint)
    
    return (
        <>
        {loaded ? 
            <div className="viewMoreButton">
                <div onClick={handleButtonClick}>View more</div>
            </div>
        : 
        null}
        </>
    )
}

export default ViewMoreButton;