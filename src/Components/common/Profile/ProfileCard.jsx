import React from 'react'
import ProfilePic from '../../../Assets/ProfilePic/DSCN1525.JPG'
import bellIcon from '../../../Assets/NavbarIcons/bell.svg'

export default function ProfileCard({ currentUser }) {
    return (
        <div>
            {/* Background  */}
            <div className='h-[400px] bg-cover bg-center p-8'
                style={{
                    backgroundImage: `url(${ProfilePic})`
                }}
            >
                <div className='flex justify-between'>
                    <div className='bg-white rounded-sm p-2'>
                        <img src={bellIcon} alt="upload" />
                    </div>
                    <div className='flex w-auto gap-8'>
                        <div className='bg-white rounded-sm flex p-2 gap-2'>
                            <img src={bellIcon} alt="edit profile" />
                            <p>Edit Profile</p>
                        </div>
                        <div className='bg-white rounded-sm p-2'>
                            <img src={bellIcon} alt="options" />
                        </div>
                    </div>

                </div>
            </div>

            {/* User Image and Job Description */}
            <div className='flex'>
                <div className='rounded-full p-4 w-86 bg-white relative -top-16'>
                    <img src={ProfilePic} alt="" className='rounded-full' />
                </div>
                <div className='p-7 flex-1'>
                    <div className='flex flex-col justify-between items-start'>
                        <div className='w-full flex justify-between items-center'>
                            <h1 className='text-4xl font-bold'>{currentUser.name}</h1>
                            <div className='flex gap-2 items-center'>
                                <img src={bellIcon} alt="" />
                                <p>Neatanics/ Delhi</p>
                            </div>
                        </div>
                        {/* <h1 className='text-1xl font-light'>{currentUser.email}</h1> */}
                        <p className='py-2'>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers</p>
                        <div className='flex justify-start items-center gap-2 mt-2'>
                            <button className='px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-xl'>Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
