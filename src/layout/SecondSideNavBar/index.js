import React, {useState, useEffect} from 'react'
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

const SecondSideNavBar = ({listData, setListData, selectedListTitle, setSelectedListTitle, secondNavBarDisplay}) => {
    let navigate = useNavigate();
    //Have two side navs
    //populate with first set of labels
    //when click on destinations for example, the next side nav comes in from the left populated with destinations data
    //back button moves the second nav back to the right
    // setSelectedListTitle(selectedListTitle)
    // const [open, setOpen] = useState(false);
    // const [listData, setListData] = useState([]);
    const [openList, setOpenList] = useState([]);

    console.log(selectedListTitle)
    console.log(secondNavBarDisplay)
    const handleWithChildClick = (i) => {
        setOpenList([])
        for(let j=0;j<listData.length; j++){
            if(j!==i){
              listData[j].openState = false  
            }
        }
        listData[i].openState = !listData[i].openState
        setListData(listData)
  };
  console.log(selectedListTitle)
// useEffect(() => {
// if(selectedListTitle === 'Destination'){
//     setListData([
//         {
//             "name": "Europe",
//             "icon": "SendIcon",
//             "children": [
//                 {
//                   "name": "Explore Europe",
//                   "url": "/europe"
//                 },
//                 {
//                   "name": "United Kingdom",
//                   "url": "/unitedkingdom"
//                 },
//                 {
//                   "name": "France",
//                   "url": "/france"
//                 }
//               ],
//               "openState": false
//         },
//         {
//           "name": "Africa",
//           "children": [
//             {
//               "name": "Explore Africa",
//               "url": "/africa"
//             }],
//             "openState": false
//         }
//     ])
// } else if(selectedListTitle === 'Trip Style'){
//     setListData([
//         {
//             "name": "Adventure",
//             "icon": "SendIcon",
//             "url": "/adventure"
//         },
//         {
//           "name": "Relaxing",
//           "icon": "SendIcon",
//           "url": "/relaxing"
//         }
//     ])
// }
    
// }, [selectedListTitle])
console.log(listData)
const renderedMenuItems = listData.map((heading,i )=> {
    
    return (
            <div className="sideNavMenuMainItem" key={"sideNavMenuMainItem"+i}>
                {selectedListTitle === 'Destinations' ? 
                <>
                <ListItemButton onClick={() => handleWithChildClick(i)}>
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
                            })
                        }
                    </List>
                </Collapse> 
                </>
                : <>
                <ListItemButton onClick={() => navigate(heading.url)}>
                    <ListItemText primary={heading.name} />
                </ListItemButton>
                </> }
            </div>
        )
    }
)
    return (
        <div className={"secondNavBar " + secondNavBarDisplay}>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                {selectedListTitle}
                </ListSubheader>
                }>
                {renderedMenuItems}
            </List>
        </div>
    )
}

export default SecondSideNavBar;