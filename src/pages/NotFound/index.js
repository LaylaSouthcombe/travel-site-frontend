import React from 'react'

import {NavBar, BottomMenu} from '../../layout'
import './style.css'

import {PageNotFound, GoogleAd} from '../../components'

const NotFound = () => {

    return (
        <>
            <NavBar/>
            <PageNotFound/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default NotFound;