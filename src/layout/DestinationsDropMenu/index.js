import React from 'react'

const DestinationsDropMenu = ({fullListData}) => {
    const renderDestinationsDropDown = fullListData['Destinations'].map(continent => {
        return(
                <p>{continent.name}</p>
        )
    })

    return(
        <>
            <div className="navDropdown" id='destinationsDropdown'>
                {renderDestinationsDropDown}
            </div>
        </>
    )
}

export default DestinationsDropMenu;