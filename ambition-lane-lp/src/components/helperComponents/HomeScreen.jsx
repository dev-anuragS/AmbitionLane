import React from 'react'
import homeScreen from '../images/homeScreen.jpg'
import '../css/HomeScreenCSS.css'
const HomeScreen = () => {
    return (
        <>
            <div className="HomeScreenContainer">
                <div id="HomeScreenSubContainer">
                    <h1 id="HomeScreenHeading">Ambition Lane</h1>
                    <p id="HomeScreenContent">
                        <span id='moto'>Get Your Dream Job</span><br/>
                    </p>
                    {/* <button id='homeScreenBtn'>Login</button> */}
                </div>
                <img src={homeScreen} id='HomeScreenImg' alt="Not Visible" />
            </div>
        </>
    )
}

export default HomeScreen
