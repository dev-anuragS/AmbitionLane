import React from 'react'
import Carousel from './helperComponents/Carousel'
import Testimonials from './helperComponents/Testimonials'
import Products from './helperComponents/Products'

const service = () => {
    return (
        <div className="bodyContainer">
            <Carousel/>
            <Testimonials/>
            <Products/>
        </div>
    )
}

export default service
