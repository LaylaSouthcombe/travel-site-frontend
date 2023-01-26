import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {DestinationsDropMenu, NoNestDropMenu} from '../../layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


const DesktopNavBar = ({titleListData, fullListData, dropdownMenuOpen, setDropdownMenuOpen}) => {
    let navigate = useNavigate();
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [dropdownMenuName, setDropdownMenuName] = useState('Destinations')
    const [menuItemClassName, setMenuItemClassName] = useState(['menuItem', 'menuItem', 'menuItem'])

    const handleResize = () => {
        setWindowSize(window.innerWidth)
        setDropdownMenuOpen(false)
        setMenuItemClassName(['menuItem', 'menuItem', 'menuItem'])
    }

    window.addEventListener('resize', handleResize)

    const clickOpenCloseMenu = (item, i) => {
        let currentOpenState = dropdownMenuOpen
        if(dropdownMenuName !== item){
            setMenuItemClassName(['menuItem', 'menuItem', 'menuItem'])
            currentOpenState = false
            setDropdownMenuName(item)
        }
        if(currentOpenState){
            setDropdownMenuOpen(false)
            setMenuItemClassName(['menuItem', 'menuItem', 'menuItem'])
        } else {
            let activeMenuColor = ['menuItem', 'menuItem', 'menuItem']
            activeMenuColor[i] = 'menuItem activeMenuItem'
            setMenuItemClassName(activeMenuColor)
            setDropdownMenuName(item)
            setDropdownMenuOpen(true)
        }
    }

    const renderSubMenu = (item) => {
        if(item === 'Destinations'){
            return (
                <DestinationsDropMenu fullListData={fullListData}/>
            )
        } else if (item === 'Trip Styles'){
            return (
                <NoNestDropMenu fullListData={fullListData} itemTitle={item}/>
            )
        } else if (item === 'Climates'){
            return (
                <NoNestDropMenu fullListData={fullListData} itemTitle={item}/>
            )
        }
    }
    
    const renderMenu = titleListData.map((item, i) => {
        if(item.name !== "Popular" && item.name !== "Tips & Tricks" ){
            return (
                windowSize < 1024 ? 
                <div className={menuItemClassName[i]} key={i}>
                    <p onClick={() => clickOpenCloseMenu(item.name, i)}>{item.name}<FontAwesomeIcon icon={faCaretDown}/></p>
                    {dropdownMenuOpen && dropdownMenuName === item.name ? renderSubMenu(item.name) : null}
                </div> : 
                <div className="menuItem">
                    <p>{item.name}<FontAwesomeIcon icon={faCaretDown}/></p>
                    {renderSubMenu(item.name)}
                </div>
            )
        } else {
            return (
                <div className="menuItem" key={i}>
                    <p onClick={() => navigate(fullListData[item.name].url)}>{item.name}</p>
                </div>
            )
        }
    })

    return(
        <>
            <div className="menuItems">
                {renderMenu}
            </div>
        </>
    )
}

export default DesktopNavBar;