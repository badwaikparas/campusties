import React from 'react'
import ProfileVisitorsCard from './Project/ProfileVisitorsCard'

function ProfileVisitors() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-[18px]'>Visitors</h1>
                <p className='text-[14px] text-blue-400'>VIEW ALL</p>
            </div>
            <div>
                <ProfileVisitorsCard name={"Stacy Lang"} description={"Freelance UI/UX"} />
                <ProfileVisitorsCard name={"Stacy Lang"} description={"Freelance UI/UX"} />
            </div>
        </div>
    )
}

export default ProfileVisitors