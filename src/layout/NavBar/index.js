import React, {useState, useRef} from 'react'
import { FirstSideNavBar, SecondSideNavBar } from '../'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    const [selectedListTitle, setSelectedListTitle] = useState();
    const [secondNavBarDisplay, setSecondNavBarDisplay] = useState('hidden')
    const [listData, setListData] = useState([])
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const [menuIcon, setMenuIcon] = useState(faBars)
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowSize(window.innerWidth)
        if(window.innerWidth > 680){
            setSideMenuOpen(false)
            setMenuIcon(faBars)
        }
    }
    window.addEventListener('resize', handleResize)
    const openCloseSideMenu = () => {
        if(sideMenuOpen){
            setSideMenuOpen(false)
            setMenuIcon(faBars)
        } else if(!sideMenuOpen){
            setSideMenuOpen(true)
            setMenuIcon(faXmark)
        }
    }

    return(
        <>
            {windowSize < 680 ? <>
                <div className="sideMenuButton" onClick={(e) => openCloseSideMenu()}>
                    <FontAwesomeIcon icon={menuIcon} />
                </div>
                {sideMenuOpen ? <div>
                    <FirstSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} setSelectedListTitle={setSelectedListTitle} secondNavBarDisplay={secondNavBarDisplay} setSecondNavBarDisplay={setSecondNavBarDisplay}/>
                    {listData.length ? <SecondSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} setSelectedListTitle={setSelectedListTitle} secondNavBarDisplay={secondNavBarDisplay} setSecondNavBarDisplay={setSecondNavBarDisplay}/> : null}
                </div> : null}
            </> : null}
            
            
        </>
    )
}

export default NavBar;