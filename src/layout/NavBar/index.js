import React, {useState} from 'react'
import { FirstSideNavBar, SecondSideNavBar, DesktopNavBar } from '../'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import logo from '../../images/logo.png'

const NavBar = ({country}) => {
    const [selectedListTitle, setSelectedListTitle] = useState();
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
                      ]
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
                ]
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
                  ]
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
                  ]
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
                  ]
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
                  ]
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
                  ]
                  }
            ],
            "Trip Styles": [
                {
                    "name": "Adventure",
                    "icon": faSnowflake,
                    "url": "/adventure"
                },
                {
                  "name": "Relaxation",
                  "icon": faSnowflake,
                  "url": "/relaxing"
                }
            ],
            "Climates": [
                {
                    "name": "Countryside",
                    "icon": faSnowflake,
                    "url": "/countryside"
                },
                {
                  "name": "Desert",
                  "icon": faSnowflake,
                  "url": "/desert"
                }
            ],
            "Popular": {
              "icon": faArrowTrendUp,
              "url": "/popular"
            },
          "Tips & Tricks": {
              "icon": faLightbulb,
              "url": "/tips-and-tricks"
          }
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
        if(window.innerWidth > 768){
            setSideMenuOpen(false)
            setMenuIcon(faBars)
        }
    }
    window.addEventListener('resize', handleResize)

    const openCloseSideMenu = () => {
        if(sideMenuOpen){
            setSideMenuOpen(false)
            setListData([])
            setMenuIcon(faBars)
        } else if(!sideMenuOpen){
            setSideMenuOpen(true)
            setMenuIcon(faXmark)
        }
    }

    return(
        <>
        {windowSize < 440?
            <>
              <div className="mainMobileNavBar">
                  {country !== undefined ? <div>{country}</div>: null}  
                  <div className="navLogo">
                    <img src={logo} alt="sojo travels logo"/>
                  </div>
                  <div className="sideMenuButton" onClick={() => openCloseSideMenu()}>
                      <FontAwesomeIcon icon={menuIcon} />
                  </div>
              </div> 
                  {sideMenuOpen ? 
                    <div>
                      {!listData.length ? <FirstSideNavBar fullListData={fullListData} listData={listData}setListData={setListData} titleListData={titleListData} setSelectedListTitle={setSelectedListTitle} windowSize={windowSize}/> : null}
                      {listData.length ?
                        <SecondSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle}/> 
                      : null}
                    </div> 
                  : null}
            </>
            : null}
            {windowSize < 768 && windowSize >= 440 ?
            <>
              <div className="mainMobileNavBar">
                  {country !== undefined ? <div>{country}</div>: null}  
                  <div className="navLogo">
                    <img src={logo} alt="sojo travels logo"/>
                  </div>
                  {!sideMenuOpen ? 
                    <div className="navSearchIcon">
                      <p>Search</p>
                      <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </div> 
                  : null}
                  <div className="sideMenuButton" onClick={() => openCloseSideMenu()}>
                      <FontAwesomeIcon icon={menuIcon} />
                  </div>
              </div> 
                  {sideMenuOpen ? 
                    <div>
                      {!listData.length ? <FirstSideNavBar fullListData={fullListData} listData={listData}setListData={setListData} titleListData={titleListData} setSelectedListTitle={setSelectedListTitle} windowSize={windowSize}/> : null}
                      {listData.length ?
                        <SecondSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle}/> 
                      : null}
                    </div> 
                  : null}
            </>
            : null}
            {windowSize >= 768 ?
            <>
                  <div className="navLogo">
                    <img src={logo} alt="sojo travels logo"/>
                  </div>
                <div className="mainDesktopNavBar">
                    {country !== undefined ? <div>{country}</div>: null}     
                  <DesktopNavBar titleListData={titleListData} fullListData={fullListData}/>
                  <div className="navSearchIcon">
                      <p>Search</p>
                      <FontAwesomeIcon icon={faMagnifyingGlass}/>
                  </div>
                </div>
            </>
            : null }
        </>
    )
}

export default NavBar;