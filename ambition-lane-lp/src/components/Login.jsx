import React from 'react'
import jwt from 'jsonwebtoken'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './css/login&SignUp.scss'

const Login = () => {

    const history = useHistory();

    const [loginData,setLoginData] = useState({
        emailId:"",
        password:""
    });

    const inputEvent = (event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    useEffect(()=>{
        const token = localStorage.getItem('ambitionLaneToken');
        if(token){
            const user = jwt.decode(token);
            if(!user){
                localStorage.removeItem(token);
            }
            else{
                alert('Already Logged in logout to login with a diffrent account!')
                history.replace('/profile');
            }
        }
    })

    async function loginUser(event){
        event.preventDefault();
        const response = await fetch('http://localhost:8000/api/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                ...loginData,
            }),
        })
        const data = await response.json();

        if(data.user){
            localStorage.setItem('ambitionLaneToken',data.user);
            alert('Login Successful');
            window.location.href = '/profile';
        }else{
            alert('Please check your username and password');
        }
    }

    return (
        <>
            <div id="container">
                <div id="loginContainer">
                    <div id="left">
                        <div id='loginText'>Login</div>
                        random shit go brrr
                    </div>
                    <div id="right">
                        <form action="" id="loginForm" autoComplete='off' onSubmit={loginUser} >
                            <label htmlFor="emailId"><span className='smallTextLoginForm'>Email</span></label>
                            <input type="email" name="emailId" id="emailId" value={loginData.emailId} onChange={inputEvent} />
                            <label htmlFor="password"><span className='smallTextLoginForm'>Password</span></label>
                            <input type="password" name="password" id="password" value={loginData.password} onChange={inputEvent} />
                            <button type="submit" id='loginFormBtn'>Submit</button>
                        </form>
                        <div id="innerLoginFormDiv">
                            <NavLink exact to="/signUp" className="loginFormLink">Sign Up</NavLink>
                            <NavLink exact to="" className="loginFormLink">Forgot Password?</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
)}

export default Login