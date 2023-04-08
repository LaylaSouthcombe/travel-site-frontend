import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

const TakeMeHomeButton = () => {

    return (
        <>
            <a className="takeMeBackBtn" href="/">Home<FontAwesomeIcon icon={faGreaterThan}/></a>
        </>
    )
}

export default TakeMeHomeButton;