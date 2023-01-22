import React, {useState, useRef} from 'react'
import { FirstSideNavBar, SecondSideNavBar, DesktopNavBar } from '../'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({country}) => {
    const [selectedListTitle, setSelectedListTitle] = useState();
    const [secondNavBarDisplay, setSecondNavBarDisplay] = useState('hidden')
    const [listData, setListData] = useState([])
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const [menuIcon, setMenuIcon] = useState(faBars)
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const fullListData = {
        "Destinations": [
                {
                    "name": "Europe",
                    "icon": "SendIcon",
                    "children": [
                        {
                          "name": "Explore more in Europe",
                          "url": "/europe"
                        },
                        {
                          "name": "Bulgaria",
                          "url": "/bulgaria"
                        },
                        {
                          "name": "Denmark",
                          "url": "/denmark"
                        },
                        {
                          "name": "France",
                          "url": "/france"
                        },
                        {
                          "name": "Germany",
                          "url": "/germany"
                        },
                        {
                          "name": "Greece",
                          "url": "/greece"
                        },
                        {
                          "name": "Spain",
                          "url": "/spain"
                        },
                        {
                          "name": "United Kingdom",
                          "url": "/unitedkingdom"
                        }
                      ],
                      "openState": false
                },
                {
                  "name": "Africa",
                  "children": [
                    {
                      "name": "Explore more in Africa",
                      "url": "/africa"
                    },
                    {
                        "name": "Botswana",
                        "url": "/botswana"
                    },
                    {
                        "name": "Egypt",
                        "url": "/egypt"
                    }
                ],
                    "openState": false
                },
                {
                    "name": "Asia",
                    "children": [
                      {
                        "name": "Explore more in Asia",
                        "url": "/asia"
                      },
                      {
                          "name": "Botswana",
                          "url": "/botswana"
                      },
                      {
                          "name": "Egypt",
                          "url": "/egypt"
                      }
                  ],
                      "openState": false
                  },
                  {
                    "name": "Oceania",
                    "children": [
                      {
                        "name": "Explore more in Africa",
                        "url": "/africa"
                      },
                      {
                          "name": "Botswana",
                          "url": "/botswana"
                      },
                      {
                          "name": "Egypt",
                          "url": "/egypt"
                      }
                  ],
                      "openState": false
                  },
                  {
                    "name": "North America",
                    "children": [
                      {
                        "name": "Explore more in Africa",
                        "url": "/africa"
                      },
                      {
                          "name": "Botswana",
                          "url": "/botswana"
                      },
                      {
                          "name": "Egypt",
                          "url": "/egypt"
                      }
                  ],
                      "openState": false
                  },
                  {
                    "name": "Central America",
                    "children": [
                      {
                        "name": "Explore more in Africa",
                        "url": "/africa"
                      },
                      {
                          "name": "Botswana",
                          "url": "/botswana"
                      },
                      {
                          "name": "Egypt",
                          "url": "/egypt"
                      }
                  ],
                      "openState": false
                  },
                  {
                    "name": "South America",
                    "children": [
                      {
                        "name": "Explore more in Africa",
                        "url": "/africa"
                      },
                      {
                          "name": "Botswana",
                          "url": "/botswana"
                      },
                      {
                          "name": "Egypt",
                          "url": "/egypt"
                      }
                  ],
                      "openState": false
                  }
            ],
            "Trip Styles": [
                {
                    "name": "Adventure",
                    "icon": "SendIcon",
                    "url": "/adventure"
                },
                {
                  "name": "Relaxation",
                  "icon": "SendIcon",
                  "url": "/relaxing"
                }
            ],
            "Climates": [
                {
                    "name": "Countryside",
                    "icon": "SendIcon",
                    "url": "/countryside"
                },
                {
                  "name": "Desert",
                  "icon": "SendIcon",
                  "url": "/desert"
                }
            ]
    }
    const titleListData = [
      {
          "name": "Destinations",
          "icon": faEarthAmericas
      },
      {
          "name": "Trip Styles",
          "icon": faUmbrellaBeach
      },
      {
          "name": "Climates",
          "icon": faSnowflake
      },
      {
          "name": "Popular",
          "icon": faArrowTrendUp,
          "url": "/popular"
      },
      {
          "name": "Tips & Tricks",
          "icon": faLightbulb,
          "url": "/tips-and-tricks"
      }
  ]
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
            {windowSize < 680 ?
             <div className="mainMobileNavBar">
                {country !== undefined ? <div>{country}</div>: null}  
                <div><p>Travel</p></div>
                <div className="sideMenuButton" onClick={(e) => openCloseSideMenu()}>
                    <FontAwesomeIcon icon={menuIcon} />
                </div>
                {sideMenuOpen ? <div>
                    <FirstSideNavBar titleListData={titleListData} fullListData={fullListData} listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} setSelectedListTitle={setSelectedListTitle} secondNavBarDisplay={secondNavBarDisplay} setSecondNavBarDisplay={setSecondNavBarDisplay}/>
                    {listData.length ? <SecondSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} setSelectedListTitle={setSelectedListTitle} secondNavBarDisplay={secondNavBarDisplay} setSecondNavBarDisplay={setSecondNavBarDisplay}/> : null}
                </div> 
                : null}
                <div>Search</div>
            </div> : 
            <>
                <div className="mainDesktopNavBar">
                    {country !== undefined ? <div>{country}</div>: null}     
                </div>
                <div><p>Travel</p></div>
                <div>Search</div>
                <DesktopNavBar titleListData={titleListData} fullListData={fullListData}/>
            </>
            }
            
            
        </>
    )
}

export default NavBar;