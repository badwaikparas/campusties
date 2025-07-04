import React, { useEffect, useMemo, useState } from 'react'
import Home from '../Pages/Home'
import { GetCurrentUser } from '../API/FireStoreAPI'
import Navbar from '../Components/common/Navbar'

export default function HomeLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        GetCurrentUser(setCurrentUser)
    }, [])
    return (
        <div>
            <Navbar currentUser={currentUser} />
            <Home currentUser={currentUser} />
        </div>
    )
}
