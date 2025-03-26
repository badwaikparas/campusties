import React from 'react'
import Navbar from '../Components/common/Navbar'
import  { ConnectionTab, GroupTab, NetworkNavigator, NetworkUI } from '../Components/NetworkComponent'
import { Outlet, Route, Routes } from 'react-router-dom'
// import NetworkNavigator from '../Components/NetworkComponent'

const Network = () => {
  return (
    <>
        <Navbar />
        <div className='flex gap-14 mt-20 overflow-auto'>
            <NetworkNavigator />
            {/* <NetworkMain /> */}
            
              <Routes>
                    <Route path="/invitations" element={<NetworkUI />} />
                    <Route path="/connections" element={<ConnectionTab />} />
                    <Route path="/groups" element={<GroupTab />} />
                    <Route path="/pages" element={<NetworkUI />} />
              </Routes>
            

        </div>
        
    </>
  )
}

export default Network
