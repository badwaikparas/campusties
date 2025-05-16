import React from 'react'
import DashboardCard from './Components/DashboardCard'

function ProfileDashboard() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-[18px]'>Your Dashboard</h1>
                {/* <span>GO TO STATS</span> */}
            </div>
            <div>
                <DashboardCard stats={367} title={"views"} />
                <DashboardCard stats={367} title={"posts today"} />
                <DashboardCard stats={367} title={"search appeareances"} />
            </div>

        </div>
    )
}

export default ProfileDashboard