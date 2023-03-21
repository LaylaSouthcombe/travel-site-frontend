const addNewFilterToFiltersArray = (labelsArray, filterToAdd) => {
    let labelItem = {}
    labelItem[filterToAdd] = 1
    labelsArray.push(labelItem) 
}

const setArticleVisibility = (filters, article) => {
    article.visibility = true
    for(let i = 0; i < filters.countries.length; i++){
        if(!article.country.includes(filters.countries[i])){
            article.visibility = false
        }
    }
    for(let i = 0; i < filters.tripStyles.length; i++){
        if(!article.trip_categories.includes(filters.tripStyles[i])){
            article.visibility = false
        }
    }
}

const checkIfLabelAlreadyInLabelsArray = (labelsArray, labelToCheck) => {
    const result = labelsArray.filter((filter) => {
        let filterLabel = Object.keys(filter)[0]
        return filterLabel === labelToCheck
    });
    return result.length ? true : false
}

const increaseNumberOfArticlesForFilter = (labelsArray, filterToIncrease) => {
    for(let i = 0; i < labelsArray.length; i++){
        if(Object.keys(labelsArray[i])[0] === filterToIncrease){
            labelsArray[i][filterToIncrease] += 1
        }
    }
}

const addNewOrIncreaseExistingFilterToFilterArray = (objectWithFilterInfo, filterArray, labelToAddOrCreate) => {
    if(objectWithFilterInfo[labelToAddOrCreate] !== undefined){     
        if(checkIfLabelAlreadyInLabelsArray(filterArray, labelToAddOrCreate)){
            increaseNumberOfArticlesForFilter(filterArray, labelToAddOrCreate)
        } else {
            addNewFilterToFiltersArray(filterArray, labelToAddOrCreate)
        }
    }
}

const resetFilterLabelNumbers = (arrayLabels) => {
    arrayLabels.forEach((filter, i) => {
        arrayLabels[i][Object.keys(filter)[0]] = 0
    })
}

const addOrRemoveCheckedClassName = (element) => {
    if(element.classList.contains("checked")){
        element.classList.remove("checked")
    } else{ 
        element.classList.add("checked")
    }
}

const uncheckOrCheckCheckBox = (e) => {
    if(e.target.localName === 'span'){
        addOrRemoveCheckedClassName(e.target)
    } else if(e.target.localName === 'label'){
        addOrRemoveCheckedClassName(e.target.children[0])
    }
}

module.exports = {setArticleVisibility, increaseNumberOfArticlesForFilter, addNewOrIncreaseExistingFilterToFilterArray, resetFilterLabelNumbers, uncheckOrCheckCheckBox}