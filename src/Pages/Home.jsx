import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeComponent from '../Components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
export default function Home() {
    const [canAccess, setCanAccess] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if (res?.accessToken) {
                setCanAccess(true)
            } else {
                setCanAccess(false)
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
                // navigate('/login')
            }
        })
    })
    return (
        <>
            {canAccess ?
                <div>
                    <HomeComponent />
                </div> :
                <h1 className='w-full h-full flex justify-center items-center'>
                    Routing the user to login
                </h1>
            }
        </>
    )
}
