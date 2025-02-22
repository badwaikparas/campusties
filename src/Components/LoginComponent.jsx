import React, { useState } from 'react'
import { LoginAPI } from '../API/AuthAPI'
import "../Sass/LoginComponent.scss"

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({})
    const login = async () => {
        let res = await LoginAPI(credentials.email, credentials.password)
        console.log(res);
    }
    return (
        <div>
            <h1>LoginComponent</h1>
            <div className='flex flex-col justify-center items-center gap-5'>
                <input className='common-input border-black border-2' placeholder='Email' type="email"
                    onChange={(e) => { setCredentials({ ...credentials, email: e.target.value }) }}
                />
                <input className='common-input border-black border-2' placeholder='Password' type="password"
                    onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }}
                />
                <button className='login-btn text-white' onClick={login}>Login to CampusTies</button>
            </div>
        </div>
    )
}
