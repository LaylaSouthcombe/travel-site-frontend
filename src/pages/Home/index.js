import React, {useState} from 'react'
import { FirstSideNavBar, SecondSideNavBar } from '../../layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



const About = () => {
    const [selectedListTitle, setSelectedListTitle] = useState();
    const [secondNavBarDisplay, setSecondNavBarDisplay] = useState('hidden')
    const [listData, setListData] = useState([])
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const [menuIcon, setMenuIcon] = useState(faBars)

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
        <div className="sideMenuButton" onClick={(e) => openCloseSideMenu()}>
            <FontAwesomeIcon icon={menuIcon} />
        </div>
        {sideMenuOpen ? <div>
                <FirstSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} setSelectedListTitle={setSelectedListTitle} secondNavBarDisplay={secondNavBarDisplay} setSecondNavBarDisplay={setSecondNavBarDisplay}/>
                {listData.length ? <SecondSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} setSelectedListTitle={setSelectedListTitle} secondNavBarDisplay={secondNavBarDisplay} setSecondNavBarDisplay={setSecondNavBarDisplay}/> : null}
            </div> : null}
            
        </>
    )
}

export default About;