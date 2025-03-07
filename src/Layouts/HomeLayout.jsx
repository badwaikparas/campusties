import React, { useEffect, useMemo, useState } from 'react'
import Home from '../Pages/Home'
import Navbar from '../Components/common/Navbar'
import { GetCurrentUser } from '../API/FireStoreAPI'
export default function HomeLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        GetCurrentUser(setCurrentUser)
    }, [])
    return (
        <div>
            <Navbar />
            <Home currentUser={currentUser} />
        </div>
    )
}
