import React, { useState, useEffect } from 'react'
import SignUpComponent from '../Components/SignUpComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {
    const navigate = useNavigate()
    const [canAccess, setCanAccess] = useState(false)
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if (res?.accessToken) {
                setCanAccess(true)
                localStorage.setItem('userEmail', res.email)
                setTimeout(() => {
                    navigate('/home')
                }, 5000)
            } else {
                setCanAccess(false)
                // console.log(res?.accessToken);
                // alert('Please Login to continue')
            }
        })
    })
    return (
        <div className='w-full h-full'>
            {canAccess ?
                <div className=' w-full h-full flex justify-center items-center'>
                    Routing to home
                </div>
                :
                <div>
                    <SignUpComponent />
                </div>
            }

        </div>
    )
}
