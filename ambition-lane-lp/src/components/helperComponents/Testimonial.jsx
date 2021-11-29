import React from 'react'
import '../css/TestimonialCSS.css'

const Testimonial = (props) => {
    return (
        <>
            <div id='testimonialContainer'>
                <p id="testimonialPosition">{props.position}</p>
                <p id="testimonialIndustry">Industry : {props.industry}</p>
                <p id="testimonialContent">{props.content}</p>
            </div>
        </>
    )
}

export default Testimonial
