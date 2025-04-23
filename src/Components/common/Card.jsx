import React from 'react'

export default function Card({ paddingX = 0, paddingY = 0, children }) {
    return (
        <div style={{ padding: `${paddingY}px ${paddingX}px` }} className='bg-white rounded-xl my-6 overflow-hidden w-full'>
            {children}
        </div>
    );
}

