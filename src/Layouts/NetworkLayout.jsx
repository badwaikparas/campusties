import React, { useEffect, useState } from 'react'
import Navbar from '../Components/common/Navbar'
import Network from '../Pages/Network'
import { GetCurrentUser } from '../API/FireStoreAPI'

function NetworkLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        GetCurrentUser(setCurrentUser)
    }, [])
    return (
        <div>
            <Navbar currentUser={currentUser} />
            <Network />
        </div>
    )
}

export default NetworkLayout