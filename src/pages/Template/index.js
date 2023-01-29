import React from 'react'

import {NavBar, BottomMenu} from '../../layout'


import {ArticleGridStyle1, ArticleGridStyle2, GoogleAd} from '../../components'

//add in random country button
const Template = () => {

    return(
        <>
            <NavBar/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Explore Trip Styles</h2>
            </div>
            <BottomMenu/>
        </>
    )
}

export default Template;