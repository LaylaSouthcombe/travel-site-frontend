import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {NavBar, BottomMenu} from '../../layout'
import leftHeroImage from '../../images/leftHeroImage.png'
import rightHeroImage from '../../images/rightHeroImage.png'
import adventure from '../../images/adventure.png'
import art from '../../images/art.png'
import budget from '../../images/budget.png'
import city from '../../images/city.png'
import food from '../../images/food.png'
import nature from '../../images/nature.png'
import picturesque from '../../images/picturesque.png'
import relaxing from '../../images/relaxing.png'


import {ArticleGridStyle1, ArticleGridStyle2, GoogleAd} from '../../components'


const Home = () => {

    return(
        <>
            <NavBar/>
            <div className="heroSection">
                <div className="heroSection1">
                    <h2>Sojo travels</h2>
                    <h4>Find your next adventure here!</h4>
                    <div className="heroImage heroImage1"><img src={leftHeroImage} alt=""/></div>
                </div>
                <div className="heroImage heroImage2"><img src={rightHeroImage} alt=""/></div>
            </div>
            <div>
                <h2 className="seperatorTitle">Trending Articles</h2>
            </div>
            <ArticleGridStyle1/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">City Breaks</h2>
            </div>
            <ArticleGridStyle2/>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Popular Destinations</h2>
            </div>
            <div className="popularDestinationsSection">
                <div>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Europe</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <table className="destinationsTable">
                            <tbody>
                                <tr>
                                    <td>United Kingdom</td>
                                    <td>France</td>
                                </tr>
                                <tr>
                                    <td>Italy</td>
                                    <td>Germany</td>
                                </tr>
                                <tr>
                                    <td>Spain</td>
                                    <td>Greece</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><button className="generalButton">Explore Europe</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Asia</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <table className="destinationsTable">
                            <tbody>
                                <tr>
                                    <td>China</td>
                                    <td>Vietnam</td>
                                </tr>
                                <tr>
                                    <td>Cambodia</td>
                                    <td>Japan</td>
                                </tr>
                                <tr>
                                    <td>Thailand</td>
                                    <td>Philippines</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><button className="generalButton">Explore Asia</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Africa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <table className="destinationsTable">
                            <tbody>
                                <tr>
                                    <td>Zimbabwe</td>
                                    <td>South Africa</td>
                                </tr>
                                <tr>
                                    <td>Kenya</td>
                                    <td>Uganda</td>
                                </tr>
                                <tr>
                                    <td>Morocco</td>
                                    <td>Egypt</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><button className="generalButton">Explore Africa</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>North America</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <table className="destinationsTable">
                                <tbody>
                                    <tr>
                                        <td>USA</td>
                                        <td>Mexico</td>
                                    </tr>
                                    <tr>
                                        <td>Bahamas</td>
                                        <td>Canada</td>
                                    </tr>
                                    <tr>
                                        <td>Costa Rica</td>
                                        <td>Jamaica</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><button className="generalButton">Explore North America</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>South America</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <table className="destinationsTable">
                                <tbody>
                                    <tr>
                                        <td>Colombia</td>
                                        <td>Brazil</td>
                                    </tr>
                                    <tr>
                                        <td>Argentina</td>
                                        <td>Peru</td>
                                    </tr>
                                    <tr>
                                        <td>Chile</td>
                                        <td>Venezuela</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><button className="generalButton">Explore South America</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Australia/Oceania</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <table className="destinationsTable">
                                <tbody>
                                    <tr>
                                        <td>Australia</td>
                                        <td>Fiji</td>
                                    </tr>
                                    <tr>
                                        <td>New Zealand</td>
                                        <td>Samoa</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><button className="generalButton">Explore Australia/Oceania</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <div>
                <h2 className="seperatorTitle">Explore Trip Styles</h2>
            </div>
            <div className="tripStyles">
                <div>
                    <div>
                        <img src={relaxing} alt="Person on beach illustration" />
                    </div>
                     <p>Relaxing</p>
                </div>
                <div>
                    <div>
                        <img src={picturesque} alt="Camera with photographs illustration" />
                    </div>
                    <p>Picturesque</p>
                </div>
                <div>
                    <div>
                       <img src={nature} alt="Leafs and nature illustration" /> 
                    </div>
                    <p>Nature</p>
                </div>
                <div>
                    <div>
                       <img src={food} alt="Couple eating dinner outside illustration" /> 
                    </div>
                    <p>Food</p>
                </div>
                <div>
                    <div>
                       <img src={city} alt="Cityscape illustration" /> 
                    </div>
                    <p>City Break</p>
                </div>
                <div>
                    <div>
                       <img src={budget} alt="Piggy bank illustration" /> 
                    </div>
                    <p>Budget Friendly</p>
                </div>
                <div>
                    <div>
                        <img src={art} alt="Person standing infront of art frame illustration" />
                    </div>
                    <p>Art & Culture</p>
                </div>
                <div>
                    <div>
                      <img src={adventure} alt="Woman standing by mountains illustration" />  
                    </div>
                    <p>Adventure</p>
                </div>
            </div>
            <GoogleAd dataAdSlot={"1136657549"}/>
            <BottomMenu/>
        </>
    )
}

export default Home;