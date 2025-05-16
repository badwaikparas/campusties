import React, { useState, useEffect } from 'react'
import Card from '../Card'
import bellIcon from '../../../Assets/NavbarIcons/bell.svg'
import HypeTrainBar from './HypeTrainBar';

function FeedLeftSection() {
    const [events, seetEvents] = useState([
        {
            id: 1,
            name: "asdassdassdas",
            // date: new Date(),

        },
        {
            id: 2,
            name: "asdassdassdas",
            // date: new Date(),
        }
    ]);
    useEffect(() => {
        //  get events
    }, [])
    return (
        <div className='mt-[30px] w-[27%] max-w-max[] flex flex-col gap-[30px]'>
            <Card paddingX={20} paddingY={20}>
                <div className='text-[22px] font-bold'>
                    <div>Upcoming Seminars</div>
                </div>
                {
                    events.map((event) => {
                        return <div key={event.id} className='flex justify-start gap-2 items-center my-3 ml-2'>
                            <img src={bellIcon} alt="" className='w-6' />
                            <div>
                                <p className='font-extrabold text-[16px]'>{event.name}</p>
                                <p className='font-extralight text-[11px]'>{event.date}, {event.time} sadadasdd</p>
                            </div>
                        </div>
                    })
                }
            </Card>
            <Card paddingX={20} paddingY={20}>
                <div className='text-[22px] font-bold'>
                    <div>Hype Train</div>
                </div>
                <div className='flex flex-col gap-5 mt-[12px]'>
                    {
                        events.map((event, index) => {
                            return <div key={event.id}>
                                <HypeTrainBar event={event} percent={80} />
                            </div>
                        })
                    }
                </div>
            </Card>
        </div>
    )
}

export default FeedLeftSection