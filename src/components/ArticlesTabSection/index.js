import React from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import './style.css'
import {ArticleTabCards} from '../index'

const ArticlesTabSection = ({tabArticles, tabHeadings}) => {
    let navigate = useNavigate();

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div className="articleTabSection">
        <Box sx={{ width: '100%', typography: 'body1', height: "fit-content", marginBottom: "30px"}}>
            <TabContext value={value} sx={{padding: "12px"}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile onChange={handleChange} aria-label="lab API tabs example">
                {tabHeadings.map((heading, i) => {
                    return (
                        <Tab label={heading} value={(i+1).toString()}/>
                    )
                    }
                )}
                </TabList>
            </Box>

            {tabHeadings.map((heading, i) => {
                    return (
                        <TabPanel value={(i+1).toString()}>{tabArticles[i].map(article => {
                            return (
                                <ArticleTabCards article={article}/>
                            )
                        })}</TabPanel>
                    )
                    }
                )}
            </TabContext>
        </Box>
      </div>
    );
};


export default ArticlesTabSection;