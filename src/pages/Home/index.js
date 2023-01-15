import React, {useState} from 'react'
import { SecondSideNavBar } from '../../layout'
const About = () => {
    const [selectedListTitle, setSelectedListTitle] = useState('Destination');


    
    return(
        <SecondSideNavBar listTitle={selectedListTitle}/>
    )
}

export default About;