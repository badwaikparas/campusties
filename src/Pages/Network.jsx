import React from 'react'
import Navbar from '../Components/common/Navbar'
import { NetworkMain, NetworkNavigator, NetworkUI } from '../Components/NetworkComponent'
// import NetworkNavigator from '../Components/NetworkComponent'

const Network = () => {
  return (
    <>
        <Navbar />
        <div className='flex gap-14 mt-20 scroll-auto'>
            <NetworkNavigator />
            {/* <NetworkMain /> */}
            <NetworkUI />

        </div>
        
    </>
  )
}

export default Network
