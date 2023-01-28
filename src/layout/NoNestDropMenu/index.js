import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import './style.css'

const NoNestDropMenu = ({fullListData, itemTitle}) => {
    let navigate = useNavigate();

    const renderNoNestDropMenuDropDown = fullListData[itemTitle].map(item => {
        return(
            <div className="dropDownItem" onClick={() => navigate(item.url)}>
                <FontAwesomeIcon icon={item.icon} />
                <p>{item.name}</p>
            </div>
        )
    })

    return (
        <>
            <div className="navDropdown" id={`${itemTitle.slice(0,4)}Dropdown`}>
                {renderNoNestDropMenuDropDown}
            </div>
        </>
    )
}

export default NoNestDropMenu;