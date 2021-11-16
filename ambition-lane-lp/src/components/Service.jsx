import React from 'react'
import Carousel from './Carousel'
import Testimonials from './Testimonials'
import Products from './Products'

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
