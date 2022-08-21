import React from 'react'
import Testimonials from './helperComponents/Testimonials'
import Products from './helperComponents/Products'

const service = () => {
    return (
        <div className="bodyContainer">
            {/* <Carousel/> */}
            <Products/>
            <Testimonials/>
        </div>
    )
}

export default service
