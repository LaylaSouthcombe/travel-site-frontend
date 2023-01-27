import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

const NoNestDropMenu = ({fullListData, itemTitle}) => {
    const renderNoNestDropMenuDropDown = fullListData[itemTitle].map(item => {
        return(
            <>
                <FontAwesomeIcon icon={item.icon} />
                <p>{item.name}</p>
            </>
        )
    })

    return(
        <>
            <div className="navDropdown" id={`${itemTitle.slice(0,4)}Dropdown`}>
                {renderNoNestDropMenuDropDown}
            </div>
        </>
    )
}

export default NoNestDropMenu;