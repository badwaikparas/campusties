import React from 'react'

export default function PostCard({ post }) {
    return (
        <div className='w-[80%] bg-slate-100 mt-[30px] rounded-4xl flex flex-col justify-start items-start gap-2 text-left'>
            <div>
                <p className='text-bold text-2xl pt-[20px]  px-[20px] '>{post.username}</p>
                <p className='text-[12px] font-normal px-[20px] max-h-[120px]'
                    style={{
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}
                >{post.timeStamp}</p>
            </div>

            <p className='text-left pb-[20px] px-[20px] text-[14px] font-normal'
                style={{
                    color: "rgba(0, 0, 0, 0.9)"
                }}
            >{post.status}</p>
        </div>
    )
}
