import React, { useState, useEffect } from 'react'
import LoginComponent from '../Components/LoginComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [canAccess, setCanAccess] = useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if (res?.accessToken) {
                setCanAccess(true)
                // console.log(res.accessToken);
                console.log(res.email);
                localStorage.setItem('userEmail', res.email)
                setTimeout(() => {
                    navigate('/home')
                }, 5000)
            } else {
                setCanAccess(false)
                // alert('Please Login to continue')
            }
        })
    })
    return (
        <>
            {canAccess ?
                <div className='w-full h-full flex justify-center items-center'>
                    Routing to home
                </div>
                :
                <div>
                    <LoginComponent />
                </div>}

        </>
    )
}
