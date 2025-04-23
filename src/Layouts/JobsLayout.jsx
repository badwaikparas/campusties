import React, { useEffect, useMemo, useState } from 'react'
import Jobs from '../Pages/Jobs'
import Navbar from '../Components/common/Navbar'
import { GetCurrentUser } from '../API/FireStoreAPI'
import Jobs from '../Pages/Jobs'
export default function JobsLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        GetCurrentUser(setCurrentUser)
    }, [])
    return (
        <div>
            <Navbar />
            <Jobs currentUser={currentUser} />
        </div>
    )
}