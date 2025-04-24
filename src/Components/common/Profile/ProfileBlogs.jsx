import React from 'react'
import BlogsCard from './Project/BlogsCard'

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