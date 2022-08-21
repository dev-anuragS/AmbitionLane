import React from 'react'
import '../css/phoneButtonCSS.css'

const PhoneButton = () => {
    return (
        <>
            <a href='tel:+917210978750' id='onHoverTag'><button id='phoneButton'><i className="fas fa-phone"></i></button>
            <p id="textOnHover">+917210978750</p></a>
        </>
    )
}

export default PhoneButton

