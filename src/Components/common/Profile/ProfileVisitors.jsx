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
                <ProfileVisitorsCard name={"Paras Badwaik 213141231231212313123"} description={"Freelance UI/UX aAAAAAAAAAAAAAAAA"} />
                <ProfileVisitorsCard name={"Paras Badwaik 213141231231212313123"} description={"Freelance UI/UX aAAAAAAAAAAAAAAAA"} />
            </div>
        </div>
    )
}

export default ProfileVisitors