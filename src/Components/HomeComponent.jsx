import React from 'react'
import PostStatus from './common/PostStatus'
export default function HomeComponent({ currentUser }) {
    return (
        <div className='overflow-y-scroll overflow-x-hidden'>
            <PostStatus currentUser={currentUser} />
        </div>
    )
}
