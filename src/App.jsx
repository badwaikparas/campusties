import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'

function App() {
    return (
        <Router>
            <div className='h-screen w-screen overflow-hidden'>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
