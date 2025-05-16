import React from 'react'

function DashboardCard({ stats, title }) {
    return (
        <div>
            <h1 className='text-6xl text-blue-400'>{stats}</h1>
            <p>{title}</p>
        </div>
    )
}

export default DashboardCard