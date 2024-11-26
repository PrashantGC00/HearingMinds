import React, { useState } from "react";

import './Signup.css'

import { handleFailure, handleSuccess } from "../../shared/Toast";
import { Link } from "react-router-dom";

import { Auth } from "../Auth";

export const Signup = () =>{

    
    const [signupInfo, setSignUpInfo] = useState({
        fname:'',
        lname:'',
        email:'',
        password:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        const copySignUpnInfo = {...signupInfo}
        copySignUpnInfo[name] = value
        setSignUpInfo(copySignUpnInfo)
    }

    const handleSignUp = async (e)=>{
        e.preventDefault()
        const {fname,lname,email,password} = signupInfo
        if(!fname || !lname || !email || !password){
            return handleFailure('Missing')
        }
        try{
            const url = "http://localhost:5000/auth/signup"
            const response = await fetch(url, {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(signupInfo)
            })
            const result = await response.json()
            const {message,success} = result
            if(success){
                handleSuccess(message)
            }else{
                handleFailure(message)
            }
        }catch(err){
            handleFailure(err)
        }
    }

    return(
        <Auth>
            <div className="login-container__main">
            <div className="login-container">
                <div className="signup-header">
                    <span>Signup</span>
                </div>
                <div className="signup">
                    <form onSubmit={handleSignUp}>
                        <div>
                            <label htmlFor="fname">First Name</label><br />
                            <input 
                                onChange={handleChange}
                                type="text"
                                name="fname"
                                placeholder="Enter First Name"
                                value={signupInfo.fname}
                            /><br />
                        </div>

                        <div>
                            <label htmlFor="lname">Last Name</label><br />
                            <input 
                                onChange={handleChange}
                                type="text"
                                name="lname"
                                placeholder="Enter Last Name"
                                value={signupInfo.lname}
                            /><br />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label><br />
                            <input 
                                onChange={handleChange}
                                type="text"
                                name="email"
                                placeholder="Enter Name"
                                value={signupInfo.email}
                            /><br />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br />
                            <input 
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder="Enter Name"
                                value={signupInfo.password}
                            /><br />
                        </div>
                        <div>
                            <button type="submit">Signup</button><br/><br/>
                            <span className="bottom-signup">Already have an account?<Link to={'/login'}>login</Link></span>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>

        </Auth>

       
    )
}