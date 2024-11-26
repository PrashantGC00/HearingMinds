import React from "react";
import { Link, redirect } from 'react-router-dom'
import { useState, useEffect } from "react";

import { Auth } from "../Auth";
import { handleFailure, handleSuccess } from "../../shared/Toast";

export const Login = () =>{

    const[loginInfo, setLoginInfo] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        const copyLoginInfo = {...loginInfo}
        copyLoginInfo[name] = value
        setLoginInfo(copyLoginInfo)
        console.log(loginInfo)
    }

    const handleLogin = async (e) =>{
        e.preventDefault()
        const {email,password} = loginInfo
        if(!email || !password){
           return handleFailure('Please Fill Up')
        }
        try{
            const url = "http://localhost:5000/auth/login"
            const response = await fetch(url,{
                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            const result = await response.json()
            const {message,success} = result
            console.log(response)
            if(success){
                handleSuccess(message)
            }
            else{
                handleFailure(message)
            }
        }
        catch(err){
            handleFailure(err)
        }
    }

    return(
        <Auth>
            <div className="login-container__main">
                <div className="login-container">
                    <div className="signup-header">
                        <span>Login</span>
                    </div>
                    <div className="signup">
                        <form onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email">Email</label><br />
                                <input 
                                    onChange={handleChange}
                                    type="text"
                                    name="email"
                                    placeholder="Enter Name"
                                    value={loginInfo.email}
                                /><br />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label><br />
                                <input 
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    placeholder="Enter Email address"
                                    value={loginInfo.password}
                                /><br />
                            </div>
                            <div>
                                <button type="submit">Login</button><br/><br/>
                                <span className="bottom-signup">Already have an account?<Link to={'/signup'}>Register</Link></span>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
         </Auth>
    )
}