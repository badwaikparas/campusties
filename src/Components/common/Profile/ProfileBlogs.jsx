import React from 'react'
import BlogsCard from './Components/BlogsCard'

function ProfileBlogs() {
    return (
        <>
            <div>Blogs</div>
            <div className='mt-4'>
                <BlogsCard title={"Blog  Title"} description={"Blog description"} />
            </div>
        </>
    )
}

export default ProfileBlogs