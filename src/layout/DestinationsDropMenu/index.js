import React from 'react'
import { useNavigate } from 'react-router-dom';

const DestinationsDropMenu = ({fullListData}) => {
    let navigate = useNavigate();

    const renderDestinationsDropDown = fullListData['Destinations'].slice(1, 7).map((continent, i) => {
        return (
            <div className="dropDownCountry" key={"dropDownCountry" + i}>
                <p onClick={() => navigate(continent.url)}>{continent.name}</p>
                {/* <div className="continentMenuCountries">
                    {continent.children.slice(1, 5).map((country, i) => {
                        return (
                            <>
                                <p onClick={() => navigate(country.url)}>{country.name}</p>
                            </>
                        )
                    })}
                <p onClick={() => navigate(continent.children[0].url)} className="exploreMoreMenuItem">{continent.children[0].name}</p>
                </div> */}
            </div>
        )
    })

    return(
        <>
            <div className="navDropdown" id='destinationsDropdown'>
                <p className="dropDownContinent" onClick={() => navigate(fullListData['Destinations'][0].url)}>{fullListData['Destinations'][0].name}</p>
                <div className="dropDownCountries">
                    {renderDestinationsDropDown}
                </div>
            </div>
        </>
    )
}

export default DestinationsDropMenu;