import React from 'react'
import image2 from '../images/image2.jpg'
import '../css/WhyUsCSS.css'

const WhyUs = () => {
    return (
        <>
            <div className="whyContainer">
                <div id="whySubContainer">
                    <h1 id="whyHeading">Why Us?</h1>
                    <p id="whyContent">
                        •Next-Gen Services (Infographic Resume & The Web Resume)<br />
                        •Global Coverage & International Standard Layouts<br />
                        •LinkedIn Highlight<br />
                        •24*7 Availability<br />
                        •Domain Content Expertise<br />
                        •Customized Content across Sections<br />
                        •AI Compatible Resumes<br />
                        •ATS Compliant Keywords<br />
                        •Affordable Pricing<br />
                        •Guaranteed Closure within 5 days<br />
                        •100% Job Assistance<br />
                    </p>
                </div>
                <img src={image2} id='aboutWhyImg' alt="Not Visible" />
            </div>
        </>
    )
}

export default WhyUs
