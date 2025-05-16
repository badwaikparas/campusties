import React from 'react'
import SkillsCard from './Components/SkillsCard'

function ProfileSkills({ skills }) {
    return (
        <div>
            <h1 className='text-[18px]'>Skills & Endoresments</h1>
            <div>
                {
                    // skills.map((skill, index) => {
                    <SkillsCard />
                    // })
                }
            </div>
        </div>
    )
}

export default ProfileSkills