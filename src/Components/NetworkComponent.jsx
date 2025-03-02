import React from 'react'
// import { button } from '@/components/ui/button'


const ConnectionCard = ({ name, role, message, connections, image, isNew }) => {
    return (
      <div className='flex items-start gap-4 bg-white p-4 rounded-lg shadow-md mb-4'>
        <img src={image} alt={name} className='w-12 h-12 rounded-full' />
        <div className='flex-1'>
          <h4 className='font-semibold'>{name}</h4>
          <p className='text-sm text-gray-500'>{role}</p>
          {connections && <p className='text-blue-500 text-sm'>{connections} connections</p>}
          {isNew && <p className='text-sm text-gray-700 mt-2'>{message}</p>}
        </div>
        {isNew && (
          <div className='flex gap-2'>
            
            <button className='bg-blue-500 text-white p-[3px] rounded'>Accept</button>
            <button variant='outline '>Decline</button>
          </div>
        )}
      </div>
    )
  }

export const NetworkNavigator = () => {
  return (
    <div className='text-black w-56 h-40 bg-white   ml-64 '>
        <div className='border-gray-200 border-b-1  p-2'>Connections</div>
        <div className='border-gray-200 border-b-1 p-2'>Invitations</div>
        <div className='border-gray-200 border-b-1 p-2'>Groups</div>
        <div className='border-gray-200 border-b-1 p-2'>Pages</div>
    </div>
  )
}

export const NetworkUI = () => {
    return (
      <div className='bg-gray-100  p-5 scroll-auto'>
        <div className='flex gap-4 mb-6'>
          <button className='bg-green-500 text-white rounded p-1'>Received</button>
          <button variant='outline'>Sent</button>
        </div>
  
        <h3 className='text-center text-gray-600 mb-4'>You have <span className='text-blue-500'>2 New Connections</span></h3>
  
        <ConnectionCard
          name='Brandon Wilson'
          role='Senior UX Designer'
          message="Hey, I saw your works. I like it! Can we do something together?"
          connections='623'
          image="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          isNew={true}
        />
        <ConnectionCard
          name='Theresa Steward'
          role='iOS Developer'
          connections='481'
          image="https://avatar.iran.liara.run/public/boy?username=Ash"
          isNew={true}
        />
  
        <h3 className='text-center text-gray-600 my-6'>Recent Connections</h3>
        <div className='grid grid-cols-2 gap-4'>
          <ConnectionCard name='Audrey Alexander' role='Team Lead at Google' image='https://via.placeholder.com/50' />
          <ConnectionCard name='Kyle Fisher' role='Product Designer at Commander Corp' image='https://via.placeholder.com/50' />
          <ConnectionCard name='Darlene Black' role='HR Manager, 10,000 connections' image='https://via.placeholder.com/50' />
          <ConnectionCard name='Eduardo Russell' role='Full Stack Developer at Yandex' image='https://via.placeholder.com/50' />
        </div>
      </div>
    )
  }

export const NetworkMain = () =>{
    return(
        <div>
            <div className='flex '>

                <div className='bg-emerald-200 w-36 p-2 text-center rounded '>
                    Received
                </div>
                <div className='bg-white w-36 p-2 text-center rounded '>
                    Sent
                </div>
            </div>
            <div className='w-[40rem] h-96  '>
                <div className='text-center mt-4'> You Have 2 new connections</div>
                <div className='w-full h-20 p-2 bg-white rounded mt-6 flex justify-center items-center'>
                    <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" width="55px" alt="" className='rounded-[50%] overflow-hidden' />
                    <div>

                    </div>
                </div>

                <ConnectionCard
        name='Brandon Wilson'
        role='Senior UX Designer'
        message="Hey, I saw your works. I like it! Can we do something together?"
        connections='623'
        image='https://via.placeholder.com/50'
        isNew={true}
      />

            </div>
        </div>

    )
}


