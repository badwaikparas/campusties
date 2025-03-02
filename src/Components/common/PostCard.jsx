import React from 'react'

export default function PostCard({ post }) {
    return (
        <div className='w-[80%] bg-slate-100 mt-[30px] rounded-4xl flex flex-col text-left'>
            <p className='text-[12px] font-normal p-[20px] max-h-[120px]'
                style={{
                    color: 'rgba(0, 0, 0, 0.6)'
                }}
            >{post.timeStamp}</p>
            <p className='text-bold p-[20px] text-[14px]'>{post.userEmail}</p>
            <p className='text-left p-[20px] text-[14px] font-normal'
                style={{
                    color: "rgba(0, 0, 0, 0.9)"
                }}
            >{post.status}</p>
        </div>
    )
}
