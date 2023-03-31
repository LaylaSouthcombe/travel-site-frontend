import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import './style.css'

const NoNestDropMenu = ({fullListData, itemTitle}) => {
    let navigate = useNavigate();

    const renderNoNestDropMenuDropDown = fullListData[itemTitle].map((item, i) => {
        return (
            <div className="dropDownItem" key={"dropDownItem" + i} onClick={() => navigate(item.url)}>
                {item.icon !== undefined ? 
                <FontAwesomeIcon icon={item.icon} />
                : 
                null
                }
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