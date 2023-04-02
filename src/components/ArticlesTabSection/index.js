import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import './style.css'
import {ArticleTabCards, ViewMoreButton} from '../index'

const ArticlesTabSection = ({tabArticles, tabHeadings, loaded, endPointStart}) => {

    const [value, setValue] = React.useState('1');

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    const addKeysToSortedArticlesArray = (tabHeadings) => {
        let sortedArticlesArray = {}
        tabHeadings.forEach(heading => {
            sortedArticlesArray[heading] = []
        })
        return sortedArticlesArray
    }

    const sortArticles = (articlesArray, heading) => {
        for(let i = 0; i < tabArticles.length; i++){
            if(heading === 'All'){
                articlesArray['All'].push(tabArticles[i])
            } else {
                if(tabArticles[i]["article_category"].includes(heading)){
                    articlesArray[heading].push(tabArticles[i])
                }
            }
        }
    }

    const removeTabsWithNoArticles = (object) => {
        Object.keys(object).forEach(key => {
            if(!object[key].length > 0){
                delete object[key]
            }
        })
        return object
    }

    let sortedArticlesArray
    sortedArticlesArray = addKeysToSortedArticlesArray(tabHeadings)

    tabHeadings.forEach(heading => {
        sortArticles(sortedArticlesArray, heading)
    })
    sortedArticlesArray = removeTabsWithNoArticles(sortedArticlesArray)  

    const formatHeadingForEndPoint = (heading) => {
        return heading.replace("& ", "").replace(" ", "-")
    }

    const generateEndPoint = (heading) => {
        let endPoint
        if(heading === "All"){
            endPoint = `${endPointStart}`
        } else {
            let formattedHeading = formatHeadingForEndPoint(heading)
            endPoint = `${endPointStart}&category=${formattedHeading}`
        }
        return endPoint.toLowerCase()
    }

    return (
        <div className="articleTabSection">
        <Box sx={{ width: '100%', typography: 'body1', height: "fit-content", marginBottom: "30px"}}>
            <TabContext value={value} sx={{padding: "12px"}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList variant="scrollable" scrollButtons="auto" onChange={handleChange} aria-label="lab API tabs example">
                {Object.keys(sortedArticlesArray).map((heading, i) => {
                        return (
                            <Tab label={heading} value={(i+1).toString()}/>
                        )
                    }
                )}
                </TabList>
            </Box>
            {Object.keys(sortedArticlesArray).map((heading, i) => {
                    let endPoint = generateEndPoint(heading)
                    return (
                        <>
                        <TabPanel value={(i+1).toString()}>{sortedArticlesArray[heading].map(article => {
                            return (
                                <ArticleTabCards article={article} classnames={"articleTabCard"} loaded={loaded}/>
                            )
                        })}
                            <div className="articleListViewMoreButton">
                                <ViewMoreButton endpoint={endPoint} loaded={loaded}/>
                            </div>
                        </TabPanel>
                        </>
                    )
                }
            )}
            </TabContext>
        </Box>
      </div>
    );
};


export default ArticlesTabSection;