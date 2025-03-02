import React, { useState } from 'react'
import { GoogleSignInAPI, LoginAPI } from '../API/AuthAPI'
import "../Sass/LoginComponent.scss"
import { useNavigate } from "react-router";



export default function LoginComponent() {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({})
    const login = async () => {
        let res = await LoginAPI(credentials.email, credentials.password)
        console.log(res);
        localStorage.setItem('userEmail', res.email)
        navigate('/home')
    }
    const googleSignIn = async () => {
        let res = await GoogleSignInAPI()
        console.log(res);
        localStorage.setItem('userEmail', res.email)
        navigate('/home')
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            {/* <h1>LoginComponent</h1> */}
            <div className='flex flex-col justify-center items-center gap-5 p-24 rounded-4xl bg-slate-200'
                style={{
                    background: `rgba(36,182,255,0.1)`
                }}>
                <h1 className='text-5xl mb-4'>Login</h1>
                <input className='w-full px-5 py-3 rounded-xl border-black border-2' placeholder='Email' type="email"
                    onChange={(e) => { setCredentials({ ...credentials, email: e.target.value }) }}
                />
                <input className='w-full px-5 py-3 rounded-xl border-black border-2' placeholder='Password' type="password"
                    onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }}
                />
                <div className='my-3 flex flex-col justify-center items-center gap-3'>
                    <button className='px-5 py-3 bg-black text-white font-bold border-2 rounded-full' onClick={login}>Login to CampusTies</button>
                    <button className='px-5 py-3 bg-black text-white font-bold border-2 rounded-full' onClick={googleSignIn}>Login with Google</button>
                    <p onClick={() => {
                        navigate('/signup')
                    }}>Sign Up</p>
                </div>
            </div>
        </div>
    )
}
