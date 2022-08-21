import React, {useState} from 'react'
import '../css/formCSS.css'
import aboutWhy from '../images/aboutWhy.jpg'

const FormContact = () => {

    const [formData, setformData] = useState({
        name:'',
        email:'',
        message:''
    });

    const inputEvent=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setformData({
            ...formData,
            [name]:value,
        })
        console.log(formData);
    }

    const submitForm=(e)=>{
        e.preventDefault();
        // Add logic to save details to a google form for Phase 1
        alert("Details Submitted Successfully");
    }

    return (
        <>
            <div id="formContainer">
                <form action="" id="contactForm" onSubmit={submitForm}>
            <h1 id="formHeading">Contact Us</h1>
            <p id='formText'>Looking for your dream job, use the form below and we'll make it happen</p>
                    <input type="text" name="name" value={formData.name} id="formName" placeholder='Enter your name' onChange={inputEvent} />
                    <input type="email" name="email" value={formData.email} id="formEmail" placeholder='Enter your email id' onChange={inputEvent} />
                    <textarea name="message" value={formData.message} id="formMessage" cols="30" rows="10" placeholder='Enter your message' onChange={inputEvent}></textarea>
                    <button type="submit" id='formButton'>Submit</button>
                </form>
                <img src={aboutWhy} id='formImage' alt="Not Visible" />
            </div>
        </>
    )
}

export default FormContact
