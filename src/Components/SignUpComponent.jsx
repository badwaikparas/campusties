import React, { useState } from 'react'
import { SignUpAPI } from '../API/AuthAPI';

export default function SignUpComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signUp = async () => {
        let res = await SignUpAPI(email, password)
        console.log(res);
    }
    return (
        <div>
            <h1>SignUpComponent</h1>
            <div className='flex flex-col justify-center items-center gap-5'>
                <input className='border-2' placeholder='Email' type="email" onChange={(e) => { setEmail(e.target.value) }} />
                <input className='border-2' placeholder='Password' type="text" onChange={(e) => { setPassword(e.target.value) }} />
                <button className='border-2' onClick={signUp}>SignUp</button>

            </div>
        </div>
    )
}
