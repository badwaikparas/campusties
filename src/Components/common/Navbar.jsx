import React, { useState } from 'react'
import campustiesLogo from '../../Assets/Logos/Logo3.svg'
import feedIcon from '../../Assets/NavbarIcons/rss.svg'
import networkIcon from '../../Assets/NavbarIcons/users.svg'
import jobsIcon from '../../Assets/NavbarIcons/briefcase.svg'
import chatIcon from '../../Assets/NavbarIcons/message-square.svg'
import notificationIcon from '../../Assets/NavbarIcons/bell.svg'
import searchIcon from '../../Assets/NavbarIcons/search.svg'
import progressIcon from '../../Assets/NavbarIcons/progress.svg'
import profilePic from '../../Assets/ProfilePic/DSCN1525.JPG'
import { useNavigate } from 'react-router-dom'

import ProfilePopUp from './ProfilePopUp'

export default function Navbar({ currentUser }) {
    const [isPopUpopen, setIsPopUpOpen] = useState(false);

    const navigate = useNavigate()
    const gotoRoute = (route) => {
        navigate(route)
    }
    return (
        <div className='w-full bg-white flex items-center shadow-md'>
            {/* LOGO */}
            <img src={campustiesLogo} alt="" className='w-[55px] ml-[20px]' />

            {/* NAVBAR ICONS */}
            <div className='w-full flex items-center ml-8'>
                <div className='m-4 flex flex-col justify-center items-center cursor-pointer' onClick={() => gotoRoute('/home')} >
                    <img src={feedIcon} alt="" />
                    <p className='text-sm'>FEED</p>
                </div>
                <div className='m-4 flex flex-col justify-center items-center cursor-pointer' onClick={() => gotoRoute('/home/network')} >
                    <img src={networkIcon} alt="" />
                    <p className='text-sm'>NETWORK</p>
                </div>
                <div className='m-4 flex flex-col justify-center items-center cursor-pointer' onClick={() => gotoRoute('/home/jobs')} >
                    <img src={jobsIcon} alt="" />
                    <p className='text-sm'>JOBS</p>
                </div>
                <div className='m-4 flex flex-col justify-center items-center cursor-pointer' onClick={() => gotoRoute('/home/chat')} >
                    <img src={chatIcon} alt="" />
                    <p className='text-sm'>CHAT</p>
                </div>
                <div className='m-4 flex flex-col justify-center items-center cursor-pointer' onClick={() => gotoRoute('/home/notify')} >
                    <img src={notificationIcon} alt="" />
                    <p className='text-sm'>NOTIFY</p>
                </div>
            </div>

            {/* SEARCH */}

            <div className='relative mx-8' >
                <img src={searchIcon} alt="" className='absolute top-1/2 -translate-y-1/2 ml-4' />
                <input placeholder='Search' type="text" className='p-4 pl-11 focus:border-2 border-gray-500 rounded-3xl' />
            </div>


            <div className='relative'>
                {/* PROFILE PIC */}

                <div className='flex gap-4 items-center w-100'
                    onClick={() => {
                        if (!isPopUpopen) {
                            setIsPopUpOpen(c => !c)
                            console.log(isPopUpopen);
                        }


                    }}>
                    {currentUser.profilePictureUrl ?
                        <img src={currentUser.profilePictureUrl} alt="" className='w-13 h-13 object-cover rounded-full' /> :
                        <img src={profilePic} alt="" className='w-13 h-13 object-cover rounded-full' />
                    }
                    <div className=''>
                        <p className='w-auto font-bold'>{currentUser.name ? currentUser.name : "Paras Badwaik"}</p>
                        <div className='flex'>
                            <p>50367 views today </p>
                            <p className='text-green-400'>+32</p>
                            <img src={progressIcon} alt="" />
                        </div>
                    </div>
                </div>

                {/* PROFILE POP UP */}
                {isPopUpopen &&
                    <ProfilePopUp closeFunc={() => { setIsPopUpOpen(false) }} />
                }
            </div>
        </div>
    )
}