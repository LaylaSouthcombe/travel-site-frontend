import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { FirstSideNavBar, SecondSideNavBar, DesktopNavBar } from '../'
import logo from '../../images/logo.png'

const NavBar = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [selectedListTitle, setSelectedListTitle] = useState();
    const [listData, setListData] = useState([])
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)
    const [firstNavClassName, setFirstNavClassName] = useState("firstNavBar")
    const [secondNavClassName, setSecondNavClassName] = useState("secondNavBar")

    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const fullListData = {
        "Destinations": [
                // {
                //     "name": "Europe",
                //     "icon": "SendIcon",
                //     "children": [
                        {
                          "name": "Explore Europe",
                          "url": "/europe"
                        },
                        {
                          "name": "Denmark",
                          "url": "/europe/denmark",
                          "cities": [
                            {
                              "name": "Copenhagen",
                              "url": "/europe/denmark/copenhagen"
                            },
                            {
                              "name": "Aarhus",
                              "url": "/europe/denmark/aarhus"
                            }
                          ]
                        },
                        {
                          "name": "France",
                          "url": "/europe/france",
                          "cities": [
                            {
                              "name": "Paris",
                              "url": "/europe/france/paris"
                            },
                            {
                              "name": "Lille",
                              "url": "/europe/france/lille"
                            }
                          ]
                        },
                        {
                          "name": "Germany",
                          "url": "/europe/germany",
                          "cities": [
                            {
                              "name": "Berlin",
                              "url": "/europe/germany/berlin"
                            },
                            {
                              "name": "Hamburg",
                              "url": "/europe/germany/hamburg"
                            }
                          ]
                        },
                        {
                          "name": "Greece",
                          "url": "/europe/greece",
                          "cities": [
                            {
                              "name": "Athens",
                              "url": "/europe/greece/athens"
                            },
                            {
                              "name": "Corfu",
                              "url": "/europe/greece/corfu"
                            }
                          ]
                        },
                        {
                          "name": "Spain",
                          "url": "/europe/spain",
                          "cities": [
                            {
                              "name": "Madrid",
                              "url": "/europe/spain/madrid"
                            },
                            {
                              "name": "Barcelona",
                              "url": "/europe/spain/barcelona"
                            }
                          ]
                        },
                        {
                          "name": "United Kingdom",
                          "url": "/europe/unitedkingdom",
                          "cities": [
                            {
                              "name": "London",
                              "url": "/europe/unitedkingdom/london"
                            },
                            {
                              "name": "Edinburgh",
                              "url": "/europe/unitedkingdom/edinburgh"
                            }
                          ]
                        }
                      // ]
                // }
                // {
                //     "name": "Asia",
                //     "children": [
                //       {
                //         "name": "Explore Asia",
                //         "url": "/asia"
                //       },
                //       {
                //           "name": "China",
                //           "url": "/china"
                //       },
                //       {
                //           "name": "Cambodia",
                //           "url": "/cambodia"
                //       },
                //       {
                //           "name": "Thailand",
                //           "url": "/thailand"
                //       },
                //       {
                //           "name": "Vietnam",
                //           "url": "/vietnam"
                //       }
                //   ]
                //   },
                // {
                //   "name": "Africa",
                //   "children": [
                //     {
                //       "name": "Explore Africa",
                //       "url": "/africa"
                //     },
                //     {
                //         "name": "Zimbabwe",
                //         "url": "/zimbabwe"
                //     },
                //     {
                //         "name": "Kenya",
                //         "url": "/kenya"
                //     },
                //     {
                //         "name": "Morocco",
                //         "url": "/morocco"
                //     },
                //     {
                //         "name": "Uganda",
                //         "url": "/uganda"
                //     }
                // ]
                // },             
                  // {
                  //   "name": "North America",
                  //   "children": [
                  //     {
                  //       "name": "Explore North America",
                  //       "url": "/africa"
                  //     },
                  //     {
                  //         "name": "USA",
                  //         "url": "/usa"
                  //     },
                  //     {
                  //         "name": "Bahamas",
                  //         "url": "/bahamas"
                  //     },
                  //     {
                  //         "name": "Costa Rica",
                  //         "url": "/costarica"
                  //     }
                  // ]
                  // },
                  // {
                  //   "name": "South America",
                  //   "children": [
                  //     {
                  //       "name": "Explore South America",
                  //       "url": "/africa"
                  //     },
                  //     {
                  //         "name": "Colombia",
                  //         "url": "/colombia"
                  //     },
                  //     {
                  //         "name": "Argentina",
                  //         "url": "/argentina"
                  //     },
                  //     {
                  //         "name": "Chile",
                  //         "url": "/chile"
                  //     }
                  // ]
                  // },
                  // {
                  //   "name": "Australia/Oceania",
                  //   "children": [
                  //     {
                  //       "name": "Explore Australia/Oceania",
                  //       "url": "/africa"
                  //     },
                  //     {
                  //         "name": "Australia",
                  //         "url": "/australia"
                  //     },
                  //     {
                  //         "name": "New Zealand",
                  //         "url": "/newzealand"
                  //     },
                  //     {
                  //         "name": "Fiji",
                  //         "url": "/fiji"
                  //     }
                  // ]
                  // },
            ],
            "Trip Styles": [
                {
                  "name": "Explore all",
                  "url": "/trip-styles",
                  "icon": undefined
                },
                {
                  "name": "City Break",
                  "icon": faCity,
                  "url": "/articles/category=city-break"
                },
                {
                    "name": "Luxury",
                    "icon": faGem,
                    "url": "/articles/category=luxury"
                },
                {
                    "name": "Nature",
                    "icon": faLeaf,
                    "url": "/articles/category=nature"
                },
                {
                    "name": "Food",
                    "icon": faUtensils,
                    "url": "/articles/category=food"
                },
                {
                  "name": "Relaxation",
                  "icon": faUmbrellaBeach,
                  "url": "/articles/category=relaxing"
                },
                {
                    "name": "Budget Friendly",
                    "icon": faSackDollar,
                    "url": "/articles/category=budget-friendly"
                },
                {
                    "name": "Art & Culture",
                    "icon": faPalette,
                    "url": "/articles/category=art-culture"
                },
                {
                    "name": "Adventure",
                    "icon": faPersonHiking,
                    "url": "/articles/category=adventure"
                }
            ],
            "Popular": {
              "icon": faArrowTrendUp,
              "url": "/articles/popular"
            },
          "Trip Planning": {
              "icon": faLightbulb,
              "url": "/trip-planning"
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
          "name": "Popular",
          "icon": faArrowTrendUp,
          "url": "/articles/popular"
      },
      {
          "name": "Trip Planning",
          "icon": faLightbulb,
          "url": "/trip-planning"
      }
  ]

    const handleResize = () => {
      setWindowSize(window.innerWidth)
        setWindowSize(window.innerWidth)
        if(window.innerWidth > 768){
            setSideMenuOpen(false)
        }
    }
    window.addEventListener('resize', handleResize)
    
    function wait(ms) {
      return new Promise(
          resolve => setTimeout(resolve, ms)
      );
    }

    const openCloseSideMenu = async () => {
      const body = document.querySelector('body')
      if(sideMenuOpen){
          body.classList.remove("fixedBody")
          setFirstNavClassName('firstNavBar hiddenNavBar')
          setSecondNavClassName('secondNavBar hiddenNavBar')
          await wait(300)
          setListData([])
          setSideMenuOpen(false)
      } else if(!sideMenuOpen){
          body.classList.add("fixedBody")
          setFirstNavClassName('firstNavBar')
          setSecondNavClassName('secondNavBar')
          setSideMenuOpen(true)
      }
    }

    const theme = createTheme({
      palette: {
        secondary: {
          main: '#3F3D56',
        },
      },
    });

    let oldScrollY = window.scrollY;
    const stickynavbar = () => {
      if(windowSize >= 768){
        const navbar = document.querySelector('.mainDesktopNavBarContainer');
        const menuBuffer = document.querySelector('.menuBuffer');
        let top = navbar.offsetTop;
        if(oldScrollY < window.scrollY){
          if (window.scrollY > top) {    
            navbar.classList.add('stickyNav');
            menuBuffer.classList.add('stickyBuffer');
          }
        } else {
          if (window.scrollY < top + 75) { 
            navbar.classList.remove('stickyNav');
            menuBuffer.classList.remove('stickyBuffer');
          }
        }
        oldScrollY = window.scrollY;
      }
    }
    window.addEventListener('scroll', stickynavbar);

    const getAndSetSearchQuery = (e, location) => {
      let inputArea = document.querySelector('.MuiInputBase-input')
      if(location === 'input' && inputArea.value !== ""){
        if(e.key === 'Enter'){
          dispatch({ type: "UPDATE_SEARCH_QUERY", payload: inputArea.value})
          inputArea.value = ""
          navigate('/search')
        }
      } else if(location === 'icon' && inputArea.value !== ""){
        dispatch({ type: "UPDATE_SEARCH_QUERY", payload: inputArea.value})
        inputArea.value = ""
        navigate('/search')
      }
    }

    return (
        <>
        {windowSize < 440 ?
            <>
              <div className="mainMobileNavBar">  
                  <div className="navLogo">
                    <a href="/">
                      <img src={logo} alt="sojo travels logo"/>
                    </a>
                  </div>
                  <div className="sideMenuButton" onClick={() => openCloseSideMenu()}>
                      <FontAwesomeIcon icon={faBars}/>
                  </div>
              </div> 
                  {sideMenuOpen ? 
                    <div>
                      {<FirstSideNavBar fullListData={fullListData} listData={listData} setListData={setListData} titleListData={titleListData} setSelectedListTitle={setSelectedListTitle} openCloseSideMenu={openCloseSideMenu} getAndSetSearchQuery={getAndSetSearchQuery} firstNavClassName={firstNavClassName} setFirstNavClassName ={setFirstNavClassName} secondNavClassName={secondNavClassName} setSecondNavClassName ={setSecondNavClassName}/>}
                      {listData.length ?
                        <SecondSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} openCloseSideMenu={openCloseSideMenu} firstNavClassName={firstNavClassName} setFirstNavClassName ={setFirstNavClassName} secondNavClassName={secondNavClassName} setSecondNavClassName ={setSecondNavClassName}/> 
                      : null}
                    </div> 
                  : null}
            </>
            : null}
            {windowSize < 768 && windowSize >= 440 ?
            <>
              <div className="mainMobileNavBar">
                  <div className="navLogo">
                    <a href="/">
                      <img src={logo} alt="sojo travels logo"/>
                    </a>
                  </div>
                  <div className="sideMenuButton" onClick={() => openCloseSideMenu()}>
                      <FontAwesomeIcon icon={faBars} />
                  </div>
              </div> 
                  {sideMenuOpen ? 
                    <div>
                      {<FirstSideNavBar fullListData={fullListData} listData={listData}setListData={setListData} titleListData={titleListData} setSelectedListTitle={setSelectedListTitle} windowSize={windowSize} openCloseSideMenu={openCloseSideMenu} getAndSetSearchQuery={getAndSetSearchQuery} firstNavClassName={firstNavClassName} setFirstNavClassName ={setFirstNavClassName} secondNavClassName={secondNavClassName} setSecondNavClassName ={setSecondNavClassName}/>}
                      {listData.length ?
                        <SecondSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} openCloseSideMenu={openCloseSideMenu} firstNavClassName={firstNavClassName} setFirstNavClassName ={setFirstNavClassName} secondNavClassName={secondNavClassName} setSecondNavClassName ={setSecondNavClassName}/> 
                      : null}
                    </div> 
                  : null}
            </>
            : null}
            {windowSize >= 768 ?
            <>
                  <div className="navLogo">
                    <a href="/">
                      <img src={logo} alt="sojo travels logo"/>
                    </a>
                  </div>
                  <div className="mainDesktopNavBarContainer">
                    <div className="mainDesktopNavBar"> 
                      <DesktopNavBar titleListData={titleListData} fullListData={fullListData} dropdownMenuOpen={dropdownMenuOpen} setDropdownMenuOpen={setDropdownMenuOpen}/>
                      <div className="navSearchIcon">
                        <ThemeProvider theme={theme}>
                            <TextField id="outlined-basic" label="Search" variant="outlined" color="secondary" onKeyUp={(e) => getAndSetSearchQuery(e, "input")}/>
                          </ThemeProvider>
                          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={(e) => getAndSetSearchQuery(e, "icon")}/>
                      </div>
                    </div>
                  </div>
                  <div className="menuBuffer"></div>
            </>
            : null }
        </>
    )
}

export default NavBar;