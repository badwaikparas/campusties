import React from 'react'

export default function ProjectCard({ imgPath }) {
    return (
        <div className='flex flex-col items-start bg-cover bg-center'>
            <div className='max-w-70 rounded-xl overflow-hidden mb-3'>
                <img src={imgPath} alt="projectImage" className='cover' />
            </div>
            <p>
                Zara redesign concept
            </p>
            <div className=''>
                <p>
                    UX/UI design,
                </p>
                <p>15.07.2019</p>
            </div>
        </div>
    )
}
