import React, { useEffect, useState } from 'react'
import { GetCurrentUser } from '../../API/FireStoreAPI'
import profilePic from '../../Assets/ProfilePic/DSCN1525.JPG'

export default function PostCard({ post }) {
    const [postUser, setPostUser] = useState({})
    useEffect(() => {
        GetCurrentUser(setPostUser)
    }, [setPostUser])
    return (
        <div className='w-full bg-slate-100 mt-[30px] rounded-4xl flex flex-col justify-start items-start gap-2 text-left'>
            <div className='flex justify-start items-center pt-[20px]  px-[20px] gap-4 '>
                <div>
                    <img src={postUser.profilePictureUrl ? postUser.profilePictureUrl : profilePic} alt="" className='w-12 h-12 object-cover rounded-full' />
                </div>
                <div>
                    <p className='text-bold text-2xl '>{post.username}</p>
                    <p className='text-[12px] font-normal'
                        style={{
                            color: 'rgba(0, 0, 0, 0.6)'
                        }}
                    >{post.timeStamp}</p>
                </div>
            </div>

            <p className='text-left pb-[20px] px-[20px] text-[14px] font-normal'
                style={{
                    color: "rgba(0, 0, 0, 0.9)"
                }}
            >{post.status}</p>
        </div>
    )
}
