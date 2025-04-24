import React, { useState, useEffect } from 'react'
import { GetCurrentUser } from '../API/FireStoreAPI'
import Navbar from '../Components/common/Navbar'
import Chat from '../Pages/Chat'

function ChatLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        GetCurrentUser(setCurrentUser)
    }, [])
    return (
        <div>
            <Navbar currentUser={currentUser} />
            <Chat />
        </div>
    )
}

export default ChatLayout