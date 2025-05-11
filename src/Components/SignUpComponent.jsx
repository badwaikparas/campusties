import React, { useState } from 'react'
import { SignUpAPI, GoogleSignInAPI } from '../API/AuthAPI';
import { useNavigate } from 'react-router-dom';
import { PostUserData } from '../API/FireStoreAPI';

export default function SignUpComponent() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signUp = async () => {
        try {
            let res = await SignUpAPI(email, password)
            console.log(res);
            PostUserData({
                name,
                email,
                userProfileImageUrl: "",
                userProfileImageDeleteUrl: "",
                userProfileCoverImageUrl: "",
                userProfileCoverImageDeleteUrl: "",
                connections: 0,
                about: "",
                project: [],
                skills: [],
                experience: [],
                education: [],
                viewers: [],

            })
            localStorage.setItem('userEmail', res.email)
            navigate("/home")
        } catch (error) {
            console.log(error);
        }
    }

    const googleSignIn = async () => {
        let res = await GoogleSignInAPI()
        console.log(res);
        localStorage.setItem('userEmail', res.email)
        navigate('/home')
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center gap-5 p-24 rounded-4xl bg-slate-200'
                style={{
                    background: `rgba(36,182,255,0.1)`
                }}>
                <h1 className='text-5xl mb-4'>SignUp</h1>
                <input className='w-full px-5 py-3 rounded-xl border-black border-2' placeholder='Name' type="text" onChange={(e) => { setName(e.target.value) }} />
                <input className='w-full px-5 py-3 rounded-xl border-black border-2' placeholder='Email' type="email" onChange={(e) => { setEmail(e.target.value) }} />
                <input className='w-full px-5 py-3 rounded-xl border-black border-2' placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value) }} />
                <button className='px-5 py-3 bg-black text-white font-bold border-2 rounded-full' onClick={signUp}>SignUp</button>
                <button className='px-5 py-3 bg-black text-white font-bold border-2 rounded-full' onClick={googleSignIn}>Login with Google</button>
                <p onClick={() => {
                    navigate('/login')
                }}>Login</p>
            </div>
        </div>
    )
}
