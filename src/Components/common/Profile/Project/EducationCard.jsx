import React from 'react'
import logo from '../../../../Assets/ProfilePic/DSCN1525.JPG'

function EducationCard() {
    return (
        <div>
            <div className='flex justify-start items-start gap-3 p-4 rounded-md'>
                <img src={logo} alt="" className='rounded-full w-[54px]' />
                <div>
                    <h1 className='text-[16px] mb-2'> Freelance UX/UI designer</h1>
                    <div className='mb-4'>Bachelor&apos;s degree Field Of StudyComputer and Information Systems Security/Information Assurance</div>
                    <div className='flex justify-start items-center gap-3 mb-4'>
                        <span>June 2016 - Present</span>
                        <span className='text-blue-400'>3yrs 3mos</span>
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

export default EducationCard