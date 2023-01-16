import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
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
    // const [openList, setOpenList] = useState([]);
    const changeSecondNavBarVisibility = (name) => {
        if(secondNavBarDisplay === 'hidden'){
            setListData(fullListData[name])
            console.log(listData)
            setSecondNavBarDisplay('showing')
        } else {
            setSecondNavBarDisplay('hidden')
            setListData([])
            console.log(listData)
        }
    }

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
                          "name": "United Kingdom",
                          "url": "/unitedkingdom"
                        },
                        {
                          "name": "France",
                          "url": "/france"
                        }
                      ],
                      "openState": false
                },
                {
                  "name": "Africa",
                  "children": [
                    {
                      "name": "Explore Africa",
                      "url": "/africa"
                    }],
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
                  "name": "Relaxing",
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