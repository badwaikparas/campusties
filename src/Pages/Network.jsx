import React from 'react'
import { ConnectionTab, GroupTab, NetworkNavigator, NetworkUI, PageTab } from '../Components/NetworkComponent'
import { Outlet, Route, Routes } from 'react-router-dom'

const Network = () => {
    return (
        <>
            <div className='flex gap-14 mt-20 overflow-auto'>
                <NetworkNavigator />
                {/* <NetworkMain /> */}
                <Routes>
                    <Route index element={<NetworkUI />} />
                    <Route path="invitations" element={<NetworkUI />} />
                    <Route path="connections" element={<ConnectionTab />} />
                    <Route path="groups" element={<GroupTab />} />
                    <Route path="pages" element={<PageTab />} />
                </Routes>


            </div>

        </>
    )
}

export default Network
