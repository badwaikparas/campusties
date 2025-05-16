import React from 'react'
import ProjectImg from '../../../Assets/ProjectPhoto/ext.png'
import ProjectCard from './Components/ProjectCard'

function ProfileProject() {
    return (
        <div className='flex flex-col h-auto'>
            <div className='flex items-center gap-4 mb-5'>
                <h1 className='text-[18px]'>Project</h1>
                <p className='text-slate-600'>{3} of {12}</p>
            </div>

            <div className='flex gap-5'>
                <ProjectCard imgPath={ProjectImg} />
                <ProjectCard imgPath={ProjectImg} />
                <ProjectCard imgPath={ProjectImg} />
            </div>

        </div>
    )
}

export default ProfileProject