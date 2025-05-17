import React from 'react'
import Card from '../Card'
import AlumniCard from './Components/AlumniCard'

function FeedRightSection() {
    return (
        <div className='mt-[30px] min-w-fit max-w-max[] flex flex-col gap-[30px]'>
            <Card paddingX={20} paddingY={20}>
                <div className='text-[22px] font-bold'>
                    <div>Alumni</div>
                </div>
                <div>
                    <AlumniCard name={"Stacy Lang"} description={"Freelance UI/UX"} />
                    <AlumniCard name={"Stacy Lang"} description={"Freelance UI/UX"} />
                </div>
            </Card>
            <Card paddingX={20} paddingY={20}>
                <div className='text-[22px] font-bold'>
                    <div>Students</div>
                </div>
                <div>
                    <div>
                        <AlumniCard name={"Stacy Lang"} description={"Freelance UI/UX"} />
                        <AlumniCard name={"Stacy Lang"} description={"Freelance UI/UX"} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default FeedRightSection