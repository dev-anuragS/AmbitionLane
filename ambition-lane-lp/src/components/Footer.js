import React, { useState } from 'react'
import './css/FooterCSS.css'

const Footer = () => {

    const [emailData, setEmailData] = useState('');

    const inputEvent = (event) => {
        setEmailData(event.target.value);
    }

    const submitForm=(e)=>{
        e.preventDefault();
        // Add logic to save details to a google form for Phase 1
        alert("Details Submitted Successfully");
    }

    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1 footLink" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1 footLink" href="https://in.linkedin.com/in/ambition-lane" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>

                    </section>
                    <section className="">
                        <form action="" onSubmit={submitForm}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control" name='email' value={emailData} onChange={inputEvent} placeholder='Enter your E-mail' />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="mb-4">
                        <p>
                            If you are looking for a job, Or if you are looking to hire, Use the form above to connect with us.
                        </p>
                    </section>
                </div>
                <div className="text-center p-3">
                    © 2021 Copyright: ambitionlane.com
                </div>
            </footer>
        </div>
    )
}

export default Footer