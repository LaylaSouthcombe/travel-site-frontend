const checkContentOfQuerySegmentAndAssign = (queryParamObject, segmentToCheck, queryParamSectionToCheck) => {
    if(segmentToCheck.includes(`${queryParamSectionToCheck}=`)){
        queryParamObject[queryParamSectionToCheck] = segmentToCheck.split("=")[1]
    } else {
        queryParamObject[queryParamSectionToCheck] = ""
    }
}

const checkContentForAllUrlQueryParamsAndAssign = (queryParamObject, segmentToCheck) => {
    let urlQueryParams = ["country", "continent", "city", "category"]
    urlQueryParams.forEach(param => {
        checkContentOfQuerySegmentAndAssign(queryParamObject, segmentToCheck, param)
    })
}

const generateQueryParam = (query) => {
    let queryParamObject = {}
    let splitQuery = query.replace(/-/g, " ").split("&")
    for(let i = 0; i < splitQuery.length; i++){
        checkContentForAllUrlQueryParamsAndAssign(queryParamObject, splitQuery[i])
    }
    return queryParamObject
}

const setArticleVisibilityToTrue = (articles) => {
    articles.forEach(article => {
        article.visibility = true
    })
    return articles
}

const generateArticleListPageTitle = (query) => {
    let title = ""
    let splitQuery = query.replace(/-/g, " ").split("&")
    return title
}


module.exports = {setArticleVisibilityToTrue, generateQueryParam}