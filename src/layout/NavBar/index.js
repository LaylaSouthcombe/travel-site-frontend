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
            {windowSize < 768 ?
             <div className="mainMobileNavBar">
                {country !== undefined ? <div>{country}</div>: null}  
                <div><p>Travel</p></div>
                <div className="sideMenuButton" onClick={(e) => openCloseSideMenu()}>
                    <FontAwesomeIcon icon={menuIcon} />
                </div>
                {sideMenuOpen ? 
                  <div>
                    {!listData.length ? <FirstSideNavBar fullListData={fullListData} listData={listData}setListData={setListData} titleListData={titleListData}    setSelectedListTitle={setSelectedListTitle}/> : null}
                    {listData.length ?
                      <SecondSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle}/> 
                    : null}
                  </div> 
                : null}
                {!sideMenuOpen ? <div>Search</div> : null}
                
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