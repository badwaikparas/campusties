import React, { useState, useEffect } from 'react'
import Profile from '../Pages/Profile'
import Navbar from '../Components/common/Navbar'
import { GetCurrentUser } from '../API/FireStoreAPI'

export default function ProfileLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        GetCurrentUser(setCurrentUser)
    }, [])
    return (
        <div className=''>
            <Navbar currentUser={currentUser} />
            <Profile currentUser={currentUser} />
        </div>
    )
}
