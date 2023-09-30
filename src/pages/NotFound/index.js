import React from 'react'

import {NavBar, BottomMenu} from '../../layout'
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

export default NotFound