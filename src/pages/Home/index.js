import React, {useState} from 'react'
import { NavBar } from '../../layout'
const About = () => {
    const [bodyBlur, setBodyBlur] = useState("none")
  const [zIndex, setzIndex] = useState("0")
    return(
        <NavBar setBodyBlur={setBodyBlur} setzIndex={setzIndex}/>
    )
}

export default About;