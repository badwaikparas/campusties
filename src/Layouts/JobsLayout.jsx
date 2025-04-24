import React, { useEffect, useMemo, useState } from 'react'
import Jobs from '../Pages/Jobs'
import Navbar from '../Components/common/Navbar'
import { GetCurrentUser } from '../API/FireStoreAPI'
export default function JobsLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        GetCurrentUser(setCurrentUser)
    }, [])
    return (
        <div>
            <Navbar currentUser={currentUser} />
            <Jobs currentUser={currentUser} />
        </div>
    )
}