import React from 'react'
import PostStatus from './common/Feed/PostStatus'
import FeedLeftSection from './common/Feed/FeedLeftSection'
export default function HomeComponent({ currentUser }) {
    return (
        <div className='flex justify-evenly items-start  overflow-y-scroll'>
            <FeedLeftSection />
            <PostStatus currentUser={currentUser} />
        </div>
    )
}
