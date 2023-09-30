import React from 'react'

const DestinationsDropMenu = ({fullListData}) => {

    const renderDestinationsDropDown = fullListData['Destinations'].slice(1, 7).map((continent, i) => {
        return (
            <div className="dropDownCountry" key={"dropDownCountry" + i}>
                <a href={continent.url}>{continent.name}</a>
            </div>
        )
    })

    return (
        <>
            <div className="navDropdown" id='destinationsDropdown'>
                <a className="dropDownContinent" href={fullListData['Destinations'][0].url}>{fullListData['Destinations'][0].name}</a>
                <div className="dropDownCountries">
                    {renderDestinationsDropDown}
                </div>
            </div>
        </>
    )
}

export default DestinationsDropMenu;