import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import HomeLayout from './Layouts/HomeLayout'

function App() {
    return (
        <Router>
            <div className='h-screen w-screen overflow-hidden'>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<HomeLayout />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
