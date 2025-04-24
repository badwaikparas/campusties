import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import HomeLayout from './Layouts/HomeLayout'
import ProfileLayout from './Layouts/ProfileLayout'
import JobsLayout from './Layouts/JobsLayout'
import ChatLayout from './Layouts/ChatLayout'
import NetworkLayout from './Layouts/NetworkLayout'

function App() {
    return (
        <Router>
            <div className='h-screen w-screen overflow-auto '>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<HomeLayout />} />
                    <Route path="/home/network/*" element={<NetworkLayout />} />
                    <Route path="/home/profile" element={<ProfileLayout />} />
                    <Route path="/home/chat" element={<ChatLayout />} />
                    <Route path="/home/jobs" element={<JobsLayout />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
