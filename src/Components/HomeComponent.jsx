import React from 'react'
import PostStatus from './common/PostStatus'
export default function HomeComponent({ currentUser }) {
    return (
        <div className='overflow-y-scroll'>
            <PostStatus currentUser={currentUser} />
        </div>
    )
}
