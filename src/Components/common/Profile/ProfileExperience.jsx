import React from 'react'
import ExperienceCard from './Components/ExperienceCard'

function ProfileExperience() {
    return (
        <div>
            <h1 className='text-[18px]'>Experience</h1>
            <div className='flex flex-col gap-2 divide-y divide-slate-200'>
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </div>
    )
}

export default ProfileExperience