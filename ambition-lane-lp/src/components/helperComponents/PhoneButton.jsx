import React from 'react'
import '../css/phoneButtonCSS.css'

const PhoneButton = () => {
    return (
        <>
            <a href='tel:+916306000929' id='onHoverTag'><button id='phoneButton'><i className="fas fa-phone"></i></button>
            <p id="textOnHover">+916306000929</p></a>
        </>
    )
}

export default PhoneButton

