import React from 'react'
import image from '../../../../Assets/ProfilePic/DSCN1525.JPG'

function SkillsCard({ endorsement }) {
    return (
        <div className='w-[250px] h-[80px] rounded-sm border-2 border-slate-400 p-2'>
            <div className='flex justify-between items-center mb-2'>
                <span>{/* {skill.title} */}Skill</span>
                <span>{/* {skill.endorsements.length} */}6</span>
            </div>
            <div className='flex justify-start items-center gap-0 :child'>
                {/* { */}
                {/* // skill.endorsements.map((endorsement) => {
                    // return <img src={endorsement.imgUrl} alt="" key={endorsement.uuid}/>
                    // return */}
                <img src={image} alt="" key={"hi"} className='rounded-full w-6' />
                <img src={image} alt="" key={"hi"} className='rounded-full w-6 -ml-2' />
                <img src={image} alt="" key={"hi"} className='rounded-full w-6 -ml-2' />
                <img src={image} alt="" key={"hi"} className='rounded-full w-6 -ml-2' />
                <img src={image} alt="" key={"hi"} className='rounded-full w-6 -ml-2' />
                {/* // }) */}
                {/* } */}
            </div>
        </div>
    )
}

export default SkillsCard