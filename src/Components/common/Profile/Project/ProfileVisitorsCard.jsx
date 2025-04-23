import React from 'react'
import profilePic from '../../../../Assets/ProfilePic/DSCN1525.JPG'

function ProfileVisitorsCard({ name, description }) {
    return (
        <>
            <div className="flex gap-4 items-center py-2">
                <img src={profilePic} alt="" className="w-12 h-12 rounded-full object-cover" />
                <div>
                    <p className="overflow-hidden h-auto line-clamp-1 font-bold">{name}</p>
                    <div className="flex">
                        <p className="overflow-hidden h-auto line-clamp-1 text-[14px]">{description}aassasdasdasdasa</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProfileVisitorsCard