import React from 'react'
import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useNavigate } from 'react-router-dom';

const FirstSideNavBar = ({fullListData, listData, setListData, titleListData, setSelectedListTitle}) => {
    let navigate = useNavigate();
    
    const changeSecondNavBarVisibility = (name) => {
        if(listData.length){
            setListData([])
        } else {
            setListData(fullListData[name])
        }
    }

    const handleClick = (name) => {
        setSelectedListTitle(name)
        changeSecondNavBarVisibility(name)
    };
  
    const renderedMenuItems = titleListData.map((item,i ) => {
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
        <div id="firstSideNavMenu">
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader">
                {renderedMenuItems}
            </List>
        </div>
    )
}

export default FirstSideNavBar;