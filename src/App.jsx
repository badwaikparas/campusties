import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
