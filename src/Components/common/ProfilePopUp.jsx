import React, { useEffect, useRef } from 'react'
import { OnLogout } from '../../API/AuthAPI'
import { useNavigate } from 'react-router-dom'

export default function ProfilePopUp({ closeFunc }) {
    const navigate = useNavigate()
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {

            if (popupRef && !popupRef.current.contains(e.target)) {
                // console.log("inside fun");
                closeFunc();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closeFunc]);
    return (
        <div className='absolute top-full bg-white border-2 w-[250px] mt-[20px] rounded-[4px] px-6'>
            <ul ref={popupRef} className='last-child:border-none'>
                <li className=' py-2 border-b-2 border-slate-100 m-2'
                    onClick={() => {
                        console.log("Logging out");
                        OnLogout();
                        navigate("/login")
                    }}
                >Logout</li>
                <li className='py-2 border-b-2 border-slate-100 m-2'
                    onClick={() => {
                        navigate("/home/profile")
                    }}
                >Profile</li>
            </ul>
        </div>
    )
}
