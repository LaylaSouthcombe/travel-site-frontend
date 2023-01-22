import React, {useState} from 'react'
import {DestinationsDropMenu} from '../../layout'

const DesktopNavBar = ({titleListData, fullListData}) => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)
    // const [subMenuItems, setSubMenuItems] = useState()
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)
    const [dropdownMenuName, setDropdownMenuName] = useState('Destinations')
    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    const clickOpenCloseMenu = (e, item) => {
        let currentOpenState = dropdownMenuOpen
        if(dropdownMenuName !== item){
            currentOpenState = false
            setDropdownMenuName(item)
        }
        if(currentOpenState){
            setDropdownMenuOpen(false)
        } else {
            setDropdownMenuName(item)
            setDropdownMenuOpen(true)
        }
    }

    const renderSubMenu = (item) => {
        // if(item === 'Destinations'){
            return (
                <DestinationsDropMenu fullListData={fullListData}/>
            )
        // }
    }
    const renderMenu = titleListData.map(item => {
        return (
            windowSize < 1024 ? 
            <div className="menuItem" >
                <p onClick={(e) => clickOpenCloseMenu(e, item.name)}>{item.name}</p>
                {dropdownMenuOpen && dropdownMenuName === item.name ? renderSubMenu(item.name) : null}
            </div> : 
            <div className="menuItem">
                <p>{item.name}</p>
                {renderSubMenu(item.name)}
            </div>
        )
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