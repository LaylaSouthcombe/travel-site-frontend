import React from 'react'
import './style.css'

const ViewMoreButton = ({endpoint, loaded}) => {

    return (
        <>
        {loaded ? 
            <a className="viewMoreButton" href={endpoint} target="_blank" rel="noreferrer">
                <div>View more</div>
            </a>
        : 
        null}
        </>
    )
}

export default ViewMoreButton;