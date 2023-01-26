import React from 'react'
import { useNavigate } from 'react-router-dom';

const DestinationsDropMenu = ({fullListData}) => {
    let navigate = useNavigate();
    const renderDestinationsDropDown = fullListData['Destinations'].map((continent, i) => {
        return(
            <div className="dropDownContinent">
                <p onClick={() => navigate(continent.name.toLowerCase())}>{continent.name}</p>
                {continent.children.slice(1, 5).map((country, i) => {
                    return (
                        <>
                            <p onClick={() => navigate(country.url)}>{country.name}</p>
                        </>
                    )
                })}
                <p onClick={() => navigate(continent.children[0].url)}>{continent.children[0].name}</p>
            </div>
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