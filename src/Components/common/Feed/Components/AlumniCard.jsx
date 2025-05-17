import React from 'react'
import profilePic from '../../../../Assets/ProfilePic/DSCN1525.JPG'

function AlumniCard({ name, description }) {
    return (
        <>
            <div className="flex gap-6 items-center py-2">
                <div className='flex gap-4'>
                    <img src={profilePic} alt="" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <p className="overflow-hidden h-auto line-clamp-1 font-bold">{name}</p>
                        <div className="flex">
                            <p className="overflow-hidden h-auto line-clamp-1 text-[14px]">{description}</p>
                        </div>
                    </div>
                </div>
                <div className='h-fit w-fit px-1 text-blue-300 border-2 border-dashed border-blue-300 rounded-full'>
                    connect
                </div>
            </div>
        </>

    )
}

export default AlumniCard