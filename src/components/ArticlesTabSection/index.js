import React, {Fragment} from 'react'
import Box from '@mui/material/Box'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'

import {ArticleTabCards, ViewMoreButton} from '../index'

import './style.css'

const ArticlesTabSection = ({tabArticles, tabHeadings, loaded, endPointStart, pageName}) => {

    const [value, setValue] = React.useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

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

    const generateEndPoint = (heading, pageName) => {
        let endPoint
        if(heading === "All"){
            if(pageName === 'trip-planning'){
                endPoint = `/articles/category=trip-planning`
            } else {
                endPoint = `${endPointStart}`
            }
        } else {
            if(pageName === 'trip-planning'){
                let formattedHeading = formatHeadingForEndPoint(heading)
                endPoint = `/articles/category=${formattedHeading}`
            } else {
                let formattedHeading = formatHeadingForEndPoint(heading)
                endPoint = `${endPointStart}&category=${formattedHeading}`
            }
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
                                <Tab label={heading} value={(i+1).toString()} key={'tab' + heading + i}/>
                        )
                    }
                )}
                </TabList>
            </Box>
            {Object.keys(sortedArticlesArray).map((heading, i) => {
                    let endPoint = generateEndPoint(heading, pageName)
                    return (
                        <TabPanel value={(i+1).toString()} key={"tabPanel" + heading + i}>{sortedArticlesArray[heading].map((article, i) => {
                            return (
                                <Fragment key={'tabCards' + heading + i}>
                                    <ArticleTabCards article={article} classnames={"articleTabCard"} loaded={loaded} keyId={'tabCards' + heading + i}/>
                                </Fragment>
                            )
                            })}
                            <div className="articleListViewMoreButton">
                                <ViewMoreButton endpoint={endPoint} loaded={loaded}/>
                            </div>
                        </TabPanel>
                    )
                }
            )}
            </TabContext>
        </Box>
      </div>
    )
}

export default ArticlesTabSection