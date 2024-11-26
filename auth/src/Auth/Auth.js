import React from "react";
import { ToastContainer } from "react-toastify";

import therapy from '../Imgs/Therapy.png'
import './Auth.css'
import 'react-toastify/ReactToastify.css'


export const Auth = props =>{
    return(
        <React.Fragment>
        
        <div className="auth">
            <div className="auth-container__main">
                <div className="auth-static__handle">
                    <div className="static-handle">
                        <img src={therapy} className="static-img" />
                    </div>
                </div>
                {props.children}
            </div>
        </div>
         
        <ToastContainer />
        </React.Fragment>

    )
}