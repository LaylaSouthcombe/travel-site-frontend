const formatWord = (word) => {
    if(word !== undefined){
    word = word.split('-').map((x, i) => {
        return (
            x = x[0].toUpperCase() + x.slice(1)
        )
    }).join(" ")
    }
    return word
}

module.exports = {formatWord}