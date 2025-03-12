import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import HomeLayout from './Layouts/HomeLayout'
import Network from './Pages/Network'

function App() {
    return (
        <Router>
            <div className='h-screen w-screen overflow-auto'>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<HomeLayout />} />
                    <Route path="/network/*" element={<Network />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
