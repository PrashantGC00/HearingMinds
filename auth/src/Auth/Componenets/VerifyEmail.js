import React from 'react'
import { useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'



export const VerifyEmail = () =>{

    const [validUrl, setValidUrl] = useState(false)
    const [verifyError, setVerifyError] = useState('none')
    const param = useParams()

    useEffect(()=>{
        const verifyEmailUrl = async () =>{
            try{
                const url = `http://localhost:5000/auth/${param._id}/verify/${param.token}`
                const response = await fetch(url)
                console.log(response)
                setValidUrl(true)
            }catch(err){
                setVerifyError(err)
            }
        }
        verifyEmailUrl()
    }, [param])



    return(
        <span>
            {
            validUrl ? 
            <p>Verified</p> :
            <p>{verifyError}</p>
            }
            <Link to={'/login'}>Go back</Link>
        </span>
    )
}