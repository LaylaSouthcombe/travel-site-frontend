import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import {ViewMoreButton} from '../'
import './style.css'

const ConditionalArticlesGrid = ({loaded, articlesArray, title, buttonEndPoint, grid}) => {

    return (
        <>
            {loaded ? 
                <>
                    {articlesArray.length  ? 
                        <>
                            <div>
                                <h2 className="seperatorTitle">{title}</h2>
                            </div>
                            {grid}
                            <ViewMoreButton endpoint={buttonEndPoint} loaded={loaded}/>
                        </>
                    : null}
                </>
                :
                <>
                    <div className="skeletonSepecatorTitle">
                        <Skeleton variant="rounded" width={"100%"} height={40}/>
                    </div>
                    {grid}
                    <ViewMoreButton endpoint={buttonEndPoint} loaded={loaded}/>
                </>
            }
        </>
    )
}

export default ConditionalArticlesGrid;



