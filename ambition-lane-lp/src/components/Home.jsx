import React from 'react'
import {NavLink} from 'react-router-dom'
import HomeScreen from './HomeScreen.jsx'
import WhyUs from './WhyUs.jsx'
import './css/HomeCSS.css'
import Carousel from './Carousel.jsx'
import Products from './Products.jsx'
import Testimonials from './Testimonials.jsx'
import FormContact from './FormContact.jsx'

const Home = () => {
  return (
    <>
      <div className='bodyContainer'>
        <HomeScreen/>
        <div className="aboutContainer">
          <h1 id='aboutHeading'>Welcome to Ambition Lane</h1>
          <p id='aboutContent'><span id='subHead'>India's first AI based Resume Writing Platform with guaranteed Job Assistance.</span><br/>
            At Luckshya, we offer quality services to our clients at reasonable prices. Our courteous Resume Service staff have the professional tools and experience necessary to help with all your needs. Connect today to get in touch with us and to learn more about what we have to offer.
            Luckshya is an attempt towards providing you the best professional services at the best price in the market. We are committed to providing service of the highest quality, paying particular attention to work efficiently and expediently while keeping the lines of communication with our clients clear and concise.
            We cover every domain and industry across levels including Banking & Finance, IT, Sales & Marketing, Business Development, Brand Management, Supply Chain Management, Construction, HR, General Administration, Academic, Project Management, Healthcare, Legal, Manufacturing, Oil & Gas, BPO/KPO, Others/Niche Profiles</p>
          <NavLink exact to='/contact'><button id='aboutBtn'>Contact Us</button></NavLink>
        </div>
        <WhyUs/>
        <Carousel/>
        <Testimonials/>
        <Products/>
        <FormContact/>
      </div>
    </>
  )
}

export default Home
