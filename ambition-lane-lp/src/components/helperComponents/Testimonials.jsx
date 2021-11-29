import React from 'react'
import Testimonial from './Testimonial'
import '../css/TestimonialsCSS.css'

const Testimonials = () => {
    return (
        <>
            <div id="testimonialsMainContainer">
                <h1 id='testimonialsHeading'>Testimonials</h1>
                <div id='testimonialsContainer'>
                    <Testimonial position='Business Head' industry='FMCG' content='Honestly, I was not really confident in the start, but the detailing done in my resume, the professionalism and the end result really made me feel the difference, Great job, Thanks Luckshya!' />
                    <Testimonial position='Chief Technology Officer' industry='IT' content='I was struggling in finding a new job and therefore had to avail the service. Little did i know that this resume will help me land where I always wanted to be. Job well appreciated! Keep going Luckshya!' />
                    <Testimonial position='Procurement Head' industry='Retail' content='You guys deserve so much more. All the services in the package were provided with utmost precision and exactly as I wanted. Would definitely recommend to my friends.' />
                </div>
            </div>
        </>
    )
}

export default Testimonials
