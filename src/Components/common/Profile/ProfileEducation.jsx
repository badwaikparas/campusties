import React from 'react'
import EducationCard from './Components/EducationCard'

function ProfileEducation() {
    return (
        <div>
            <h1 className='text-[18px]'>Education</h1>
            <div className='flex flex-col gap-2 divide-y divide-slate-200'>
                <EducationCard />
            </div>
        </div>
    )
}

export default ProfileEducation