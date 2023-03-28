import React, { useState } from 'react'
import List from '@mui/material/List';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import TextField from '@mui/material/TextField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const FirstSideNavBar = ({fullListData, listData, setListData, titleListData, setSelectedListTitle, openCloseSideMenu, getAndSetSearchQuery, secondNavClassName, setSecondNavClassName}) => {
    let navigate = useNavigate();

    const changeSecondNavBarVisibility = (name) => {
        setSecondNavClassName("secondNavBar")
        setListData(fullListData[name])
    }

    const handleClick = (name) => {
        setSelectedListTitle(name)
        changeSecondNavBarVisibility(name)
    };
  
    const renderedMenuItems = titleListData.map((item,i ) => {
        return (
                <div className="sideNavMenuMainItem" key={"sideNavMenuMainItem"+i}>
                    {item.name !== "Popular" && item.name !== "Trip Planning" ? 
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
    const theme = createTheme({
        palette: {
          secondary: {
            main: '#3F3D56',
          },
        },
    });

    return (
        <div id="firstSideNavMenu">
            <div className="closeSideMenu" onClick={() => openCloseSideMenu()}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="navSearchIconSideNav">
                <ThemeProvider theme={theme}>
                        <TextField id="outlined-basic" label="Search" variant="outlined" color="secondary" onKeyUp={(e) => getAndSetSearchQuery(e, "input")}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={(e) => getAndSetSearchQuery(e, "icon")}/>
                </ThemeProvider>
            </div>
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