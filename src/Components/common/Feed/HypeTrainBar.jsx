import React from 'react'
import icon from '../.../../../../Assets/ProfilePic/DSCN1525.JPG'

function HypeTrainBar({ event, percent, level = 9 }) {
    const bgColors = {
        1: 'bg-gray-200',
        2: 'bg-blue-200',
        3: 'bg-blue-400',
        4: 'bg-green-400',
        5: 'bg-yellow-400',
        6: 'bg-orange-400',
        7: 'bg-red-500',
        8: 'bg-pink-500',
        9: 'bg-purple-600',
    };
    const bgColors2 = {
        1: 'bg-gray-400',
        2: 'bg-blue-400',
        3: 'bg-blue-600',
        4: 'bg-green-600',
        5: 'bg-yellow-600',
        6: 'bg-orange-600',
        7: 'bg-red-700',
        8: 'bg-pink-700',
        9: 'bg-purple-800',
    };


    const bgColor = bgColors[level] || 'bg-blue-200'; // fallback
    const bgColor2 = bgColors2[level] || 'bg-blue-400'; // fallback
    return (
        <div className='relative h-[75px] w-full'>
            <div className={`absolute top-0 left-0 h-full z-10 ${bgColor} rounded-xl border-[1px]`}
                style={{
                    width: `${percent}%`
                }}
            >
                {/* <img src={icon} className="w-full h-full object-cover" /> */}
            </div>
            <div className="relative w-full h-[75px] z-20 border-2 rounded-xl flex justify-between bg-transparent">
                <div className='grow'>
                    <div className={`font-extrabold border-2 w-fit rounded-full px-1 m-1 ${bgColor2} text-white border-black`}>LVL {level}</div>
                    <div className='mx-1 font-bold line-clamp-1'>Operating Systems</div>
                </div>
                <div className='text-4xl font-bold mr-4 z-20 rounded-xl bg-transparent flex justify-center items-center'>
                    {percent}%
                </div>
            </div>

        </div>
    )
}

export default HypeTrainBar