import React, { useState } from 'react'
import { SignUpAPI } from '../API/AuthAPI';
import { useNavigate } from 'react-router-dom';

export default function SignUpComponent() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signUp = async () => {
        let res = await SignUpAPI(email, password)
        console.log(res);
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center gap-5 p-24 rounded-4xl bg-slate-200'
                style={{
                    background: `rgba(36,182,255,0.1)`
                }}>
                <h1 className='text-5xl mb-4'>SignUp</h1>
                <input className='w-full px-5 py-3 rounded-xl border-black border-2' placeholder='Email' type="email" onChange={(e) => { setEmail(e.target.value) }} />
                <input className='w-full px-5 py-3 rounded-xl border-black border-2' placeholder='Password' type="text" onChange={(e) => { setPassword(e.target.value) }} />
                <button className='px-5 py-3 bg-black text-white font-bold border-2 rounded-full' onClick={signUp}>SignUp</button>
                <p onClick={() => {
                    navigate('/')
                }}>Login</p>
            </div>
        </div>
    )
}
