import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {DestinationsDropMenu, NoNestDropMenu} from '../../layout'

const DesktopNavBar = ({titleListData, fullListData}) => {
    let navigate = useNavigate();
    const [windowSize, setWindowSize] = useState(window.innerWidth)
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
    const renderMenu = titleListData.map(item => {
        if(item.name !== "Popular" && item.name !== "Tips & Tricks" ){
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
        } else {
            return (
                <div className="menuItem">
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