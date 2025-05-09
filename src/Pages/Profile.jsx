import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import ProfileComponent from '../Components/ProfileComponent'
function Profile({ currentUser }) {
    const [canAccess, setCanAccess] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if (res?.accessToken) {
                setCanAccess(true)
                localStorage.setItem('userEmail', res.email)
            } else {
                setCanAccess(false)
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
                // navigate('/login')
            }
        })
    })
    return (
        <>
            {canAccess ?
                <div>
                    <ProfileComponent currentUser={currentUser} />
                </div> :
                <h1 className='w-full h-full flex justify-center items-center'>
                    Routing the user to login from /profile
                </h1>
            }
        </>
    )
}

export default Profile 