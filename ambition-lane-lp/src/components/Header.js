import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/HeaderCSS.css'

const Header = () => {
    return (
        <>
            <div id='navbar'>
                <div id="logo">
                    Ambition Lane
                </div>
                <div id='links'>
                    <NavLink activeClassName="actLink" className="navLinks" exact to="/">Home</NavLink>
                    <NavLink activeClassName="actLink" className="navLinks" exact to="/service">Services</NavLink>
                    <NavLink activeClassName="actLink" className="navLinks" exact to="/contact">Contact</NavLink>
                    {/* <NavLink activeClassName="actLink" className="navLinks" exact to="/login">Login</NavLink> */}
                </div>
                
                
                <div id='links'>
                    {/* <NavLink activeClassName="actLink" className="navLinks" exact to="/employerLogin">For Employers</NavLink> */}
                </div>
                
            </div>
        </>
    )
}

export default Header
