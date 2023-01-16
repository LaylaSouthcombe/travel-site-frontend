import React, {useState} from 'react'
import { FirstSideNavBar, SecondSideNavBar } from '../../layout'
const About = () => {
    const [selectedListTitle, setSelectedListTitle] = useState();
    const [secondNavBarDisplay, setSecondNavBarDisplay] = useState('hidden')
    const [listData, setListData] = useState([])
    
    return(
        <>
            <FirstSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} setSelectedListTitle={setSelectedListTitle} secondNavBarDisplay={secondNavBarDisplay} setSecondNavBarDisplay={setSecondNavBarDisplay}/>
            {listData.length ? <SecondSideNavBar listData={listData} setListData={setListData} selectedListTitle={selectedListTitle} setSelectedListTitle={setSelectedListTitle} secondNavBarDisplay={secondNavBarDisplay} setSecondNavBarDisplay={setSecondNavBarDisplay}/> : null}
        </>
    )
}

export default About;