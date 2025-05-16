import React from 'react'
import logo from '../../../../Assets/ProfilePic/DSCN1525.JPG'

function ExperienceCard() {
    return (
        <div>
            <div className='flex justify-start items-start gap-3 p-4 rounded-md'>
                <img src={logo} alt="" className='rounded-full w-[54px] h-[54px] object-cover' />
                <div>
                    <h1 className='text-[16px] mb-2'> Freelance UX/UI designer</h1>
                    <div className='flex justify-start items-center mb-2 gap-3 '>
                        <span className='bg-slate-200 px-3 rounded-full'>Self Employed</span>
                        <span className='bg-slate-200 px-3 rounded-full'>Around the world</span>
                        <span className='bg-slate-200 px-3 rounded-full'>Upwork</span>
                    </div>
                    <div className='flex justify-start items-center gap-3 mb-4'>
                        <span>June 2016 - Present</span>
                        <span className='text-blue-400'>3 yrs 3mos</span>
                    </div>
                    <div>
                        <p className=''>
                            Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard