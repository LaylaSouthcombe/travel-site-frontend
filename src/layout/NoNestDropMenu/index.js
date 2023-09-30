import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

const NoNestDropMenu = ({fullListData, itemTitle}) => {

    const renderNoNestDropMenuDropDown = fullListData[itemTitle].map((item, i) => {
        return (
            <a className="dropDownItem" key={"dropDownItem" + i} href={item.url}>
                {item.icon !== undefined ? 
                <FontAwesomeIcon icon={item.icon} />
                : 
                null
                }
                <p>{item.name}</p>
            </a>
        )
    })

    return (
        <>
            <div className="navDropdown" id={`${itemTitle.slice(0,4)}Dropdown`}>
                {renderNoNestDropMenuDropDown}
                <div className="navDropDownItemPlaceholder"></div>
            </div>
        </>
    )
}

export default NoNestDropMenu