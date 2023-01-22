import React, {useState} from 'react'

const DestinationsDropMenu = ({titleListData, fullListData}) => {
    console.log("hi")
    const renderDestinationsDropDown = fullListData['Destinations'].map(continent => {
        return(
                <p>{continent.name}</p>
        )
    })

    return(
        <>
            <div className="destinationsDropdown">
            {renderDestinationsDropDown}
            </div>
        </>
    )
}

export default DestinationsDropMenu;