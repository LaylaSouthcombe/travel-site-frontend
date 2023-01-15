import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'



const SecondSideNavBar = ({listTitle}) => {
    let navigate = useNavigate();
    //Have two side navs
    //populate with first set of labels
    //when click on destinations for example, the next side nav comes in from the left populated with destinations data
    //back button moves the second nav back to the right

    // const [open, setOpen] = useState(false);
    const [listData, setListData] = useState([]);
    const [openList, setOpenList] = useState([]);

    const handleClick = (i) => {
        setOpenList([])
        for(let j=0;j<listData.length; j++){
            if(j!==i){
              listData[j].openState = false  
            }
        }
        listData[i].openState = !listData[i].openState
        setListData(listData)
  };
useEffect(() => {
if(listTitle === 'Destination'){
    setListData([
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
        //   "icon": faEarthAmericas
        }
    ])
    // setOpenList(listData.map(x => false))
}
// console.log(openList)
    
}, [listTitle])

const renderedMenuItems = listData.map((heading,i )=> {
    return (
            <div className="sideNavMenuMainItem" key={"sideNavMenuMainItem"+i}>
                <ListItemButton onClick={() => handleClick(i)}>
        {/* <ListItemIcon>
            <InboxIcon />
        </ListItemIcon> */}
        {/* <FontAwesomeIcon icon={heading.icon} /> */}
        {console.log(listData[i].openState)}
                <ListItemText primary={heading.name} />
                    {listData[i].openState ? <ExpandLess /> : <ExpandMore /> }
                </ListItemButton>
                <Collapse in={listData[i].openState} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {heading.children.map((child, j) => {
                            return(
                                <div className="sideNavMenuChildItem" key={"sideNavMenuChildItem"+i+j}>
                                    <ListItemButton sx={{ pl: 4 }} onClick={() => navigate(child.url)}>
                                <ListItemText primary={child.name} />
                                </ListItemButton>
                                </div>
                                
                            )
                        })}
                    </List>
                </Collapse>
            </div>
        )
    }
)
    return (
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                {listTitle}
                </ListSubheader>
                }
            >
                {renderedMenuItems}
            </List>
    )
}

export default SecondSideNavBar;