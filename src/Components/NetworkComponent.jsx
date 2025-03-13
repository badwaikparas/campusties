import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ConnectionCard = ({ name, role, message, connections, image, isNew , isAccepted}) => {
  return (
    <div className='flex items-start gap-4 bg-white p-4 rounded-lg shadow-md mb-4'>
      <img src={image} alt={name} className='w-12 h-12 rounded-full' />
      <div className='flex-1'>
        <h4 className='font-semibold'>{name}</h4>
        <p className='text-sm text-gray-500'>{role}</p>
        {connections && <p className='text-blue-500 text-sm'>{connections} connections</p>}
        {isNew && <p className='text-sm text-gray-700 mt-2'>{message}</p>}
      </div>
      {isNew ? (
        <div className='flex gap-2'>

          <button className='bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700 transition'>Accept</button>
          <button variant='outline ' className='hover:scale-105'>Decline</button>
        </div>
      ):
      (
        isAccepted !== undefined && ( // Only show if isAccepted is provided
          isAccepted ? (
            <p className='text-sm text-gray-700 mt-2'>Accepted</p>
          ) : (
            <p className='text-sm text-gray-700 mt-2'>Declined</p>
          )
        )
      )
      }
    </div>
  )
}

const RecievedTab = () =>{
  
  return(
    <div >
        

        <h3 className='text-center text-gray-600 mb-4'>You have <span className='text-blue-500'>2 New Connections</span></h3>

        <ConnectionCard
          name='Brandon Wilson'
          role='Senior UX Designer'
          message="Hey, I saw your works. I like it! Can we do something together?"
          connections='623'
          image="https://i.pravatar.cc/300?img=11"
          isNew={true}
        />
        <ConnectionCard
          name='Theresa Steward'
          role='iOS Developer'
          connections='481'
          image="https://i.pravatar.cc/300?img=5"
          isNew={true}
        />

        <h3 className='text-center text-gray-600 my-6'>Recent Connections</h3>
        <div className='grid grid-cols-2 gap-4'>
          <ConnectionCard name='Audrey Alexander' role='Team Lead at Google' image='https://i.pravatar.cc/300?img=6' />
          <ConnectionCard name='Kyle Fisher' role='Product Designer at Commander Corp' image='https://i.pravatar.cc/300?img=1' />
          <ConnectionCard name='Darlene Black' role='HR Manager, 10,000 connections' image='https://i.pravatar.cc/300?img=2' />
          <ConnectionCard name='Eduardo Russell' role='Full Stack Developer at Yandex' image='https://i.pravatar.cc/300?img=3' />
        </div>
    </div>
  )
}
const SentTab = ()=>{
    return <div > 
              <ConnectionCard name='Audrey Alexander' role='Team Lead at Google' image='https://i.pravatar.cc/300?img=7' isAccepted={true} />
              <ConnectionCard name='Eduardo Russell' role='Full Stack Developer at Yandex' image='https://i.pravatar.cc/300?img=9' isAccepted={false} />
           </div>
}



export const NetworkNavigator = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("invitations"); // Default to 'Invitations'

  useEffect(() => {
    const path = location.pathname.split("/").pop(); // Get last part of URL
    setActiveSection(path || "invitations"); // Default to "invitations" if no specific path
  }, [location.pathname]);

  const handleNavigation = (section, path) => {
    setActiveSection(section);
    navigate(path);
  };

  return (
    <div className="text-black w-56 h-40 bg-white ml-64 ">
      <div
        className={`border-gray-200 border-b p-2 cursor-pointer ${
          activeSection === "connections" ? "bg-gray-300 " : "hover:bg-gray-100"
        } ` }
        onClick={() => handleNavigation("connections", "/network/connections")}
      >
        Connections
      </div>
      <div
        className={`border-gray-200 border-b p-2 cursor-pointer ${
          activeSection === "invitations" ? "bg-gray-300 " : "hover:bg-gray-100"
        }`}
        onClick={() => handleNavigation("invitations", "/network/invitations")}
      >
        Invitations
      </div>
      <div
        className={`border-gray-200 border-b p-2 cursor-pointer ${
          activeSection === "groups" ? "bg-gray-300 " : "hover:bg-gray-100"
        } `}
        onClick={() => handleNavigation("groups", "/network/groups")}
      >
        Groups
      </div>
      <div
        className={`border-gray-200 border-b p-2 cursor-pointer ${
          activeSection === "pages" ? "bg-gray-300 " : "hover:bg-gray-100"
        } `}
        onClick={() => handleNavigation("pages", "/network/pages")}
      >
        Pages
      </div>
    </div>
  );
}

export const NetworkUI = () => {
  const [activeTab, setActiveTab] = useState("received");
  return (
    <div className='bg-gray-100  p-5 overflow-auto w-[55%]'>
      <div className='flex gap-4 mb-6'>
          <button
            onClick={() => setActiveTab("received")}
            className={`px-6 py-2 rounded shadow-md transition ${activeTab === "received"
                ? "bg-green-500 text-white hover:bg-green-700"
                : "  text-gray-500 bg-white hover:bg-green-500 hover:text-white"
              }`}
          >
            Received
          </button>
          <button
            onClick={() => setActiveTab("sent")}
            className={`px-6 py-2 rounded shadow-md transition ${activeTab === "sent"
                ? "bg-green-500 text-white hover:bg-green-700"
                : " text-gray-500 bg-white hover:bg-green-500 hover:text-white"
              }`}
          >
            Sent
          </button>
      </div>
      {
        activeTab === "received"? <RecievedTab />:<SentTab />
      }
      
    </div>
  )
}

export const NetworkMain = () => {
  return (
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
          image='https://avatar.iran.liara.run/public/34'
          isNew={true}
        />

      </div>
    </div>

  )
}


