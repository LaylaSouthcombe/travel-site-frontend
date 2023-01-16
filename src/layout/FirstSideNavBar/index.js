import React from 'react'
import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const FirstSideNavBar = ({listData, setListData, selectedListTitle, setSelectedListTitle, secondNavBarDisplay, setSecondNavBarDisplay}) => {
    let navigate = useNavigate();
    const titleListData = [
        {
            "name": "Destinations",
            "icon": faEarthAmericas
        },
        {
            "name": "Trip Styles",
            "icon": faEarthAmericas
        },
        {
            "name": "Climates",
            "icon": faEarthAmericas
        },
        {
            "name": "Popular",
            "icon": faEarthAmericas,
            "url": "/popular"
        },
        {
            "name": "Tips & Tricks",
            "icon": faEarthAmericas,
            "url": "/tips-and-tricks"
        }
    ]
    const changeSecondNavBarVisibility = (name) => {
        if(secondNavBarDisplay === 'hidden'){
            setListData(fullListData[name])
            setSecondNavBarDisplay('showing')
        } else {
            setSecondNavBarDisplay('hidden')
            setListData([])
        }
    }

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

    const handleClick = (name) => {
        setSelectedListTitle(name)
        changeSecondNavBarVisibility(name)
    };
  


const renderedMenuItems = titleListData.map((item,i )=> {
    return (
            <div className="sideNavMenuMainItem" key={"sideNavMenuMainItem"+i}>
                {item.name !== "Popular" && item.name !== "Tips & Tricks" ? 
                <ListItemButton onClick={() => handleClick(item.name)}>
                    <FontAwesomeIcon icon={item.icon} />
                    <ListItemText primary={item.name} />
                </ListItemButton>
                : <ListItemButton onClick={() => navigate(item.url)}>
                    <FontAwesomeIcon icon={item.icon} />
                    <ListItemText primary={item.name} />
                </ListItemButton>
            }
            </div>
        )
    }
)
    return (
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader">
                {renderedMenuItems}
            </List>
    )
}

export default FirstSideNavBar;