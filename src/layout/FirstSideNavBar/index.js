import React from 'react'
import List from '@mui/material/List';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const FirstSideNavBar = ({fullListData, listData, setListData, titleListData, setSelectedListTitle, openCloseSideMenu, getAndSetSearchQuery, firstNavClassName, setFirstNavClassName, secondNavClassName, setSecondNavClassName}) => {
    let navigate = useNavigate();

    const openSecondNavBar = (name) => {
        setSecondNavClassName("secondNavBar")
        setListData(fullListData[name])
    }

    const handleNestedItemClick = (name) => {
        setSelectedListTitle(name)
        openSecondNavBar(name)
    };

    const handleNonNestedItemClick = (url) => {
        openCloseSideMenu()
        navigate(url)
    };
  
    const renderedMenuItems = titleListData.map((item,i ) => {
        return (
            <>
                <div className="sideNavMenuMainItem" key={"sideNavMenuMainItem"+i}>
                    {item.name !== "Popular" && item.name !== "Trip Planning" ? 
                    <ListItemButton onClick={() => handleNestedItemClick(item.name)}>
                        <FontAwesomeIcon icon={item.icon} />
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                    : <ListItemButton onClick={() => handleNonNestedItemClick(item.url)}>
                        <FontAwesomeIcon icon={item.icon} />
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                }
                </div>
                <div className="sideMenuDivider"></div>
            </>
            )
        }
    )
    const theme = createTheme({
        palette: {
          secondary: {
            main: '#3F3D56',
          },
        },
        borderColor: 'yellow'
    });

    const closeFirstSideMenu = () => {
        setFirstNavClassName("firstNavBar hiddenNavBar")
        openCloseSideMenu()
    }

    return (
        <div className={firstNavClassName}>
            <div className="closeSideMenu" onClick={() => closeFirstSideMenu()}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="navSearchIconSideNav">
                <ThemeProvider theme={theme}>
                        <TextField id="outlined-basic" label="Search" variant="outlined" color="secondary" onKeyUp={(e) => getAndSetSearchQuery(e, "input")}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={(e) => getAndSetSearchQuery(e, "icon")}/>
                </ThemeProvider>
            </div>
            <Box>
                <List
                    sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                    component="nav"
                    aria-labelledby="nested-list-subheader">
                    {renderedMenuItems}
                </List>
            </Box>
        </div>
    )
}

export default FirstSideNavBar;