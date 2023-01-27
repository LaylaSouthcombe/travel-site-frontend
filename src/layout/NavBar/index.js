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
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)

    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const fullListData = {
        "Destinations": [
                {
                    "name": "Europe",
                    "icon": "SendIcon",
                    "children": [
                        {
                          "name": "Explore Europe",
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
                },{
                    "name": "Asia",
                    "children": [
                      {
                        "name": "Explore Asia",
                        "url": "/asia"
                      },
                      {
                          "name": "China",
                          "url": "/china"
                      },
                      {
                          "name": "Cambodia",
                          "url": "/cambodia"
                      },
                      {
                          "name": "Thailand",
                          "url": "/thailand"
                      },
                      {
                          "name": "Vietnam",
                          "url": "/vietnam"
                      }
                  ]
                  },
                {
                  "name": "Africa",
                  "children": [
                    {
                      "name": "Explore Africa",
                      "url": "/africa"
                    },
                    {
                        "name": "Zimbabwe",
                        "url": "/zimbabwe"
                    },
                    {
                        "name": "Kenya",
                        "url": "/kenya"
                    },
                    {
                        "name": "Morocco",
                        "url": "/morocco"
                    },
                    {
                        "name": "Uganda",
                        "url": "/uganda"
                    }
                ]
                },
                  
                  {
                    "name": "North America",
                    "children": [
                      {
                        "name": "Explore Africa",
                        "url": "/africa"
                      },
                      {
                          "name": "USA",
                          "url": "/usa"
                      },
                      {
                          "name": "Bahamas",
                          "url": "/bahamas"
                      },
                      {
                          "name": "Costa Rica",
                          "url": "/costarica"
                      }
                  ]
                  },
                  {
                    "name": "South America",
                    "children": [
                      {
                        "name": "Explore Africa",
                        "url": "/africa"
                      },
                      {
                          "name": "Colombia",
                          "url": "/colombia"
                      },
                      {
                          "name": "Argentina",
                          "url": "/argentina"
                      },
                      {
                          "name": "Chile",
                          "url": "/chile"
                      }
                  ]
                  },{
                    "name": "Australia/ Oceania",
                    "children": [
                      {
                        "name": "Explore Africa",
                        "url": "/africa"
                      },
                      {
                          "name": "Australia",
                          "url": "/australia"
                      },
                      {
                          "name": "New Zealand",
                          "url": "/newzealand"
                      },
                      {
                          "name": "Fiji",
                          "url": "/fiji"
                      }
                  ]
                  },
            ],
            "Trip Styles": [
                {
                  "name": "Relaxation",
                  "icon": faSnowflake,
                  "url": "/relaxing"
                },
                {
                    "name": "Picturesque",
                    "icon": faSnowflake,
                    "url": "/picturesque"
                },
                {
                    "name": "Nature",
                    "icon": faSnowflake,
                    "url": "/nature"
                },
                {
                    "name": "Food",
                    "icon": faSnowflake,
                    "url": "/food"
                },
                {
                    "name": "City Break",
                    "icon": faSnowflake,
                    "url": "/city-break"
                },
                {
                    "name": "Budget Friendly",
                    "icon": faSnowflake,
                    "url": "/budget-friendly"
                },
                {
                    "name": "Art & Culture",
                    "icon": faSnowflake,
                    "url": "/art-culture"
                },
                {
                    "name": "Adventure",
                    "icon": faSnowflake,
                    "url": "/adventure"
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
        {windowSize < 440 ?
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
                  <DesktopNavBar titleListData={titleListData} fullListData={fullListData} dropdownMenuOpen={dropdownMenuOpen} setDropdownMenuOpen={setDropdownMenuOpen}/>
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